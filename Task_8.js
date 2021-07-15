/*
Задание 8.

Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
Используйте шаблонные строки.
*/
let someDict = new Map([
    [true, false],
    [['lol', 1, 'а так?'], 'magic of JS! Unhashable type в качестве ключа! Python в шоке!'],
    [5, 'пять'],
    [NaN, 'Python в шоке 2!']
])
for (let entry of someDict){
    console.log(`Ключ — ${entry[0]}, значение — ${entry[1]}`);
}
