let a = +prompt('Введите число:');
let b = +prompt('Введите число:');
let c = +prompt('Введите число:');

if (a && b && c) {
    if (b < a && a < c || c < a && a < b) {
        alert(`Среднее число: ${a}`);
    } else if (a < b && b < c || c < b && b < c) {
        alert(`Среднее число: ${b}`);
    } else {
        alert(`Среднее число: ${c}`);
    }
} else {
    alert('ERROR!');
}