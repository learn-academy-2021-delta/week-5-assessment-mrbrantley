// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

var secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
var secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
var secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe("eliteCode", () => {
  it("takes in a string and returns a coded message that converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
    expect(eliteCode(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(eliteCode(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(eliteCode(secretCodeWord3)).toEqual("3cc3ntr1c")
  })
})

//Test failed successfully

// b) Create the function that makes the test pass.

//First I want to create function that takes in a string
const eliteCode = (string) => {
  //I want the input string to change characters a,e,i,o to 4,3,1,0 repspectively. I want to map over the string and change values, but because .map can only take an input of an array I will have to split the string into an array. Then I can map over the array at each index to check witha  conditinonal and change the values.
  let changedArray = string.split('').map(value => {
    if (value === 'a' || value === 'A'){
      return value = '4'
    } else if (value === 'e' || value === 'E'){
        return value = '3'
    } else if (value === 'i' || value === 'I' ){
        return value = '1'
    } else if (value === 'o' || value === 'O' ){
        return value = '0'
        //If the values checked aren't the ones we want to change, then leave the value as-is and continue mapping over the array
    } else {
      return value
    }
  })
  //Join the changed array back into a string
  return changedArray.join('')
}

//Test passes

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
var letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
var letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

describe("letterFinder", () => {
  it("takes in an array of words and a single letter and returns all the words that contain that particular letter.", () => {
    expect(letterFinder(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
    expect(letterFinder(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
  })
})

//Test fails successfully

// b) Create the function that makes the test pass.

//First I want to define a function that takes in an array and a letter. All letters are represented as strings so it will take in a an array and a string.
const letterFinder = (array, string) => {
  //I want to filter out anything that doesnt contain the input string value.
  let solution = array.filter(value => {
    //If the value of at the index the input array includes the secondary input string the filter will keep it in the "solution" array. Also any instance of the input string capitalized will be included using the "or" operator and the .toUpperCase method. 
      //Deeper dive: Filter only keeps truthy values, and the .includes method only returns true if the string it is evaluating contains what it is searching for. If either of the conditions that string or uppercased string are in the value at that index of the array, the filter will evaluate to true and keep the value.
    return value.includes(string) || value.includes(string.toUpperCase())
  })
  //Because "solution" was only stored as a variable, the function "letterFinder" still needs to run and store "solution" with a return statement.
  return solution
}

//Test passes

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

describe("fullHouse", () => {
  it("takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.", () => {
    expect(fullHouse(hand1)).toEqual(true)
    expect(fullHouse(hand2)).toEqual(false)
    expect(fullHouse(hand3)).toEqual(false)
  })
})

//Test fails successfully

// b) Create the function that makes the test pass.

//First I want to define a function that takes in array
const fullHouse = (array) => {
  //The input array is limited to 5 values, but can be any value in any order. Sorting the array from smallest to largest will fix the positions of a full house to only two outcomes. The sorth method is a mutator so a variable doesn't need to be declared. 
  array.sort((a,b)=>a-b);
  //The first outcome of a fullhouse is if the sorted array has three smaller equal values and two larger different equal values (ex: [2,2,2,5,5]). 
  if (array[0]===array[1] && array[0]===array[2] && array[3]===array[4] && array[4]!==array[0]){
    //If the first possible fullouse condition is met, return true.
    return true
    //The second possible outcome of a fullhouse if if the sorted array has two smaller equal values and three larger different equal values (ex: [2,2,5,5,5]) 
  } else if (array[0]===array[1] && array[2]===array[3] && array[2]===array[4] && array[4]!==array[0]){
    //If the second possible fullouse condition is met, return true
    return true
    //If neither fullhouse condition is met, return false
  } else {
    return false
  }
}

//Test passes