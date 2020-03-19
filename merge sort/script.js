const mergeSort = arr => {

    if (!arr || !arr.length) return null;                               // Checking the data

    if (arr.length <= 1) return arr;                                    // Exit from recursion if an array has one element

    const middle = Math.floor(arr.length/2);                              // Getting the center of an array

    const first = arr.slice(0, middle);                                   // The first part of an array

    const second = arr.slice(middle);                                     // The second part of an array

    return merge(mergeSort(first), mergeSort(second));                  // The start of a recursion
}
const merge = (first, second) => {

    let arr = [];                                                       // Our sorted an array

    let i = 0,                                                          // Our indexes for cycle 
        k = 0;

    while (i < first.length, k < second.length) {                       // The cycle where we exit if one of the array is empty when one of the indexes change
        arr.push((first[i] < second[k]) ? first[i++] : second[k++])     // Pushing in the array the element which is less and that element's index changes
    }

    return [                                                            // Return an array of sorted elements with the rest of an first or second array
        ...arr,
        ...first.slice(i),
        ...second.slice(k)
    ]
}

mergeSort([8,5,6,7,3,2,1,4,9]);