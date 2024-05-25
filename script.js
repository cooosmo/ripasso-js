/* Esercizio 1 */
function checkInt(num1,num2){
    if(num1 === 50 || num2 === 50 || (num1 + num2 === 50)) {
        return true
    } else {
        return false
    }
}

// console.log(checkInt(1,2))
// console.log(checkInt(50,2))
// console.log(checkInt(25,25))


/* Esercizio 2 */
function removeChar(word, i){
    let newWord = word.split('')
    newWord.splice(i, 1)
    return newWord.join('')
    
}

// console.log(removeChar('Cosimo', 3))


/* Esercizio 3 */
function checkInterval(int1,int2){
    if((int1 >= 40 && int1 <= 60) || (int2 >= 40 && int2 <= 60)) {
        return true
    } else {
        return false
    }
}

// console.log(checkInterval(30,50))
// console.log(checkInterval(10,110))
// console.log(checkInterval(50,80))

/* Esercizio 4 */
function myCity(city){
    if(city.startsWith('Los') || city.startsWith('Los')){
        return city
    } else {
        return false
    }
}

// console.log(myCity('Los Monopoli'))


/* Esercizio 5 */
function arraySum(numbers){
    let sum = 0

    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i]
    }

    return sum
}

// console.log(arraySum([1,2,3,4]))

/* Esercizio 6 */
function hasNot(anArray){
    return !anArray.includes(1) && !anArray.includes(3) 
}

// console.log(hasNot([1,3]))
// console.log(hasNot([4,3]))
// console.log(hasNot([9,2]))

/* Esercizio 7 */
function angleCheck(gradi){
    if(gradi < 90){
        return "acuto"
    } else if(gradi > 90 && gradi < 180) {
        return "ottuso"
    } else if(gradi === 90){
        return "retto"
    } else if(gradi === 180){
        return "piatto"
    }
}

// console.log(angleCheck(45))

/* Esercizio 8 */
function acronimo(stringa){
   let newStringa = stringa.split(' ')
   let acronimo = []
   let iniziale = ''
   newStringa.forEach(parola => {
    iniziale = parola.charAt(0)
    acronimo.push(iniziale)
   })
   return acronimo.join('')
}

// console.log(acronimo('Fabbrica Italiana Auto Torino'))

/* ESERCIZIO 1 EXTRA */




































