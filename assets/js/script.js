document.addEventListener('DOMContentLoaded', () => {
    // Adiciona a animação inicial ao conteúdo do herói
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('fade-in');
    }

    // Adiciona a classe 'enter' à '.img2'
    const img2 = document.querySelector('.img2');
    if (img2) {
        img2.classList.add('enter');
    }
});

window.addEventListener('scroll', function() {
    // Efeito de encolhimento do cabeçalho ao rolar
    const header = document.getElementById('header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('shrink');
        } else {
            header.classList.remove('shrink');
        }
    }

    // Adiciona a classe 'visible' às seções quando entram na viewport
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight / 1.2; // Ajuste o valor conforme necessário

        if (sectionTop < triggerPoint) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});

    /* Envio de mensagem do formulario */

    document.getElementById("contactForm")?.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Enviado com sucesso!');
        this.submit();
    // Considerar remoção do this.submit() se o formulário já está sendo processado por JavaScript
});



/* Menu hamburguer */
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Alterna a visibilidade do menu quando o botão é clicado
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Fecha o menu ao rolar para baixo
        function handleScroll() {
            if (navMenu.classList.contains('active') && window.scrollY > 50) {
                navMenu.classList.remove('active');
            }
        }

        // Adiciona o evento de rolagem para chamar a função handleScroll
        window.addEventListener('scroll', handleScroll);
    }
});
