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

//mine was dumb, because it was kind of a mix between the two, I really didn't need a for loop, and if I did use one I should have
//used and inverted one to find out if it was a palindrome.
function isPalindrome(str){
    matches = true
    reversed = str.split('').reverse().join('')
    for (let i = 0; i < reversed.length; i++) {
        if(reversed[i] === str[i]){
            matches=true
        }else matches = false
    }
    console.log(matches);
}
//isPalindrome('racecar')
//isPalindrome('notapalindrome')

function hisPalindrome(str){
    let wordArray = str.split('')
    wordArray.reverse()
    answer = str === wordArray.join('')
    console.log(answer);
}


hisPalindrome('kayak')
hisPalindrome('sufoe')