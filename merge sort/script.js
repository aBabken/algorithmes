// Для начало нужно написать первую функцию, которая принимает на входе массив, проверяет и делит на две части, впоследствии вызывает следующую функцию, в виде рекурсии. В итоге создается стек вызовов, где мы имеем в итоге массивы по одному элементу. Дальше мы сравниваем два массива с одиночными элементами, вставляя наименьший в отсортированный массив, а остальную часть в последствии в этот же массив, чтобы обработать в следующем стеке.

const mergeSort = arr => {

    if (!Array.isArray(arr)) return new Error("Type of 'arr' is not an array");         // Если наш массив не массив, тогда выдаем ошибку

    if (!arr || !arr.length) return null;                                               // Checking the data  
                                                                                        // Проверяем данные

    if (arr.length <= 1) return arr;                                                    // Exit from recursion if an array has one element
                                                                                        // Условие выхода из рекурсии
    const middle = Math.floor(arr.length/2);                                            // Getting the center of an array
                                                                                        // Центр массива

    const first = arr.slice(0, middle);                                                 // The first part of an array
                                                                                        // Первый массив
    const second = arr.slice(middle);                                                   // The second part of an array
                                                                                        // Второй массив

    return merge(mergeSort(first), mergeSort(second));                                  // The start of a recursion
                                                                                        // Вызов функции слияния методом рекурсии
}
const merge = (first, second) => {

    let arr = [];                                                                       // Our sorted an array
                                                                                        // Массив для заполнения
    let i = 0,                                                                          // Our index for cycle 
        k = 0;                                                                          // Наши индексы для цикла

    while (i < first.length && k < second.length) {                                     // The cycle where we exit if one of the array is empty when one of the indexes change 
        arr.push((first[i] < second[k]) ? first[i++] : second[k++])                     // Pushing in the array the element which is less and that element's index changes
    }                                                                                   // Здесь начинается цикл с условием если у одного из конечных массивов есть элемент, тогда внутри просходит заливка в массив
                                                                                        // Внутри цикла сравнивают два элемента двух массивов, добавляя в массив наименьший
    return [                                                                            // Return an array of sorted elements with the rest of an first or second array
        ...arr,                                                                         // Возвращаю сортированный массив и остаток от массивов сравнения
        ...first.slice(i),
        ...second.slice(k)
    ]
}

mergeSort([8,5,6,7,3,2,1,4,9]);

