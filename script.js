const emojis = [
    {
        emoji: "👋",
        name: "mão acenando"
    },
    {
        emoji: " 🤌",
        name: "capisce"
    },
    {
        emoji: "✌️",
        name: "um salve"
    },
    {
        emoji: "🤙",
        name: "sinal do ronaldinho"
    },
    {
        emoji: "👉",
        name: "sinal"
    },
    {
        emoji: "👆",
        name: "cima"
    },
    {
        emoji: "👇",
        name: "baixo"
    },

    {
        emoji: "👍",
        name: "joinha"
    },
    {
        emoji: "👏",
        name: "palmas"
    },
    {
        emoji:"👽",
        name: "alienígena"
    },
    {
        emoji: "💻",
        name: 'pc'
    },
    {
        emoji: "💸",
        name: 'dollar'
    },
    {
        emoji: "💣",
        name: "bomba"
    },
    {
        emoji: "🛠",
        name: "staks"
    },
    {
        emoji: "❤️",
        name: "coração vermelho"
    },
    {
        emoji: "💙",
        name: "coração azul"
    },
    {
        emoji: "🖤",
        name: "coração preto"
    },
    {
        emoji: "🤍",
        name: "coração branco"
    },
    {
        emoji: "❌",
        name: "xis"
    },
    {
        emoji: "❗️",
        name: "ponto de esclamação"
    },
    {
        emoji: "❓",
        name: "ponto de interrogação"
    },
    {
        emoji: "🚀",
        name: "foguete"
    }
];

window.onload = (emojis) => create(emojis)


function create() {
    for (let emoji of emojis)
    createEmoji(emoji);  
}


function createEmoji(data) {
    const { emoji, name } = data;

    const div = document.createElement('div');
    div.setAttribute('class', 'emoji');
    div.setAttribute('title', name);
    div.innerText = emoji;

    div.addEventListener('click', (e) =>{ 
        navigator.clipboard.writeText(e.target.innerText)});
    
    const element = document.querySelector('#root');
    element.appendChild(div);
}