//Задание 1 

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(min(8, 4));
console.log(min(6, 6));

//Задание 2

function mission(num) {
    if (num % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

console.log(mission(5));
console.log(mission(6));

//Задание 3.1

function square(x) {
    console.log(x * x);
}

square(5);

// 3.2

function square(x) {
    return x * x;
}

console.log(square(5));

//Задание 4

function age() {
    let age = prompt('Введите ваш возраст:');
    if (age < 0) {
        alert('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
        alert('Привет, друг!');
    } else if (age >= 13) {
        alert('Добро пожаловать!');
    }
}

age();

//Зaдание 5

function question(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Одно или оба значения не являются числом';
    } else if (a === 0 || b === 0) {
        return 'Один из аргументов равен 0';
    } else {
        return a * b;
    }
}
console.log(question('12', 5));


//Задание 6

function cube(n) {
    if (typeof n === 'number') {
        return `${n} в кубе равняется ${n ** 3}`;
    } else {
        return 'Переданный параметр не является числом';
    }
}

for (let i = 0; i <= 10; i++) {
    console.log(cube(i));
}

