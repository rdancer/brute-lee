/*
 * language: JavaScript
 * problem: 767. Reorganize String
 * link: https://leetcode.com/problems/reorganize-string/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
  return ["aba","","vlvov","ababa","brbsf","fpfsf","babab","hymzo","lblflxl","","ninrdwf","mcmwmxm","bababab","aebhcvd","babobqbyb","ababababa","epeqgvgym","blbqbubvb","","wiwnbodpf","gigkgpgvg","ababababab","jgjibmcoex","vdvevjvsv","","bibrftfycz","krkrktktkakpkqkwkzk","abababababababababa","hahcmdmenfnkoposrtr","lglglplplklqltlwlyl","abababababababababa","hihmlnlopqprvsvxazd","pepepbpgpqpspvpwpyp","abababababababababab","cocgcickmlmsmtbwbxoz","lelelululclhljlmlwl","","wfwfwhwhgagignvovrvt","rararbrbririrsrsrxrxrdrergrhrkrlrnrorprvryrzr","","hjhmhmhoyoypypyrcrcscsdtdtdwkwkgklvnvqvuexezj","bybybybybxbxbxbcbcbhbhbjbjbnbnbibkbmbrbsbtbwb","","wzwzwzwawabebebsdsdvdvgygygfkikjklomonoqprpup","qkqkqkqkqaqaqaqpqpqpqhqhqjqjqvqvqzqzqbqoqrquqwqxq","","npnpnananeneififigigijxjxkxkxococtctlblhlqmumvmwpz","ghghghgtgtgtgcgcgfgfgngngegigkgmgogpgsgugvgwgxgyg","","gwgwgzgznznfnfnirirkrkroaoauaumxmxmbqcqdqetjtltvwy","nqnqnqnqnqnqnqnqnqnqnqnqnqnqnqnqnonononononononononononononononenenenenenenenenenenenenenenininininininininininininininjnjnjnjnjnjnjnjnjnjnjnjnjnjnlnlnlnlnlnlnlnlnlnlnlnlnlnlnvnvnvnvnvnvnvnvnvnvnvnvnvnbnbnbnbnbnbnbnbnbnbnbnbnpnpnpnpnpnpnpnpnpnpnpnpnsnsnsnsnsnsnsnsnsnsnsnsngngngngngngngngngngngntntntntntntntntntntntnhnhnhnhnhnhnhnhnhnhndndndndndndndndndnxnxnxnxnxnxnxnxnxncncncncncncncncnknknknknknknknknmnmnmnmnmnmnmnmnfnfnfnfnfnfnfnunununununununwnwnwnwnwnwnanananananynynynynynznznznznznrnrnrnrn","","jpjpjpjpjpjyjyjyjyjyjyjyjyjyjyjyjyjyjyjyjyjyjyjyjyjgjgjgjgjgqgqgqgqgqgqgqgqgqgqgqgqgqgqrqrqrqrqrqrqrqrqrqrqrqrxrxrxrxrxrxrxuxuxuxuxuxuxuxuxuxuxuxuxuxuxuxuxuxuxdldldldldldldldldldldldldldldldldlhlhlhlhlhlhlhlhnhnhnhnhnhnhnhnhnhnknknknknknknknknknknknknknkakakakasasasasasasasasasasasasasasasasasazazczczczczczczczczczczczczczczcfcfcfcfcfcfcfcfefefefefefefefeieieieieieieieieieieieieieieiotototototototototototototototobobobobobobvbvbvbvbvbvbvbvbvwvwvwvwvwvwvwvwvwvwvwvwvwpwpmpmpmpmpmpmpmpmpmpmpmpmpmp","xaxaxaxaxaxaxaxaxaxaxaxaxaxaxjxjxjxjxjxjxjxjxjxjxjxjxjxjxoxoxoxoxoxoxoxoxoxoxoxoxoxoxpxpxpxpxpxpxpxpxpxpxpxpxpxpxyxyxyxyxyxyxyxyxyxyxyxyxyxyxfxfxfxfxfxfxfxfxfxfxfxfxfxlxlxlxlxlxlxlxlxlxlxlxlxlxuxuxuxuxuxuxuxuxuxuxuxuxuxwxwxwxwxwxwxwxwxwxwxwxwxwxnxnxnxnxnxnxnxnxnxnxnxnxixixixixixixixixixixixqxqxqxqxqxqxqxqxqxqxqxtxtxtxtxtxtxtxtxtxtxtxrxrxrxrxrxrxrxrxrxrxsxsxsxsxsxsxsxsxsxsxmxmxmxmxmxmxmxmxmxbxbxbxbxbxbxbxbxdxdxdxdxdxdxdxexexexexexexexvxvxvxvxvxvxvxzxzxzxzxzxzxzxkxkxkxkxkxkxhxhxhxhxhxcxcxcxgxgxgx","","hmhmhmhmhmhmhmhmhmhmhmhvhvhvhvhvhvhvhvhvhvhvhvhvhvhvhvzvzvzvzwzwzwzwzwzwzwzwzwzwzwzwzwzwzwzwzwzwzwzxzxzxzxzxcxcxcxcxcxcxcxcxcxcxcxcxcxcxcbcbcbcbcbcbcbcbcbpbpbpbpbpbpbpbpbpbpipipipipipipipipipipipipididididididjdjdjdjdjdjdjdjdjdjdjdjdjdjdjdjojojososososososososososososososososososoktktktktktktktktktktktktktktktktktututututuyuyuyuyuyuyuyuyuyuyuyuyuyfyfyfyfyfyfyfyfyfefefefefefefefeqeqeqeqeqeqeqeqeqeqeqeqeqnqnqnqnrnrnrnrnrnrnrnrnrnrnrnrnrnrnrnrnalalalalalalalalalalalalalalglglglglglgmgmgmgmgmgmgmgm","vkvkvkvkvkvkvkvkvkvkvkvkvkvkvkvkvkvkvkvkvpvpvpvpvpvpvpvpvpvpvpvpvpvpvdvdvdvdvdvdvdvdvdvdvdvdvdvavavavavavavavavavavavavivivivivivivivivivivivivmvmvmvmvmvmvmvmvmvmvmvmvuvuvuvuvuvuvuvuvuvuvuvuvxvxvxvxvxvxvxvxvxvxvxvxvyvyvyvyvyvyvyvyvyvyvyvyvevevevevevevevevevevevcvcvcvcvcvcvcvcvcvcvovovovovovovovovovovqvqvqvqvqvqvqvqvqvqvfvfvfvfvfvfvfvfvfvlvlvlvlvlvlvlvlvlvzvzvzvzvzvzvzvzvzvgvgvgvgvgvgvgvgvhvhvhvhvhvhvhvhvjvjvjvjvjvjvjvjvtvtvtvtvtvtvtvwvwvwvwvwvwvwvbvbvbvbvbvbvnvnvnvnvnvnvrvrvrvrvrvrvsvsvsvsvsvsv","","hihihihohohohohohohohohohohohohohohohohohohohohbhbhbhbhbtbtbtbtbtbtbtbtbtbtbtbtbtbtbtjtjtjtjtjtjtjtjtjtjtjtjtjnjnjnjnjnjnynynynynynynynynynynynynynynynynynynznznzczczczczczczczczczczczczczczczcfcfcfcfcfcfcfcfcfmfmfmfmfmfmfmfmfmqmqmqmqmqmqmqmqmqmqmqmqmqmqmqmqpqprprprprprprprprprprprprprprprprprpdpdpdpdkdkdkdkdkdkdkdkdkdkdkdkdkgkgkgkgkgkgkgkgkgxgxgxgxgxgxgxgxsxsxsxsxsxsxsxsxsxsxsxsxsxsasasawawawawawawawawawawawawawawawavavavevevevevevevevevevevevelelelelelelelelelililililiuiuiuiuiuiuiuiuiuiuiuiuiu","adadadadadadadadadadadadadadadavavavavavavavavavavavavavavavabababababababababababababakakakakakakakakakakakakakasasasasasasasasasasasasasalalalalalalalalalalalalatatatatatatatatatatatataeaeaeaeaeaeaeaeaeaeaearararararararararararazazazazazazazazazazazajajajajajajajajajajamamamamamamamamamamauauauauauauauauauauaxaxaxaxaxaxaxaxaxaxahahahahahahahahahaiaiaiaiaiaiaiaiaiaqaqaqaqaqaqaqaqaqawawawawawawawawawayayayayayayayayayacacacacacacacagagagagagagaganananananananaoaoaoaoaoaoaoapapapapapapafafafafa","","dbdbdbdadcb","abacbc","abacbc","abacacbcb","abacacbcb","","hjhjhjhfhfjfj","eweweweweweweweweweweweweweueueueueueueueueueueueueueueuhuhuhuhuhuhshshshshshshshshshshshshshshshshshshshphphphpcpcpcpcpcpcpcpcpcpcpcpcpcpcpcrcrcrcrcrcrcrcrcrcrcrcrmrmrmrmrmrmrmxmxmxmxmxmxmxmxmxmxmxmxmxmxmxmxmxmxmgmgvgvgvgvgvgvgvgvgvgvgvgvgvgvgvgvovovovovovovovovonononononononononbnbnbnbnbnbnbnbnbnbnbnbnbnbnbabaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiatatatatatftftftftftftftftftftftfdfdfdfdfdfdfdfdfdfdfdydydydydyzyzyzyzyzyzyzyzyzyzyzyzyzyzyjyjyjyjkjkjkjkjkjkjkjklklklklklklklklklklklkqkqkqwqwqwqwqwqwqwqwq","a",
      ][testNumber++];  
};