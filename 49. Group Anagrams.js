var groupAnagrams = function(strs) {
  function checkAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;
    if (str1.split('').sort().join('') === str2.split('').sort().join('')) return true;
    return false;
  }
  var output = [];
  for (var i = 0; i < strs.length; i++) {
    var inserted = false;
    for (var j = 0; j < output.length; j++) {
      if (output[j] !== undefined && checkAnagrams(output[j][0], strs[i])) {
        output[j].push(strs[i]);
        inserted = true;
      }
    }
    if (!inserted) {
      output.push([strs[i]]);
    }

  }
  return output;
};