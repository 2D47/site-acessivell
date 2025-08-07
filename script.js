document.addEventListener('DOMContentLoaded', function() {
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');
    

    if (botaoDeAcessibilidade && opcoesDeAcessibilidade) {
        botaoDeAcessibilidade.addEventListener('click', function() {
            botaoDeAcessibilidade.classList.toggle('rotacao-botao');
            opcoesDeAcessibilidade.classList.toggle('esconde-lista');

            const botaoExpandido = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
            botaoDeAcessibilidade.setAttribute('aria-expanded', String(!botaoExpandido));
        });
    }

    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const alternaContraste = document.getElementById('alterna-contraste');

    let tamanhoAtualFonte = 1;


    function atualizarFonte(novoTamanho) {
        tamanhoAtualFonte = Math.min(Math.max(novoTamanho, 0.8), 2);
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    }

    if (aumentaFonteBotao) {
        aumentaFonteBotao.addEventListener('click', function() {
            atualizarFonte(tamanhoAtualFonte + 0.1);
        });
    }

    if (diminuiFonteBotao) {
        diminuiFonteBotao.addEventListener('click', function() {
            atualizarFonte(tamanhoAtualFonte - 0.1);
        });
    }

    if (alternaContraste) {
        alternaContraste.addEventListener('click', function() {
            document.body.classList.toggle('alto-contraste');
        });
    }
});

ScrollReveal().reveal('#inicio', { delay: 500 });
ScrollReveal().reveal('#tropicalia', { delay: 500 });
ScrollReveal().reveal('#galeria', { delay: 500 });
ScrollReveal().reveal('#contato', { delay: 500 });
