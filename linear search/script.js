// Один из простейших алгоритмов в программировании на нашем JS 

const linear = (el, arr) => {                       // Принимаем искомый элемент и массив для поиска

    for (let i = 0; i <= arr.length; i++) {         // Начинаем цикл по массиву

        if (arr[i] = el) return i;                  // Сравниваем каждый элемент массива с нашим, при совпадении возвращаем индекс элемента в массиве
    }           
    return -1;                                      // Иначе возвращаем -1
}