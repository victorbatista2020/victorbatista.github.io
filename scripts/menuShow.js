function menuShow() {
    let menumMobile = document.querySelector('.mobile-menu');
    let menuItems = document.querySelectorAll('.mobile-menu ul li a');
    

    if(menumMobile.classList.contains('open')){
        menumMobile.classList.remove('open');
        document.querySelector('.icon').src = "menu_white_36dp.svg";
    } else{
        menumMobile.classList.add('open')
        document.querySelector('.icon').src = "close_white_36dp.svg";
    }

    // Adiciona um evento de clique a cada item do menu
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menumMobile.classList.remove('open');
            document.querySelector('.icon').src = "menu_white_36dp.svg";
        });
    });

    document.documentElement.onclick = function(event){
        if (event.target !== menumMobile) {
            menumMobile.style.display = 'open';
        }
    }




}
