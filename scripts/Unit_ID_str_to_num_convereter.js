//преобразует буквенные ID в привычные и удобные числовые. 
//интересное решение у разрабов было, конечно. Нормально сложностей добавили на пустом месте)))
function Unit_ID_str_to_num_convereter(str) {
    if (str.length !== 2) {
        return "Входная строка должна состоять из двух букв";
    }
    const alphabetLength = 26;
    const firstLetter = str[0].toLowerCase();
    const secondLetter = str[1].toLowerCase();
    const firstLetterNumber = firstLetter.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    const secondLetterNumber = secondLetter.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    return (firstLetterNumber - 1) * alphabetLength + secondLetterNumber - 1;
}
