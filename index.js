// #### Task 6**

// ```javascript
//     const evenNumbers = [2, 4, 6, 8, 10]
//     const oddNumbers = [1, 3, 5, 7, 9]
// ```
// + Соедините два массива чисел в один.
// + В полученном массиве попробуйте найти индекс числа **`8`**

// const evenNumbers = [2, 4, 6, 8, 10];
// const oddNumbers = [1, 3, 5, 7, 9];
// const concatedArrays = evenNumbers.concat(oddNumbers);
// console.log(concatedArrays.indexOf(8));
//_______________________________________________________________________________________


// #### Task 7**

// Дан массив:
// ```javascript
//     const binary = [0, 0, 0, 0]
// ```
// + Наш бинарный массив неполный, в нем явно не хватает единиц.
// + Превратите данный массив в строку.
// > [0, 0, 0, 0] -> '0101010'

// const binary = [0, 0, 0, 0];
// const stringBinary = binary.toString();
// console.log(stringBinary);
// const zeroOne = binary.join('1');
// console.log(zeroOne);
//_______________________________________________________________________________________

// #### Task 3**

// Дан массив:
// ```javascript
//    const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
// ```
// Создайте два массива, в один поместите все положительные числа включая 0, в другой все отрицательные. Оба массива затем выведите в консоль.

// const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4];
// const positiveNumbers = mixedNumbers.filter(num => num >= 0);
// const negativeNumbers = mixedNumbers.filter(num => num < 0);
// console.log(`Положительные числа:`, positiveNumbers);
// console.log(`Отрицательные числа:`, negativeNumbers);
//_______________________________________________________________________________________

// #### Task 4**

// Создать массив длинной не менее 5, из динамически созданных случайных чисел. Далее написать алгоритм который берет все числа из исходного массива, возводит их в куб и записывает в новый массив. В конце вывести оба массива в консоль.

// let randomArray = [];
// for (let i = 0; i < 5; i++) {
//     randomArray.push(Math.floor(Math.random() * 10));
// }
// console.log(randomArray);
// const tripleNumbers = randomArray.map(item => item ** 3);
// console.log(randomArray, tripleNumbers);

// Деструктуризация объектов
// const person = {
//     age: 23,
//     name: 'Dima',
//     sity: 'Minsk'
// };
// const {name , age,} = person;
// console.log(age, name,);



// function palindrome() {
//     const word = prompt();
//     const wordCheck = word.split('').reverse().join('');
//     return word === wordCheck;
// }
// console.log(palindrome());


// const evenNumbers = [2, 4, 6, 8, 10];
// const oddNumbers = [1, 3, 5, 7, 9];
// const array = [...evenNumbers, ...oddNumbers];
// console.log(array.indexOf(8));

// const cats = ['Gachito', 'Tom', 'Batman'];
// for (let i = 0; i < cats.length; i++) {
//     console.log(cats[i]);
// }

//#### Task 5
// Дан массив:

// ```javascript
//     const cats = ['Gachito', 'Tom', 'Batman']
// ```

// Выведите в консоль все элементы массива. Сначала через цикл **`for`**, затем **`for of`**.

// const cats = ['Gachito', 'Tom', 'Batman'];
// for (let cat of cats) {
//     console.log(cat);
// }

// const cats = ['Gachito', 'Tom', 'Batman'];
// for (let i = 0; i < cats.length; i++) {
//     console.log(cats[i]);
// }
//#### Task 1
// Дан массив:

// ```javascript
// const colors = ['red', 'green', 'blue']
// ```

// Выведите в консоль его длину.

// const colors = ['red', 'green', 'blue'];
// const t = colors.length;
// console.log(t);


//#### Task 2 🖥
// Дан массив:

// ```javascript
//     const animals = ['monkey', 'dog', 'cat']
// ```

// Выведите в консоль его последний элемент вне зависимости от его длинны.

// const animals = ['monkey', 'dog', 'cat']
// const animals2 = animals.pop();
// console.log(animals2);


//#### Task 3 🖥
// Дан массив:

// ```javascript
//     const numbers = [5, 43, 63, 23, 90]
// ```

// Удалите все элементы в массиве и выведите в консоль полученный результат.

// const numbers = [5, 43, 63, 23, 90];
// const deletedNumbers = numbers.slice(5);
// console.log(deletedNumbers);

// const numbers = [5, 43, 63, 23, 90];
// const deletedNumbers = numbers.splice(5);
// console.log(deletedNumbers);


// #### Task 4 🖥

// Дан массив:

// ```javascript
//     const students = ['Polina', 'Dasha', 'Masha']
// ```

// + Удалите последний элемент массива, затем вместо него добавьте в массив студента `Borya`.
// + Удалите первый элемент массива, затем вместо него добавьте в массив студента `Andrey`.
// + Полученный результат не забудьте вывести в консоль.

// let students = ['Polina', 'Dasha', 'Masha'];
// function poped() {
//     students.pop();
//     students.push('Borya');
//     students.shift();
//     students.unshift('Andrey');
//     return students;
// } 
// console.log(poped());

const taskInput = document.querySelector("#task-input");
const addTaskBtn = document.querySelector("#add-task-btn");
const taskList = document.querySelector("#task-list");
const clearAllBtn = document.querySelector("#delete-all-btn");
addTaskBtn.addEventListener("click", function () {
    const taskValue = taskInput.value;
    if (!taskValue) return;
    const taskDate = new Date().toLocaleString();
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
    taskItem.innerHTML = `<button class="complete-task-btn"><i class="fa-solid fa-check"></i></button> <input type="text" class="task-title-input" value="${taskValue}"> <span class="task-date">Добавлено: ${taskDate}</span> <div class="task-buttons"> <button class="delete-task-btn"><i class="fa-solid fa-xmark"></i></button> </div> `;
    const completeTaskBtn = taskItem.querySelector(".complete-task-btn");
    const deleteTaskBtn = taskItem.querySelector(".delete-task-btn");
    completeTaskBtn.addEventListener("click", function () {
        taskItem.classList.toggle("completed");
    });
    deleteTaskBtn.addEventListener("click", function () {
        taskList.removeChild(taskItem);
    });
    taskList.appendChild(taskItem);
    taskInput.value = "";
});
clearAllBtn.addEventListener("click", function () {
    taskList.innerHTML = "";
});