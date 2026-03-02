// Задание 1. Класс Приветствие
console.log("=== Задание 1: Приветствие ===");
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Привет, я ${this.name}, мне ${this.age} лет.`);
    }
}

const person1 = new Person("Анна", 25);
const person2 = new Person("Макс", 30);
person1.introduce();
person2.introduce();

// Задание 2. Класс Прямоугольник
console.log("\n=== Задание 2: Прямоугольник ===");
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}

const rect = new Rectangle(5, 10);
console.log(`Площадь: ${rect.getArea()}`);
console.log(`Периметр: ${rect.getPerimeter()}`);

// Задание 3. Класс Счетчик
console.log("\n=== Задание 3: Счетчик ===");
class Counter {
    constructor() {
        this.count = 0;
    }

    increment() {
        this.count++;
    }

    decrement() {
        this.count--;
    }

    getValue() {
        return this.count;
    }
}

const counter = new Counter();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
console.log(`Текущее значение счетчика: ${counter.getValue()}`);


// Задание 4. Класс Книга
console.log("\n=== Задание 4: Книга ===");
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getInfo() {
        return `${ this.title } (${ this.year }) - ${ this.author }`;
    }
}

const book1 = new Book("Анна Каренина", "Лев Толстой", 1869);
const book2 = new Book("Преступление и наказание", "Федор Достоевский", 1866);
const book3 = new Book("Мастер и Маргарита", "Михаил Булгаков", 1967);

console.log(book1.getInfo());
console.log(book2.getInfo());
console.log(book3.getInfo());


// Задание 5. Класс Таймер обратного отсчета
console.log("\n=== Задание 5: Таймер обратного отсчета ===");
class CountdownTimer {
    constructor(seconds) {
        this.seconds = seconds;
        this.intervalId = null;
    }

    start() {
        console.log(`Таймер запущен на ${this.seconds} секунд:`);
        this.intervalId = setInterval(() => {
            console.log(this.seconds);
            this.seconds--;

            if (this.seconds < 0) {
                console.log("Время вышло!");
                clearInterval(this.intervalId);
                this.intervalId = null;
            }
        }, 1000);
    }

    reset(newSeconds) {
        // Останавливаем старый таймер, если он еще работает
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        this.seconds = newSeconds;
        console.log(`Таймер сброшен. Новое значение: ${this.seconds} секунд.`);
    }
}

// Создаем таймер на 5 секунд и запускаем его
const timer = new CountdownTimer(5);
timer.start();

setTimeout(() => timer.reset(3), 3000);


// Задание 6. Класс Корзина покупок
console.log("\n=== Задание 6: Корзина покупок ===");
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
        console.log(`Добавлен товар: ${item}`);
    }

    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
            console.log(`Удален товар: ${item}`);
        } else {
            console.log(`Товар "${item}" не найден в корзине.`);
        }
    }

    getTotalItems() {
        return this.items.length;
    }

    showItems() {
        console.log("Список товаров в корзине:", this.items);
    }
}

const cart = new ShoppingCart();
cart.addItem("Яблоко");
cart.addItem("Хлеб");
cart.addItem("Молоко");
cart.showItems();
cart.removeItem("Хлеб");
console.log(`Общее количество товаров: ${cart.getTotalItems()}`);
cart.showItems();


// Задание 7. Класс Пароль
console.log("\n=== Задание 7: Пароль ===");
class Password {
    constructor(value) {
        this.value = value;
    }

    isValid() {
        return this.value.length >= 8;
    }

    mask() {
        if (this.value.length <= 3) {
            return this.value;
        }
        const firstThree = this.value.slice(0, 3);
        const maskedPart = '*'.repeat(this.value.length - 3);
        return firstThree + maskedPart;
    }
}

const pass1 = new Password("pass1234");
const pass2 = new Password("hi");
console.log(`Пароль: ${pass1.value}, валидный: ${pass1.isValid()}, маска: ${pass1.mask()}`);
console.log(`Пароль: ${pass2.value}, валидный: ${pass2.isValid()}, маска: ${pass2.mask()}`);


// Задание 8. Класс Календарь
console.log("\n=== Задание 8: Календарь ===");
class SimpleCalendar {
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    _pad(number) {
        return number < 10 ? '0' + number : number;
    }

    getDateString() {
        return `${ this._pad(this.day) }.${ this._pad(this.month) }.${ this.year }`;
    }
}

const date1 = new SimpleCalendar(5, 3, 2024);
const date2 = new SimpleCalendar(15, 12, 1990);
console.log(date1.getDateString());
console.log(date2.getDateString());


// Задание 9. Класс Калькулятор
console.log("\n=== Задание 9: Калькулятор ===");
class Calculator {
    calculate(a, b, operation) {
        switch (operation) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                if (b === 0) {
                    console.log("Ошибка: деление на ноль!");
                    return null;
                }
                return a / b;
            default:
                console.log(`Ошибка: операция "${operation}" не поддерживается.`);
                return null;
        }
    }
}

const calc = new Calculator();
console.log(`5 + 3 = ${calc.calculate(5, 3, '+')}`);
console.log(`10 - 4 = ${calc.calculate(10, 4, '-')}`);
console.log(`7 * 6 = ${calc.calculate(7, 6, '*')}`);
console.log(`20 / 5 = ${calc.calculate(20, 5, '/')}`);
console.log(`20 / 0 = ${calc.calculate(20, 0, '/')}`);
console.log(`5 % 2 = ${calc.calculate(5, 2, '%')}`);


// Задание 10. Класс Игрок
console.log("\n=== Задание 10: Игрок ===");
class Player {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.level = 1;
    }

    takeDamage(amount) {
        this.health -= amount;
        if (this.health < 0) {
            this.health = 0;
        }
        console.log(`${this.name} получил ${amount} урона. Здоровье: ${this.health}`);
    }

    heal(amount) {
        this.health += amount;
        if (this.health > 100) {
            this.health = 100;
        }
        console.log(`${this.name} вылечил ${amount} HP. Здоровье: ${this.health}`);
    }

    levelUp() {
        this.level++;
        console.log(`${this.name} повысил уровень! Текущий уровень: ${this.level}`);
    }

    showStatus() {
        console.log(`Игрок: ${this.name}, Уровень: ${this.level}, Здоровье: ${this.health}`);
    }
}

const player = new Player("Артур");
player.showStatus();
player.takeDamage(30);
player.takeDamage(80);
player.heal(50);
player.levelUp();
player.showStatus();