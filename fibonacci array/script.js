// Всем известный алгоритм чисел Фибоначчи
const fibonacci = num => {
    
    const fib = [1];                                // Начальный массив
    
    if (!num || num <= 0) return null;              // Случай с неправильными данными
    
    if (num === 1) return fib;                      // Случай с единицой
    
    let iterationNumber = num - 1;                  // Количество итераций
    
    let currentVal = 1;                             // Текущее число

    let previousVal = 0;                            // Предыдущее число

    while (iterationNumber) {                       // Цикл с условием положительности переменной
                
        currentVal += previousVal;                  // Увеличиваем текущее значение на предыдущее

        previousVal = currentVal - previousVal;     // Запоминаем предыдущее число как разницу текущего и предыдущего

        fib.push(currentVal);                       // Заливаем в массив

        --iterationNumber;                          // Уменьшаем число итераций

    }                               
    
    return fib;                                     // Возвращаем результат
}

console.log(fibonacci(7))