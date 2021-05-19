function longestWord(str) {
    let words = str.split(' ')
    let longestWord=''
    for (let i = 0; i < words.length; i++) {
        if (words[i].split('').length>longestWord.split('').length) {
            longestWord=words[i]
        }
    }
   console.log(longestWord);
}
//longestWord("What is the longest word in this string")



function isPalindrome(str){
    matches = true
    reversed = str.split('').reverse().join('')
    for (let i = 0; i < reversed.length; i++) {
        const currentLetter = reversed[i];
        if(currentLetter === str[i]){
            matches=true
        }else matches = false

    }
    return console.log(matches);
}

isPalindrome('racecar')
isPalindrome('sdfsffffff')