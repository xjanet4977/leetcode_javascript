var lengthOfLongestSubstring = function(s) {
  var maxLen = 0, start = 0;
  var map = new Map();
  for (var i = 0;  i < s.length; i++) {
    var char = s[i];
    if (map.get(char) >= start) start = map.get(char) + 1;
    map.set(char, i);
    if (i - start + 1 > maxLen) maxLen = i - start + 1;
  }
  return maxLen;
};