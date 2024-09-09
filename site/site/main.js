var header = document.getElementById("header");
var navegação = document.getElementById("navegador");
var section1 = document.getElementById("section1");
var showSidebar = false;

function toggleSidebar() {
    showSidebar = !showSidebar;
    if(showSidebar) {
        navegação.style.marginLeft = "-10vw";
        navegação.style.animationName = "showSidebar";
        section1.style.filter = "blur(2px)";
    }
    else {
        navegação.style.marginLeft = "-100vw";
        navegação.style.animationName = "";
        section1.style.filter = "";
    }
}

function closesideBar() {
    if(showSidebar) {
        toggleSidebar();
    }

}

window.addEventListener("resize", function() {
    if(this.window.innerWidth > 768 && showSidebar){
        toggleSidebar();
    }
});