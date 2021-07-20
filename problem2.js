// #2 Выборка объекта
    // Сформировать произвольный массив объектов, описывающий, например, 
    // работников компании, в каждом объекте должны содержаться 
    // сл. свойства (поля) - name (содержащее имя сотрудника) и поле 
    // salary (содержащее зарплату сотрудника от 0 до 3000). 
    // Сформировать функцию в которую будет передан в 
    // качестве аргумента этот массив и возвращен из функции массив 
    // содержащий имена всех сотрудников, чья зарплата превышает 1000.
const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1500}];

function getWorthyWorkers(workers){
    let workersWithBigSalary=[];                         //workersWithBigSalary - это пустой массив в который мы будем добавлять имена
    for(let i=0; i<workers.length; i++){                 //Через цикл for перебираем каждый объект из массива workers
        if(workers[i].salary>1000){                      //Если свойство salary>1000 добавляем в массив workersWithBigSalary значение свойства 'name'
            workersWithBigSalary.push(workers[i].name);
        }
    }
    return workersWithBigSalary;
}

console.log(getWorthyWorkers(workers));