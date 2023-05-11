function Opennav() {
    document.getElementById("nav").style.cssText = "position:relative;left:0vw;"
    document.getElementById("bar").style.cssText = "visibility: hidden;"
    document.getElementById("x").style.cssText = "visibility: visible"
}
function Closenav() {
    document.getElementById("nav").style.cssText = "position:relative;left:100vw;"
    document.getElementById("bar").style.cssText = "visibility:visible;"
    document.getElementById("x").style.cssText = "visibility: hidden;"
}



function scrollfunction() {

    if (window.onscroll. < 1000) {
        document.getElementById("home").style.fontSize = "1.5rem";
    }
    else {

    }
};