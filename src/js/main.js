const select = (selector) => document.querySelector(selector);
const selectALL = (selector) => document.querySelectorAll(selector);
const createElement = (element) => document.createElement(element);

const manipularTexto = (input,span) => {
    if(input.value == ''){
        span.classList.remove('none')
        span.classList.add('input-err');
        span.textContent = 'Empty field';
    }else{
        span.classList.remove('input-err');
        span.classList.add('none');
        span.textContent = '';
    }
}

const showInfoError = (span) => {
    span.classList.add('none')
    span.classList.remove('input-err');
    span.textContent= '';
}
            
const validatorInput = () => {
    let botonBanner = select('#btn-banner');
    let botonFooter = select('#btn-footer');
    let inputBanner = select('#email-one'); 
    let inputFooter = select('#email-two'); 
    let spanBanner = select('.entry-email > span');
    let spanFooter = select('.entry-email-second > span');

    botonBanner.addEventListener('click', () => {
        manipularTexto(inputBanner,spanBanner);
    });
    inputBanner.addEventListener('keyup', () => {
        showInfoError(spanBanner);
    })

    botonFooter.addEventListener('click', () => {
        manipularTexto(inputFooter,spanFooter);
    }); 

    inputFooter.addEventListener('keyup', () => {
        showInfoError(spanFooter);
    })

}

const styleButtoScroll = (button, pos) => {
    if(pos >= 2715){
        button.style.backgroundColor = '#fff';
        button.style.color = '#202020'
    }else{
        button.style.backgroundColor = '#202020';
        button.style.color = '#fff'
    } 
}

const scrollButton = () =>{
    let hidden = select('.hidden');        
    let button = select('button');
    let buttonScroll = select('.scroll-btn');
    let footer = select('.pie-pagina')


    // detectamos la distancia del scroll
    window.addEventListener('scroll', () =>{
        let scrollTop = document.documentElement.scrollTop;

        // cambiamos de color al icon cuando llega al footer
        styleButtoScroll(buttonScroll,scrollTop);

        (scrollTop > 450) ? hidden.classList.remove('hidden')
                                : hidden.classList.add('hidden');

    });

    // desplazamiento del scroll
    button.addEventListener('click', () =>{
        if(button.matches('.scroll-btn')){
            window.scrollTo({
                behavior:'smooth',
                top: 0
            })
        }
    })
}

const menubar = () =>{
    let menubar = select('.menubar');
    let items = select('.items-nav');
    let nav = select('.nav-bar').children[1]

    menubar.addEventListener('click', () => {
        if(nav.classList.contains('visible')){
            items.classList.add('items-nav');
            items.style.transform = 'translateX(0px)'
        }else{
            items.style.transform = 'translateX(-1500px)'
        }
    })
    menubar.addEventListener('mouseout',() =>{
        if(nav.classList.contains('visible')){
            items.style.transform = 'translateY(-1500px)';
        }
    });
}

const init = () => {
    validatorInput();
    scrollButton();
    menubar();
}

init()