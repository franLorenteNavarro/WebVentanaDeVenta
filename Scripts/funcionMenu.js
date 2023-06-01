if (window.matchMedia("(max-width: 1024px)").matches) {
    const logoInicio = document.getElementById('logoInicio');
    const iconoMenu = document.getElementById('menuIcono');
    const menu = document.getElementById('listaMenu');
    const menuItems = menu.querySelectorAll('li a');

    /* Al pinchar el logo desactiva icono y menu */
    logoInicio.addEventListener('click', () => {
        menu.classList.remove('active');
        iconoMenu.classList.remove('active');
    });

    /* Al pinchar el icono alterna icono y menu */
    iconoMenu.addEventListener('click', () => {
        menu.classList.toggle('active');
        iconoMenu.classList.toggle('active');
    });

    /* Al pinchar en una opcion de menu alterna icono y cierra menu */
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('active');
            iconoMenu.classList.remove('active');
        });
    });
}