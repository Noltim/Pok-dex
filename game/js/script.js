const pokemon = document.querySelector('.pokemon');

const jump = () => {
    pokemon.classList.add('jump');

    setTimeout(() => {
        pokemon.classList.remove('jump');
    }, 500)
}

document.addEventListener('keydown', jump);