// Sort Integers by bubble Sort

const array = [54,32,4,6,89]


// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length-1-i; j++) {
        
//         if (array[j] > array[j + 1]) {
//             let temp = array[j]
//             array[j] = array[j + 1]
//             array[j + 1] = temp
//         }
//     }


// }
// console.log(array)

//Optimized Version


let swap;

for (let i = 0; i < array.length; i++) {
    
        swap = false;
    for (let j = 0; j < array.length-1-i; j++) {
        if (array[j] > array[j + 1]) {
            
            let int1 = array[j]
            array[j] = array[j + 1]
            array[j + 1] = int1
            swap = true
        }

        
    }
    if (!swap) {
            break;
        }
}

console.log("After sorting: ",array)




// Sort Strings by Bubble Sort alphabetically

// const fruits = ["oranges","mangoes","apples","bananas","cherries"]
const fruits = ["Oranges","Mangoes","Apples","Bananas","Cherries"]


for (let i = 0; i < fruits.length; i++) {
    for (let j = 0; j < fruits.length-1-i; j++) {
        
        if (fruits[j] > fruits[j + 1]) {
            let temp = fruits[j]
            fruits[j] = fruits[j + 1]
            fruits[j + 1] = temp
        }
    }


}

console.log(fruits)

