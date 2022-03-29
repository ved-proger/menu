var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
                isMobile.Android()
                || isMobile.BlackBerry()
                || isMobile.iOS()
                || isMobile.Opera()
                || isMobile.Windows()
                );
    }
};


if(isMobile.any()){
    document.body.classList.add('_touch');
    let menuArrows = document.querySelectorAll('.menu__arrow')
    if(menuArrows.length > 0){
        for(let i = 0; i < menuArrows.length; i++){
            const menuArrow = menuArrows[i];
            menuArrow.addEventListener('click', function(){
                this.parentElement.classList.toggle('_active')
            });
        }
    }
}else{
    document.body.classList.add('_pc');
}


// menu toggle

const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
if(menuIcon){
    menuIcon.addEventListener('click', () =>{
        document.body.classList.toggle('_lock')
        menu.classList.toggle('_active');
    });
}

// scroll on click

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');


if(menuLinks.length > 0){
    for(let i = 0; i < menuLinks.length; i++){
        const menuLink = menuLinks[i];
        menuLink.addEventListener('click', onMenuLinkClick)
    }
    function onMenuLinkClick(e){
        e.preventDefault()
        menu.classList.remove('_active')
        const menuLink = e.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const menuLink = e.target;
              const gotoBlock = document.querySelector(menuLink.dataset.goto)
              const valueBlock = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').clientHeight
              window.scrollTo({
                top: valueBlock,
                behavior: "smooth",

              })
        }
    }
}