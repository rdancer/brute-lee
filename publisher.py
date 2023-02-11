import git


class Publisher:
    def __init__(self, repo="./"): # XXX
        self.repo = git.Repo(repo)
    
    def push_to_github(self, file_or_file_list, commit_message, **kwargs):
        author = kwargs.get("author", None)
        # the file_or_file_list can be a string or a list of strings
        if isinstance(file_or_file_list, str):
            file_list = [file_or_file_list]
        else:
            file_list = file_or_file_list

        with AutoStash(self.repo):
            # Stage the changes you want to commit
            print(f"Adding files: {file_list}")
            self.repo.git.add(file_list)

            # Commit the changes with a message
            print(f"Committing with message: {commit_message}")
            self.repo.git.commit(m=commit_message)
            if author:
                self.repo.git.commit("--amend", "--author", author, "--reuse-message", "HEAD")
                    
            try:
                # Push the changes to the remote repository
                print("Pushing to GitHub...")
                self.repo.git.push()

                # If everything was successful, print the commit message
                # TODO check if the commit & push were successful
                print(f"Successfully pushed to GitHub: {commit_message}")
            except git.exc.GitCommandError as e:
                print(e.stderr)
                print (f"Cannot push to GitHub at the moment. Stuff is in the local repo: {commit_message}")


class AutoStash:
    def __init__(self, repo):
        self.repo = repo
        self.old_branch = None
        self.is_dirty = False

    def __enter__(self):

        # If branch is not main save it and change to main
        if self.repo.active_branch.name != "main":
            if self.repo.is_dirty():
                self.was_dirty = True
                self.repo.git.stash("save")
            self.old_branch = self.repo.active_branch.name
            self.repo.git.checkout("main")
    
    def __exit__(self, exc_type, exc_value, exc_traceback):
        # Roll back
        if self.old_branch:
            self.repo.git.checkout(self.old_branch)
        if self.is_dirty:
            self.repo.git.stash("pop")
