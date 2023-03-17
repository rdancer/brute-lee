document.addEventListener("DOMContentLoaded", function () {
  if (location.protocol !== 'file:'
        && location.hostname !== 'localhost'
        && location.href.includes('brute-lee')) {
    document.body.classList.add('production');
  }
});

(function () {
  function httpRequest(method, url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        callback(xhr.status, xhr.responseText);
      }
    };
    xhr.open(method, url, true);
    xhr.send();
  }

  function replacePageContent() {
    if (window.location.protocol === 'file:') {
      console.log('Page reloading is disabled for the file: protocol.');
      return;
    }

    httpRequest('HEAD', window.location.href, (status, response) => {
      if (status === 200) {
        httpRequest('GET', window.location.href, (status, newHTML) => {
          if (status === 200) {
            const parser = new DOMParser();
            const newDoc = parser.parseFromString(newHTML, 'text/html');
            const endOfTransmission = newDoc.querySelector('#end_of_transmission');

            if (endOfTransmission) {
              document.documentElement.innerHTML = newDoc.documentElement.innerHTML;
              console.log('Page content has been replaced.');
            } else {
              console.log('Did nothing because the page is being updated.');
            }
          }
        });
      }
    });
  }

  setInterval(replacePageContent, 60_000);
})();
