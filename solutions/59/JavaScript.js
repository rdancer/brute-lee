/*
 * language: JavaScript
 * problem: 59. Spiral Matrix II
 * link: https://leetcode.com/problems/spiral-matrix-ii/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  return [[[1,2,3],[8,9,4],[7,6,5]],[[1]],[[1,2],[4,3]],[[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]],[[1,2,3,4,5],[16,17,18,19,6],[15,24,25,20,7],[14,23,22,21,8],[13,12,11,10,9]],[[1,2,3,4,5,6],[20,21,22,23,24,7],[19,32,33,34,25,8],[18,31,36,35,26,9],[17,30,29,28,27,10],[16,15,14,13,12,11]],[[1,2,3,4,5,6,7],[24,25,26,27,28,29,8],[23,40,41,42,43,30,9],[22,39,48,49,44,31,10],[21,38,47,46,45,32,11],[20,37,36,35,34,33,12],[19,18,17,16,15,14,13]],[[1,2,3,4,5,6,7,8],[28,29,30,31,32,33,34,9],[27,48,49,50,51,52,35,10],[26,47,60,61,62,53,36,11],[25,46,59,64,63,54,37,12],[24,45,58,57,56,55,38,13],[23,44,43,42,41,40,39,14],[22,21,20,19,18,17,16,15]],[[1,2,3,4,5,6,7,8,9],[32,33,34,35,36,37,38,39,10],[31,56,57,58,59,60,61,40,11],[30,55,72,73,74,75,62,41,12],[29,54,71,80,81,76,63,42,13],[28,53,70,79,78,77,64,43,14],[27,52,69,68,67,66,65,44,15],[26,51,50,49,48,47,46,45,16],[25,24,23,22,21,20,19,18,17]],[[1,2,3,4,5,6,7,8,9,10],[36,37,38,39,40,41,42,43,44,11],[35,64,65,66,67,68,69,70,45,12],[34,63,84,85,86,87,88,71,46,13],[33,62,83,96,97,98,89,72,47,14],[32,61,82,95,100,99,90,73,48,15],[31,60,81,94,93,92,91,74,49,16],[30,59,80,79,78,77,76,75,50,17],[29,58,57,56,55,54,53,52,51,18],[28,27,26,25,24,23,22,21,20,19]],[[1,2,3,4,5,6,7,8,9,10,11],[40,41,42,43,44,45,46,47,48,49,12],[39,72,73,74,75,76,77,78,79,50,13],[38,71,96,97,98,99,100,101,80,51,14],[37,70,95,112,113,114,115,102,81,52,15],[36,69,94,111,120,121,116,103,82,53,16],[35,68,93,110,119,118,117,104,83,54,17],[34,67,92,109,108,107,106,105,84,55,18],[33,66,91,90,89,88,87,86,85,56,19],[32,65,64,63,62,61,60,59,58,57,20],[31,30,29,28,27,26,25,24,23,22,21]],[[1,2,3,4,5,6,7,8,9,10,11,12],[44,45,46,47,48,49,50,51,52,53,54,13],[43,80,81,82,83,84,85,86,87,88,55,14],[42,79,108,109,110,111,112,113,114,89,56,15],[41,78,107,128,129,130,131,132,115,90,57,16],[40,77,106,127,140,141,142,133,116,91,58,17],[39,76,105,126,139,144,143,134,117,92,59,18],[38,75,104,125,138,137,136,135,118,93,60,19],[37,74,103,124,123,122,121,120,119,94,61,20],[36,73,102,101,100,99,98,97,96,95,62,21],[35,72,71,70,69,68,67,66,65,64,63,22],[34,33,32,31,30,29,28,27,26,25,24,23]],[[1,2,3,4,5,6,7,8,9,10,11,12,13],[48,49,50,51,52,53,54,55,56,57,58,59,14],[47,88,89,90,91,92,93,94,95,96,97,60,15],[46,87,120,121,122,123,124,125,126,127,98,61,16],[45,86,119,144,145,146,147,148,149,128,99,62,17],[44,85,118,143,160,161,162,163,150,129,100,63,18],[43,84,117,142,159,168,169,164,151,130,101,64,19],[42,83,116,141,158,167,166,165,152,131,102,65,20],[41,82,115,140,157,156,155,154,153,132,103,66,21],[40,81,114,139,138,137,136,135,134,133,104,67,22],[39,80,113,112,111,110,109,108,107,106,105,68,23],[38,79,78,77,76,75,74,73,72,71,70,69,24],[37,36,35,34,33,32,31,30,29,28,27,26,25]],[[1,2,3,4,5,6,7,8,9,10,11,12,13,14],[52,53,54,55,56,57,58,59,60,61,62,63,64,15],[51,96,97,98,99,100,101,102,103,104,105,106,65,16],[50,95,132,133,134,135,136,137,138,139,140,107,66,17],[49,94,131,160,161,162,163,164,165,166,141,108,67,18],[48,93,130,159,180,181,182,183,184,167,142,109,68,19],[47,92,129,158,179,192,193,194,185,168,143,110,69,20],[46,91,128,157,178,191,196,195,186,169,144,111,70,21],[45,90,127,156,177,190,189,188,187,170,145,112,71,22],[44,89,126,155,176,175,174,173,172,171,146,113,72,23],[43,88,125,154,153,152,151,150,149,148,147,114,73,24],[42,87,124,123,122,121,120,119,118,117,116,115,74,25],[41,86,85,84,83,82,81,80,79,78,77,76,75,26],[40,39,38,37,36,35,34,33,32,31,30,29,28,27]],[[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],[56,57,58,59,60,61,62,63,64,65,66,67,68,69,16],[55,104,105,106,107,108,109,110,111,112,113,114,115,70,17],[54,103,144,145,146,147,148,149,150,151,152,153,116,71,18],[53,102,143,176,177,178,179,180,181,182,183,154,117,72,19],[52,101,142,175,200,201,202,203,204,205,184,155,118,73,20],[51,100,141,174,199,216,217,218,219,206,185,156,119,74,21],[50,99,140,173,198,215,224,225,220,207,186,157,120,75,22],[49,98,139,172,197,214,223,222,221,208,187,158,121,76,23],[48,97,138,171,196,213,212,211,210,209,188,159,122,77,24],[47,96,137,170,195,194,193,192,191,190,189,160,123,78,25],[46,95,136,169,168,167,166,165,164,163,162,161,124,79,26],[45,94,135,134,133,132,131,130,129,128,127,126,125,80,27],[44,93,92,91,90,89,88,87,86,85,84,83,82,81,28],[43,42,41,40,39,38,37,36,35,34,33,32,31,30,29]],[[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],[60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,17],[59,112,113,114,115,116,117,118,119,120,121,122,123,124,75,18],[58,111,156,157,158,159,160,161,162,163,164,165,166,125,76,19],[57,110,155,192,193,194,195,196,197,198,199,200,167,126,77,20],[56,109,154,191,220,221,222,223,224,225,226,201,168,127,78,21],[55,108,153,190,219,240,241,242,243,244,227,202,169,128,79,22],[54,107,152,189,218,239,252,253,254,245,228,203,170,129,80,23],[53,106,151,188,217,238,251,256,255,246,229,204,171,130,81,24],[52,105,150,187,216,237,250,249,248,247,230,205,172,131,82,25],[51,104,149,186,215,236,235,234,233,232,231,206,173,132,83,26],[50,103,148,185,214,213,212,211,210,209,208,207,174,133,84,27],[49,102,147,184,183,182,181,180,179,178,177,176,175,134,85,28],[48,101,146,145,144,143,142,141,140,139,138,137,136,135,86,29],[47,100,99,98,97,96,95,94,93,92,91,90,89,88,87,30],[46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31]],[[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],[64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,18],[63,120,121,122,123,124,125,126,127,128,129,130,131,132,133,80,19],[62,119,168,169,170,171,172,173,174,175,176,177,178,179,134,81,20],[61,118,167,208,209,210,211,212,213,214,215,216,217,180,135,82,21],[60,117,166,207,240,241,242,243,244,245,246,247,218,181,136,83,22],[59,116,165,206,239,264,265,266,267,268,269,248,219,182,137,84,23],[58,115,164,205,238,263,280,281,282,283,270,249,220,183,138,85,24],[57,114,163,204,237,262,279,288,289,284,271,250,221,184,139,86,25],[56,113,162,203,236,261,278,287,286,285,272,251,222,185,140,87,26],[55,112,161,202,235,260,277,276,275,274,273,252,223,186,141,88,27],[54,111,160,201,234,259,258,257,256,255,254,253,224,187,142,89,28],[53,110,159,200,233,232,231,230,229,228,227,226,225,188,143,90,29],[52,109,158,199,198,197,196,195,194,193,192,191,190,189,144,91,30],[51,108,157,156,155,154,153,152,151,150,149,148,147,146,145,92,31],[50,107,106,105,104,103,102,101,100,99,98,97,96,95,94,93,32],[49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33]],[[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],[68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,19],[67,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,85,20],[66,127,180,181,182,183,184,185,186,187,188,189,190,191,192,143,86,21],[65,126,179,224,225,226,227,228,229,230,231,232,233,234,193,144,87,22],[64,125,178,223,260,261,262,263,264,265,266,267,268,235,194,145,88,23],[63,124,177,222,259,288,289,290,291,292,293,294,269,236,195,146,89,24],[62,123,176,221,258,287,308,309,310,311,312,295,270,237,196,147,90,25],[61,122,175,220,257,286,307,320,321,322,313,296,271,238,197,148,91,26],[60,121,174,219,256,285,306,319,324,323,314,297,272,239,198,149,92,27],[59,120,173,218,255,284,305,318,317,316,315,298,273,240,199,150,93,28],[58,119,172,217,254,283,304,303,302,301,300,299,274,241,200,151,94,29],[57,118,171,216,253,282,281,280,279,278,277,276,275,242,201,152,95,30],[56,117,170,215,252,251,250,249,248,247,246,245,244,243,202,153,96,31],[55,116,169,214,213,212,211,210,209,208,207,206,205,204,203,154,97,32],[54,115,168,167,166,165,164,163,162,161,160,159,158,157,156,155,98,33],[53,114,113,112,111,110,109,108,107,106,105,104,103,102,101,100,99,34],[52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35]],[[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,20],[71,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,90,21],[70,135,192,193,194,195,196,197,198,199,200,201,202,203,204,205,152,91,22],[69,134,191,240,241,242,243,244,245,246,247,248,249,250,251,206,153,92,23],[68,133,190,239,280,281,282,283,284,285,286,287,288,289,252,207,154,93,24],[67,132,189,238,279,312,313,314,315,316,317,318,319,290,253,208,155,94,25],[66,131,188,237,278,311,336,337,338,339,340,341,320,291,254,209,156,95,26],[65,130,187,236,277,310,335,352,353,354,355,342,321,292,255,210,157,96,27],[64,129,186,235,276,309,334,351,360,361,356,343,322,293,256,211,158,97,28],[63,128,185,234,275,308,333,350,359,358,357,344,323,294,257,212,159,98,29],[62,127,184,233,274,307,332,349,348,347,346,345,324,295,258,213,160,99,30],[61,126,183,232,273,306,331,330,329,328,327,326,325,296,259,214,161,100,31],[60,125,182,231,272,305,304,303,302,301,300,299,298,297,260,215,162,101,32],[59,124,181,230,271,270,269,268,267,266,265,264,263,262,261,216,163,102,33],[58,123,180,229,228,227,226,225,224,223,222,221,220,219,218,217,164,103,34],[57,122,179,178,177,176,175,174,173,172,171,170,169,168,167,166,165,104,35],[56,121,120,119,118,117,116,115,114,113,112,111,110,109,108,107,106,105,36],[55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37]],[[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],[76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,21],[75,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,95,22],[74,143,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,161,96,23],[73,142,203,256,257,258,259,260,261,262,263,264,265,266,267,268,219,162,97,24],[72,141,202,255,300,301,302,303,304,305,306,307,308,309,310,269,220,163,98,25],[71,140,201,254,299,336,337,338,339,340,341,342,343,344,311,270,221,164,99,26],[70,139,200,253,298,335,364,365,366,367,368,369,370,345,312,271,222,165,100,27],[69,138,199,252,297,334,363,384,385,386,387,388,371,346,313,272,223,166,101,28],[68,137,198,251,296,333,362,383,396,397,398,389,372,347,314,273,224,167,102,29],[67,136,197,250,295,332,361,382,395,400,399,390,373,348,315,274,225,168,103,30],[66,135,196,249,294,331,360,381,394,393,392,391,374,349,316,275,226,169,104,31],[65,134,195,248,293,330,359,380,379,378,377,376,375,350,317,276,227,170,105,32],[64,133,194,247,292,329,358,357,356,355,354,353,352,351,318,277,228,171,106,33],[63,132,193,246,291,328,327,326,325,324,323,322,321,320,319,278,229,172,107,34],[62,131,192,245,290,289,288,287,286,285,284,283,282,281,280,279,230,173,108,35],[61,130,191,244,243,242,241,240,239,238,237,236,235,234,233,232,231,174,109,36],[60,129,190,189,188,187,186,185,184,183,182,181,180,179,178,177,176,175,110,37],[59,128,127,126,125,124,123,122,121,120,119,118,117,116,115,114,113,112,111,38],[58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39]],
      ][testNumber++];  
};