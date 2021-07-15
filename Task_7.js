/*
Задание 7.

Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
*/
let someNumbers = [1, 6, 7, 5, null, NaN, 9, 0, 'текст', false, 2.4, [1,2,3], -4];
let quantityOfEvenNumbers = 0;
let quantityOfOddNumbers = 0;
let quantityOfZeroNumbers = 0;
let quantityOfNaNs = 0;
someNumbers.forEach(function (value){
    if (value === 0){
quantityOfZeroNumbers++;
    }else if (typeof value !== 'number' || !value) {
quantityOfNaNs++;
    } else {
if (value % 2 === 0){
quantityOfEvenNumbers++;
} else {
quantityOfOddNumbers++;
}}})
console.log(`В вашем массиве:
Количество нечетных чисел = ${quantityOfOddNumbers};
Количество четных чисел = ${quantityOfEvenNumbers};
Количество нулей = ${quantityOfZeroNumbers};
Количество всяких других данных = ${quantityOfNaNs}`)
