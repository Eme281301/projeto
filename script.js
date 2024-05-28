function toggleMode() {
    const html = document.documentElement;

    // Alternar a classe 'light' no elemento HTML para mudar o tema
    document.documentElement.classList.toggle('light');

    // Selecionar a imagem dentro do elemento com o id 'profile'
    const img = document.querySelector("#profile img");

    // Verificar se a classe 'light' está presente no elemento HTML
    if (html.classList.contains("light")) {
        // Se estiver no modo claro, alterar o src da imagem para o avatar em modo claro
        img.setAttribute('src', './img/avatar-light.png');
    } else {
        // Se não estiver no modo claro, alterar o src da imagem para o avatar padrão
        img.setAttribute('src', './img/avatar.png');
    }
}