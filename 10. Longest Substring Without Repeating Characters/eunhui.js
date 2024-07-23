function lengthOfLongestSubstring(s) {
    let charSet = new Set();
    let start = 0;
    let maxLength = 0;

    for (let end = 0; end < s.length; end++) {
        while (charSet.has(s[end])) {
            charSet.delete(s[start]);
            start++;
        }
        charSet.add(s[end]);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    console.log(maxLength);

    return maxLength;
}

lengthOfLongestSubstring('abcabcbb');
lengthOfLongestSubstring('bbbbb');
lengthOfLongestSubstring('pwwkew');
