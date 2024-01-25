let tittle = document.getElementById("tittle");
let userName = document.getElementById("user-name");
let signIn = document.getElementById("signin-btn");
let signUp = document.getElementById("signup-btn");


signIn.onclick = () => {
    userName.style.display = "none";
    tittle.innerHTML = "Sign In";
    signUp.classList.add("disable");
    signUp.classList.remove("disable");
}

signUp.onclick = () => {
    userName.style.display = "flex";
    tittle.innerHTML = "Sign Up";
    signUp.classList.remove("disable");
    signUp.classList.add("disable");
}