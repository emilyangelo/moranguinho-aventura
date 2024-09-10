document.addEventListener('DOMContentLoaded', function() {
    const passos = document.querySelectorAll('.passo');
    const botoes = document.querySelectorAll('.btn-proximo');

    botoes.forEach(button => {
        button.addEventListener('click', function() {
            const proximo = this.getAttribute('data-proximo');

            passos.forEach(passo => {
                passo.classList.remove('ativo');
            });

            const passoAtual = document.getElementById('passo-' + proximo);
            passoAtual.classList.add('ativo');
        });
    });
});
