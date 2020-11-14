let aux = true;
const $btnMenu = document.querySelector('.hero__menu');
const $menu = document.querySelector('.main-menu');

const openMenu = function(){
    $menu.classList.add('main-menu--open');
    $btnMenu.classList.remove('icon-menu');
    $btnMenu.classList.add('icon-close');
    aux = false;
}

const closeMenu = function(){
    $menu.classList.remove('main-menu--open');
    $btnMenu.classList.add('icon-menu');
    $btnMenu.classList.remove('icon-close');
    aux = true;
}

const showMenu = function(){
    return aux ? openMenu() : closeMenu(); 
}

$btnMenu.addEventListener('click',showMenu);

// Paginacion del menu principal



const showSections = () =>{
    const $itemsMenu = document.querySelectorAll('.main-menu__option');
    const $sections =  document.getElementById('sections').content.querySelectorAll('section')
    const $contenedor = document.querySelector('.wrapper');
    $contenedor.appendChild($sections[0])

    $itemsMenu.forEach( (element,index) =>{
        element.addEventListener('click', e=>{
            closeMenu()

           //Cambiando de section y dejando el active en le boton presionado
            $itemsMenu.forEach( btn =>{
                btn.classList.remove('main-menu__option--active') 
            })
            $sections.forEach( sctElement =>{
                if(index == sctElement.getAttribute('data-change')){
                    $contenedor.innerHTML = '';
                    $contenedor.appendChild(sctElement);
                    e.target.classList.add('main-menu__option--active')

                    if(sctElement.getAttribute('data-change') == 2){
                        validateForm()
                    }
                }
            })
            //Cambiando de section y dejando el active en le boton presionado
        })
    })

}




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
            alert('Mensaje Enviado')
            $form.reset()
        }else{
            alert('Debe completar correctamente los campos')
        }
    })

}




document.addEventListener('DOMContentLoaded',showSections);