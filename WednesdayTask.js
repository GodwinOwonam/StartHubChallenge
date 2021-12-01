/***
 * Wednesday's task:
 * Write a function that returns only the first unique elements of an array.
 * Return only the unique values in the array
 * e.g. conslole.log(Uniques([1,2,1,3,2,4,4,5,6,3])) should return [1,2,3,4,5,6]
 */

// function
const GetUniques = (inputList) =>{

    uniqueList = [];

    for(let i = 0; i<inputList.length; i++){ // loop through the elements in the list

        if( uniqueList.indexOf(inputList[i]) === -1) { // if element at that index is not available in the uniques list
            uniqueList.push(inputList[i]); // let's add this element to the uniques list
        }// otherwise, we do nothing, that is we ignore the element, because it is already present in the uniques list
    }

    return uniqueList.sort((a,b) => a - b);
}

// driver code
console.log(GetUniques([2,2,1,3,2,4,4,5,6,3]))