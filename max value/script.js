// Простейший алгоритм нахождения максимального значения из списка чисел

const max = (...a) => {                                                                                                 // Параметром получаем массив из чисел

    if (!a.length) return new Error("Empty parameter. Please enter at least one parameter.");                           // В случае отсутствия параметров     

    if (!a.every(v => typeof v === 'number')) return new Error("Type error. Please enter only integer parameters.")     // В случае присутствия в списке нечисленного типа

    let val = Number.MIN_SAFE_INTEGER;                                                                                  // В переменную записываем минимальное безопасное значение в 
                                                                                                                        // JavaScript равное -9007199254740991
    for (let k = 0; k < a.length; k++) {                                                                                // Цикл по массиву чисел 

        if (val < a[k]) {                                                                                               // Сравниваем наше минимальное значение с текущим

            val = a[k];                                                                                                 // При входе в блок присваивает текущее значение к минимальному

        }

    }

    return val;                                                                                                         // Возвращаем максимальное значение

}

console.log(max(1,3));