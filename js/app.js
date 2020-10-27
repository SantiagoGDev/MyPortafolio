let aux = true;
const $btnMenu = document.querySelector('.hero__menu');

const showMenu = (e)=>{
    const $menu = document.querySelector('.main-menu');
    $menu.classList.toggle('main-menu--open');

    if( aux){
        $btnMenu.classList.remove('icon-menu');
        $btnMenu.classList.add('icon-close');
        aux = false;
    }else{
        $btnMenu.classList.add('icon-menu');
        $btnMenu.classList.remove('icon-close');
        aux = true;
    }
}

$btnMenu.addEventListener('click',showMenu);