function getIcon(number) {    
    let img = document.createElement('img');
    img.src = '../icons_units-color-a-6.png';
    // Размер каждой иконки
    const iconSize = 23;
    // Вычисляем смещение для данного числа
    const offset = (number+1) * (iconSize);
    // Если число не соответствует иконке, используем иконку -1
    if (number < -1 || number >= 2714 / (iconSize)) {
        offset = 0;
    }    
    img.style.width = '23px';
    img.style.height = '23px';
    img.style.border = '1px solid transparent';
    img.style.objectFit = 'none';
    img.style.objectPosition = '-' + offset + 'px 0';    
    return img;
}
