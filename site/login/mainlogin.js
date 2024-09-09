var formSignIn = document.querySelector("#singin");
var formSignUp = document.querySelector("#singup");
var btnColor = document.querySelector(".btnColor");

document.querySelector("#btnSignin")
    .addEventListener("click", () => {
        formSignIn.style.left = "25px";
        formSignUp.style.left = "450px";
        btnColor.style.left = "0px";
    })

document.querySelector('#btnSignup')
    .addEventListener("click", () => {
        formSignIn.style.left = "-450px";
        formSignUp.style.left = "25px";
        btnColor.style.left = "110px";
    })