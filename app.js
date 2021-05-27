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


//hisPalindrome('kayak')
//hisPalindrome('sufoe')


// factorize(12) ➞ [1, 2, 3, 4, 6, 12]
// factorize(4) ➞ [1, 2, 4]
// factorize(17) ➞ [1, 17]
function myfactorize(n) {
    let allN = []
    let factors = []

        for (let j = 1; j < n+1; j++) {
        const currentCount = j;
        allN.push(currentCount)

        for (let i = 0; i < allN.length; i++) {
        const currentCount2 = i+1;
        if(currentCount * allN[j] === n){
            factors.push(currentCount2)
        }

        console.log(factors, 'factors');
    }
    
    
    }

        console.log(allN);
}

//if I can divide into you evenly, I am a factor, so we do n % i === 0
// Not sure why I struggle on this one

// Write a function called timeConvert(min) that takes the min 
//parameter being passed and returns the number of hours and minutes 
//the parameter converts to (ie. if num = 63 then the output should be 1:3). 
//Separate the number of hours and minutes with a colon. If it is less than an hour you can return a 0 for hours




function timeConvert(min){

    let hours = 0

    for (let i = 0; i <= min; i++) {
        if (i % 60){
            hours+=1
        }
        
    }
    console.log(hours + ':' + (min - (hours*60)))
}

//timeConvert(200)

// wierd that I got stuck, Ive gotten this easily before.

function hisTime(min){
    let divide = Math.floor(min/60)
    let remainder = min %60
    let answer = divide +':'+ remainder
    console.log(answer);
}

console.log(hisTime(200));