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

//console.log(hisTime(200));




// Description
// Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. Different races will certainly be involved. Each race has a certain 'worth' when battling against others. On the side of good we have the following races, with their associated worth:
// On the Good Side:
// Hobbits - 1,
// Men - 2,
// Elves - 3,
// Dwarves - 3,
// Eagles - 4,
// Wizards - 10
// On the side of evil we have:
// Orcs - 1,
// Men - 2,
// Wargs - 2,
// Goblins - 2,
// Uruk Hai - 3,
// Trolls - 5,
// Wizards - 10
// Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and compare it with the worth of the side of evil, the side with the larger worth will tend to win.
// Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.
// Input:
// The function will be given two parameters. Each parameter will be a string separated by a single space. Each string will contain the count of each race on the side of good and evil.
// The first parameter will contain the count of each race on the side of good in the following order:
// Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
// The second parameter will contain the count of each race on the side of evil in the following order:
// Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
// All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.
// Output:
// Return
// if Good wins - "Battle Result: Good triumphs over Evil"
// if Evil Wins - "Battle Result: Evil eradicates all trace of Good"
// if Tied - "Battle Result: No victor on this battle field"
function middleEarth(goodStr, badStr){

    let totalGood=0
    let totalBad = 0
    let goodArr = goodStr.split(" ")
    goodArr = goodArr.map( s => parseInt(s) )

    let badArr = badStr.split(" ")
    badArr = badArr.map( s => parseInt(s) )


    for (let i = 0; i < goodArr.length; i++) {
        if (i == 0){ totalGood += goodArr[i]}
        if (i == 1 ){ totalGood += goodArr[i] * 2}
        if (i == 2 || i == 3){ totalGood += goodArr[i] * 3}
        if (i == 4 ){ totalGood += goodArr[i] * 4}
        if (i == 5 ){ totalGood += goodArr[i] * 10}
        console.log(totalGood);
}

    for (let i = 0; i < badArr.length; i++) {
        if (i == 0){ totalBad += badArr[i]}
        if (i == 1 || i == 2 || i== 3){ totalBad += badArr[i] * 2}
        if (i == 4){ totalBad += badArr[i] * 3}
        if (i == 5 ){ totalBad += badArr[i] * 5}
        if (i == 6 ){ totalBad += badArr[i] * 10}
        console.log(totalBad);
}
    if (totalGood > totalBad){console.log('good won');}
    else{console.log('bad won');}
}

middleEarth('1 1 1 1 1 1', '1 1 1 1 1 1 1')