const pokemon = document.querySelector('.pokemon');
const pokeball = document.querySelector('.pokeball');

const jump = () => {
    pokemon.classList.add('jump');

    setTimeout(() => {
        pokemon.classList.remove('jump');
    }, 500)
}

const loop = setInterval(() => {

    const pokeballPosition = pokeball.offsetLeft;
    const pokemonPosition = +window.getComputedStyle(pokemon).bottom.replace('px','');

    if(pokeballPosition <= 120 && pokeballPosition > 0 && pokemonPosition < 60){

        pokeball.style.animation = 'none';
        pokeball.style.left = `${pokeballPosition}px`;

        pokemon.style.animation = 'none';
        pokemon.style.bottom = 0;

        pokemon.src = './imagens/pikaCapturada.gif';
        pokemon.style.width = '100%'
        pokemon.style.height = '100%'

        clearInterval(loop);
    }

},10)

document.addEventListener('keydown', jump);