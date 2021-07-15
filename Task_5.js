/*
Задание 5.

Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.
*/
let someArray = [1, 'text', 0.5, true, NaN, -0]
console.log(someArray.length)
for(let value of someArray){
    console.log(value)
}
