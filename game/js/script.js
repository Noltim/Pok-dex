const pokemon = document.querySelector('.pokemon');
const pokeball = document.querySelector('.pokeball');
const restartButton = document.querySelector('.restart-button');
const points = document.querySelector('.points');
const gameOverElement = document.querySelector('.game-over');

let score = parseInt(points.textContent.split(":")[1].trim())

const restartGame = () => {
    location.reload();
};

const jump = () => {
    pokemon.classList.add('jump');

    setTimeout(() => {
        pokemon.classList.remove('jump');
    }, 500)
}
pokeball.style.display = 'none';

setTimeout(() => {
    pokeball.style.display = 'block';
    startGame();
}, 3000);

const startGame = () => {
    const loop = setInterval(() => {
        const pokeballPosition = pokeball.offsetLeft;
        const pokemonPosition = +window.getComputedStyle(pokemon).bottom.replace('px', '');

        if (pokeballPosition <= 120 && pokeballPosition > 0 && pokemonPosition < 60) {
            gameOver(pokeballPosition, pokemonPosition);
            clearInterval(loop);
        }
        score++;
        points.textContent = "Pontuação: " + score;
    }, 10)
}

const gameOver = (pokeballPosition) => {
    pokeball.style.animation = 'none';
    pokeball.style.left = `${pokeballPosition}px`;

    pokemon.style.animation = 'none';
    pokemon.style.bottom = 0;

    pokemon.src = './imagens/pikaCapturada.gif';
    pokemon.style.width = '100%';
    pokemon.style.height = '100%';

    gameOverElement.style.display = 'flex';
};

document.addEventListener('keydown', jump);
