// #1 фильтрация строки
// Создать переменную со строковым значением. 
// сформировать переменную которая 
// будет состоять только из ГЛАСНЫХ букв этой строки. 
// Результат вывести в консоль
const letter='Привет! Как дела?';


function getVowels(letter){
    //В массиве vowels будут хранится все гласные буквы
    const vowels=['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е'];
    //В lowRegistrLetter будет хранится значение переменной letter в нижнем регистре
    const lowRegistrLetter=letter.toLowerCase();
    //Переменная onlyVowelsLetter будет строкой состоящей из гласных, которые взяты из переменной lowRegistrLetter
    let onlyVowelsLetter='';
    //1й цикл for будет перебирать каждый символ из строки lowRegistrLetter 
    for(let i=0; i<lowRegistrLetter.length; i++){
    //2й цикл for будет перебирать каждый символ из массива vowels и будет 
    // сравнивать его с каждым текущим символом из строки lowRegistrLetter
        for(let j=0; j<vowels.length; j++){
            if(lowRegistrLetter[i]==vowels[j]){ 
                onlyVowelsLetter=onlyVowelsLetter+vowels[j];
            }
        }
    }
    return onlyVowelsLetter;
}

console.log(getVowels(letter));

