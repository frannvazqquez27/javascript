const BTNS = document.querySelectorAll('.btn');
const PRIMARY = "Click Event";
const SECONDARY = "Mouse Enter Event";
const SUCCESS = "Mouse Up Event";
const DANGER = "Mouse Leave Event";
const WBTN = document.querySelector(".btn-warning");
const CHANGECOLORRED = document.getElementById("changeRed");
const CHANGECOLORW = document.getElementById("changeWhite");
const DARK = document.getElementById("darkButton");

BTNS.forEach(button => {
    button.addEventListener('click', () => {
        const EVENTO = button.getAttribute('data-event');
        switch (EVENTO) {
            case 'PRIMARY':
                window.alert(PRIMARY);
                break;
            case 'SECONDARY':
                window.alert(SECONDARY);
                break;
            case 'SUCCESS':
                window.alert(SUCCESS);
                break;
            case 'DANGER':
                window.alert(DANGER);
                break;
            default:
                break;
        }
    });
});

WBTN.addEventListener("mouseenter", function () {
    WBTN.classList.remove("btn-warning");
    WBTN.classList.add("btn-danger");
});
WBTN.addEventListener("mouseleave", function () {
    WBTN.classList.remove("btn-danger");
    WBTN.classList.add("btn-warning");
});

CHANGECOLORRED.addEventListener("click", function(){
    document.body.style.backgroundColor = "red";
})
CHANGECOLORW.addEventListener("click", function(){
    document.body.style.backgroundColor = "white";
})

DARK.addEventListener("click", function () {
    BTNS.forEach(function (button) {
        button.style.backgroundColor = "black";
        button.style.color = "white";
    });
});