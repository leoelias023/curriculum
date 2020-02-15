// Configurações da barra de navegação
    setPercent("pNode", "90%");
    setPercent("pReact", "70%");
    setPercent("pReactNative", "65%");
    setPercent("pJava", "60%");
    setPercent("pPython", "70%");

const buttonNavAside = document.getElementById("btn-top");
function toggleMenu(){
    const asideMenu = document.getElementById("aside-menu");
    const iconBtn = document.getElementById("icon-btn-top");
    iconBtn.classList.add('fa-times');
    if(asideMenu.style.height == '100px') {
        iconBtn.classList.remove('fa-times');
        iconBtn.classList.add('fa-bars');
        asideMenu.style.height = "52px";
    } else {
        iconBtn.classList.remove('fa-bars');
        iconBtn.classList.add('fa-times');
        asideMenu.style.height = "100px";
    }
}

buttonNavAside.addEventListener('click', () => {
    toggleMenu();
})

window.addEventListener('keyup', (event) => {
    const key = event.key;
    if(key == " " || key == "ArrowUp") {
        toggleMenu();
    }
});

/* System of percent */
    function setPercent(language, perc) {
        document.getElementById("load-"+language).style.width = perc;
    }