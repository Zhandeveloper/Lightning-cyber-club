// Находим кнопку
// For price section button 
let scrollButtonPrice = document.querySelector('.price');

// Добавляем обработчик события для кнопки
scrollButtonPrice.addEventListener('click', function() {
    // Находим секцию, к которой нужно прокрутить страницу
    let sectionPrice = document.querySelector('.section-price'); // Если это класс
    // Или
    // let section_price = document.querySelector('#section-price'); // Если это идентификатор
    
    // Прокручиваем страницу к секции
    sectionPrice.scrollIntoView({ behavior: 'smooth' }); // Плавный скроллинг
});

//For PC button 
let scrollButtonPc = document.querySelector('.pc');
scrollButtonPc.addEventListener('click', function() {

    let sectionPc=document.querySelector('.pc1'); 

    sectionPc.scrollIntoView({ behavior: 'smooth' }); 
});

//For games button 
let scrollButtonGames = document.querySelector('.games');
scrollButtonGames.addEventListener('click', function() {

    let sectionGames=document.querySelector('.section-games'); 

    sectionGames.scrollIntoView({ behavior: 'smooth' }); 
});

// script for burger menu 
document.querySelector(".burger").addEventListener('click',function(){
    this.classList.toggle('active')
    document.querySelector('.menu').classList.toggle('open')
})


//For map button
let scrollButtonMap = document.querySelector('.location');
scrollButtonMap.addEventListener('click', function() {

    let sectionMap=document.querySelector('.for_map_div'); 

    sectionMap.scrollIntoView({ behavior: 'smooth' }); 
});

//For main-logo button
let scrollButtonMain = document.getElementById('logo');
scrollButtonMain.addEventListener('click', function() {
    let sectionMain = document.querySelector('.computers'); 
    sectionMain.scrollIntoView({ behavior: 'smooth' }); 
});

