document.addEventListener("DOMContentLoaded", () => {
    const btnAbrir = document.getElementById('menu-toggle');
    const btnFechar = document.getElementById('close-menu-btn');
    const menu = document.getElementById('nav-menu');
    const linksMenu = document.querySelectorAll('.nav-menu a');
    const container = document.querySelector('.container-quem-somos');

    const alternarMenu = (abrir) => {
        if (abrir) {
            menu.classList.add('ativo');
            btnAbrir.setAttribute('aria-expanded', 'true');
        } else {
            menu.classList.remove('ativo');
            btnAbrir.setAttribute('aria-expanded', 'false');
        }
    };

    btnAbrir.addEventListener('click', () => alternarMenu(true));
    btnFechar.addEventListener('click', () => alternarMenu(false));

    document.addEventListener('click', (evento) => {
        if (!menu.contains(evento.target) && !btnAbrir.contains(evento.target) && menu.classList.contains('ativo')) {
            alternarMenu(false);
        }
    }); 
linksMenu.forEach(link => {
    link.addEventListener('click', () => alternarMenu(false));
})
    const animacaoObserver = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visivel');
                animacaoObserver.unobserve(entrada.target);
            }
        });
    }, { 
        threshold: 0.15
    });
    const elementosParaAnimar = document.querySelectorAll('.animate-on-scroll');
    elementosParaAnimar.forEach(elemento => animacaoObserver.observe(elemento));
    const containerObserver = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                container.classList.add('scrolled');
            } else {
                container.classList.remove('scrolled');
            }
        });
}, {
    threshold: 0.1
});
containerObserver.observe(container);
});
const formulario = document.querySelector('.contato-formulario');
if(formulario){
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        const botao = document.querySelector('button[type="submit"]');
        const textoOriginal = botao.textContent;

        botao.textContent = 'Enviada a mensagem com sucesso.';
        botao.style.backgroundColor = '#28a745';
        botao.style.color = '#fff';
        botao.disabled = true;
        formulario.reset();
        setTimeout(() => {
            botao.textContent = textoOriginal;
            botao.style.backgroundColor = '';
            botao.disabled = false;
        }, 3000);
    });
}