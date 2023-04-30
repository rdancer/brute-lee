/*
 * language: JavaScript
 * problem: 68. Text Justification
 * link: https://leetcode.com/problems/text-justification/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  return [["This    is    an","example  of text","justification.  "],["What   must   be","acknowledgment  ","shall be        "],["Science  is  what we","understand      well","enough to explain to","a  computer.  Art is","everything  else  we","do                  "],["The     important","thing  is  not to","stop questioning.","Curiosity has its","own   reason  for","existing.        "],["ask   not   what","your country can","do  for  you ask","what  you can do","for your country"],["Listen","to    ","many, ","speak ","to   a","few.  "],["a"],["a "],["a","b","c","d","e"],["a b","c d","e  "],["What ","must ","be   ","shall","be.  "],["What must be","shall be.   "],["Here    is    an","example  of text","justification.  "],["Here    is   an","example of text","justification. "],["Here   is   an","example     of","text          ","justification."],["Imagination","is     more","important  ","than       ","knowledge. "],["Imagination is","more important","than          ","knowledge.    "],["My     momma","always said,","\"Life    was","like  a  box","of          ","chocolates. ","You    never","know    what","you're gonna","get.        "],["My    momma   always","said, \"Life was like","a box of chocolates.","You  never know what","you're gonna get.   "],["Don't  go  around  saying  the","world  owes  you a living; the","world owes you nothing; it was","here first.                   "],["Twenty    years","from   now  you","will   be  more","disappointed by","the  things you","didn't  do than","by the ones you","did.  So  throw","off         the","bowlines,  Sail","away  from  the","safe    harbor.","Catch the trade","winds  in  your","sails. Explore.","Dream.         "],["But soft! What light","through       yonder","window breaks? It is","the East, and Juliet","is  the  sun! Arise,","fair  sun,  and kill","the   envious  moon,","who  is already sick","and  pale with grief","That  thou  her maid","art  far  more  fair","than she.           "],["Give  me  my  Romeo; and,","when  he  shall die, Take","him  and  cut  him out in","little stars, And he will","make  the  face of heaven","so   fine  That  all  the","world  will  be  in  love","with  night  And  pay  no","worship   to  the  garish","sun.                     "],["O!  she doth","teach    the","torches   to","burn bright.","It seems she","hangs   upon","the cheek of","night Like a","rich   jewel","in        an","Ethiop's    ","ear;  Beauty","too rich for","use,     for","earth    too","dear.       "],["Do  all  the good you can,","By  all the means you can,","In  all  the ways you can,","In all the places you can,","At  all the times you can,","To all the people you can,","As long as ever you can.  "],["When  I was just a little girl I asked my mother what will I","be  Will  I be pretty Will I be rich Here's what she said to","me  Que  sera sera Whatever will be will be The future's not","ours  to see Que sera sera When I was just a child in school","I asked my teacher what should I try Should I paint pictures","Should  I  sing  songs This was her wise reply Que sera sera","Whatever  will  be  will be The future's not ours to see Que","sera  sera  When  I  grew  up  and  fell  in love I asked my","sweetheart  what lies ahead Will there be rainbows day after","day  Here's  what  my sweetheart said Que sera sera Whatever","will  be  will be The future's not ours to see Que sera sera","What will be, will be Que sera sera...                      "],["Fourscore  and seven years ago our fathers brought forth on this continent a new","nation,  conceived  in liberty and dedicated to the proposition that all men are","created  equal.  Now  we  are engaged in a great civil war, testing whether that","nation  or  any nation so conceived and so dedicated can long endure. We are met","on  a  great battlefield of that war. We have come to dedicate a portion of that","field  as  a  final  resting-place for those who here gave their lives that that","nation  might  live. It is altogether fitting and proper that we should do this.","But  in  a  larger  sense,  we  cannot dedicate, we cannot consecrate, we cannot","hallow  this  ground.  The  brave  men,  living and dead who struggled here have","consecrated it far above our poor power to add or detract. The world will little","note  nor  long remember what we say here, but it can never forget what they did","here. It is for us the living rather to be dedicated here to the unfinished work","which  they who fought here have thus far so nobly advanced. It is rather for us","to  be  here  dedicated  to  the great task remaining before us--that from these","honored  dead  we  take increased devotion to that cause for which they gave the","last full measure of devotion--that we here highly resolve that these dead shall","not  have  died  in  vain,  that this nation under God shall have a new birth of","freedom,  and that government of the people, by the people, for the people shall","not perish from the earth.                                                      "],
      ][testNumber++];  
};