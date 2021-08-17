//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(string1,list1){
    //Your code goes here
    var words=string1.split(/\W+/); 
    for(let i = 0; i < list1.length; i++){
        if(words.includes(list1[i])){
            console.log('Matched dog_name')
        }else{
            console.log('No Matches')
        }
    }
}
console.log(findWords(dog_string,dog_names))

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    //code goes here
    for(let i = 0; i < arr.length; i++){
        if(i % 2 == 0){
            arr.splice(i,1,'even index')
        }
    }
    return arr
}

console.log(replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"]))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

//============Exercise #3 ============//
// Find Mean
// Find the mean (average) of a list of numbers in an array.

// Information
// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

// For an example list of 1, 3, 5, 7

// 1. Add all of the numbers

// 1+3+5+7 = 16
// 2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

// 16/4 = 4
// 3. The mean (or average) of this list is 4

// def find_average(nums):
//     return sum(nums)/len(nums) if nums else 0
function find_average(nums){
    let count = 0
    for(let i=0; i<nums.length;i++){
        count += nums[i]
    }
    return count/nums.length
}
console.log(find_average([1,3,5,7])) //4 


//============Exercise #4 ============//
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
// def count_positives_sum_negatives(yo):
//         if not yo:
//             return []
//         pos = 0
//         neg = 0
//         for n in yo:
//             if n>0:
//                 pos = pos + 1
//             else:
//                 neg = neg + n
//         return [pos, neg]
function count_positives_sum_negatives(yo){
    let pos = 0
    let neg = 0
    if(yo == false){
        return []
    }
    for(let i=0; i<yo.length; i++){
        if(yo[i]>0){
            pos += 1
        }else{
            neg += yo[i]
        }
    }
    return [pos,neg]
}
console.log(count_positives_sum_negatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))