const strtonum = require('./Unit_ID_str_to_num_convereter.js');
const IDtoimg = require('./UnitID_to_img.js');

function UnitsStringParser(input) {
    // Разбиваем строку на подстроки
    let substrings = input.split('-');
    substrings.pop(); // Удаляем последний элемент, так как он пустой
    let result = '';
    for (let i = 0; i < substrings.length; i++) {
        let unit = substrings[i].substring(0, 2);
        let num = substrings[i].substring(2);
        // Преобразуем буквенныйID в числовой, а затем в изображение
        let img = IDtoimg(strtonum(unit));
        // Создаем HTML-структуру для изображения и числа
        result += `<div style="border: 1px solid transparent; text-align: center;">
                        <img src="${img}" alt="${unit}">
                        <div>${num}</div>
                    </div>`;
    }
    return result;
}
