const id = document.getElementById("id");
const password = document.getElementById("password");
const loginButton = document.querySelector(".button-login");
const signUpButton = document.querySelector(".button-signup");
let userId;
let userPw;

function showAlert(message) {
    setTimeout(() => alert(message), 10);
}

function initStyle() {
    id.style.border = "";
    password.style.border = "";
}

function validateInput(inputId, inputPw) {
    initStyle();

    if (!inputId) {
        id.style.border = "2px solid red";
        return false;
    }
    else if (!inputPw) {
        password.style.border = "2px solid red";
        return false;
    }
    else if (inputId.length < 6 || inputId.length > 12) {
        id.style.border = "2px solid red";
        showAlert("아이디는 6자 이상 12자 이내여야 합니다.");
        return false;
    }
    else if (inputPw.length < 8 || inputPw.length > 12) {
        password.style.border = "2px solid red";
        showAlert("비밀번호는 8자 이상 12자 이내여야 합니다.");
        return false;
    }
    return true;
}

const handleLogin = function() {
    const inputId = id.value;
    const inputPw = password.value;

    if (validateInput(inputId, inputPw)) {
        initStyle();

        setTimeout(() => {
            if (inputId == userId && inputPw == userPw) {
                alert("로그인에 성공하였습니다.");
                id.value = "";
                password.value = "";
            }
            else {
                alert("회원 정보가 없습니다.");
            }
        }, 10);
    }
};

const handleSignUp = function() {
    const inputId = id.value;
    const inputPw = password.value;

    if (validateInput(inputId, inputPw)) {
        initStyle();

        setTimeout(() => {
            alert("회원가입에 성공하였습니다.");

            userId = inputId;
            userPw = inputPw;

            id.value = "";
            password.value = "";
        }, 10);

    }
};

loginButton.addEventListener("click", handleLogin);
signUpButton.addEventListener("click", handleSignUp);