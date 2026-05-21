const u = "Group6";
const p = "ICT2526";

function login() {

    let usernameInput = document.getElementById("username").value;
    let passwordInput = document.getElementById("password").value;

    if (usernameInput === "bonnienubla" && passwordInput === "010511") {
        alert("Access granted!");
    }

    else{
        alert("Incorrect username or password.");
    }

}