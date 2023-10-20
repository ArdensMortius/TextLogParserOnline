function getIcon(number) {    
    var img = document.createElement('img');
    img.src = '../icons_units-color-a-6.png';
    // Размер каждой иконки (включая рамку)
    var iconSize = 25;
    // Вычисляем смещение для данного числа
    var offset = (number+1) * (iconSize-2);
    // Если число не соответствует иконке, используем иконку -1
    if (number < -1 || number >= 2714 / (iconSize-2)) {
        offset = 0;
    }    
    img.style.width = '23px';
    img.style.height = '23px';
    img.style.border = '1px solid black';
    img.style.objectFit = 'none';
    img.style.objectPosition = '-' + offset + 'px 0';    
    return img;
}
