let aux = true;
const $btnMenu = document.querySelector('.hero__menu');

const showMenu = (e)=>{
    const $menu = document.querySelector('.main-menu');
    $menu.classList.toggle('main-menu--open');

    if(aux){
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

//Paginacion del menu principal

const $menu = document.querySelectorAll('.main-menu__option');
const $sections = document.querySelectorAll('.wrapper section');
$menu.forEach( (element,index) =>{
    element.addEventListener('click', e=>{
        //Cerrar Menu
        document.querySelector('.main-menu').classList.remove('main-menu--open');
        $btnMenu.classList.add('icon-menu');
        $btnMenu.classList.remove('icon-close');
        aux = true;
       //Cerrar Menu

    
       //Cambiando de section y dejando el active en le boton presionado
        $menu.forEach( btn =>{
            btn.classList.remove('main-menu__option--active')
        })
        $sections.forEach( sctElement =>{
            if(index ==  sctElement.getAttribute('change')){
                sctElement.classList.add('open-section');
                e.target.classList.add('main-menu__option--active')
            }else{
                sctElement.classList.remove('open-section');
            }
        })
        //Cambiando de section y dejando el active en le boton presionado
    })
})



//Validacion el contact form

function validateForm(){
    const $inputs = document.querySelectorAll('.contact-form__input'),
          $form = document.getElementById('contact-form');

    const expresiones = {
        nombre: /^[a-zA-ZÁ\sñÑáéíóúÁÉÍÓÚ]{1,25}$/,
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        mensaje: /^[a-zA-ZÁ\s0-9ñÑáéíóúÁÉÍÓÚ¡!¿?@#()\.\"\-\_]{3,200}$/
    }
    const campos = {
        nombre: false,
        correo: false,
        mensaje: false        
    }  


    function validateExpresion(input,exp){
        if(exp.test(input.value)){
            input.classList.remove('contact-form__input--incorrect')
            input.parentNode.lastElementChild.classList.remove('contact-form__text--open')
            return true
        }else{
            input.parentNode.lastElementChild.classList.add('contact-form__text--open')
            input.classList.add('contact-form__input--incorrect')
            return false
        }
    }

    function validateInput(e){
        if(e.target.id === 'name'){
            campos.nombre = validateExpresion(e.target,expresiones.nombre)
        }else if(e.target.id === 'email'){
            campos.correo =  validateExpresion(e.target,expresiones.correo)
        }else{
            campos.mensaje = validateExpresion(e.target,expresiones.mensaje)
        }

    }

    $inputs.forEach(el => el.addEventListener('keyup',validateInput));
    $inputs.forEach(el => el.addEventListener('blur',validateInput));
    $form.addEventListener('submit', e =>{
        e.preventDefault();
        if(campos.nombre && campos.correo && campos.mensaje){
            alert('mensaje Enviado');
            $form.reset();
        }
    })

}

validateForm()