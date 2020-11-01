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



const $menu = document.querySelectorAll('.main-menu__option');
const $sections = document.querySelectorAll('.wrapper section');
$menu.forEach( (element,index) =>{
    element.addEventListener('click', e=>{
        $sections.forEach( sctElement =>{
            if(index ==  sctElement.id){
                sctElement.classList.add('open-section');
            }else{
                sctElement.classList.remove('open-section');
            }
        })
    })
})