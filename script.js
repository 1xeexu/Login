const id = document.getElementById("id");
const password = document.getElementById("password");
const loginButton = document.querySelector(".button-login");
const signUpButton = document.querySelector(".button-signup");
let userId;
let userPw;

function validateInput(inputId, inputPw) {
    id.style.border = "";
    password.style.border = "";

    if (!inputId) {
        //alert("아이디를 입력하세요.");
        id.style.border = "2px solid red";
        return false;
    }
    else if (!inputPw) {
        //alert("비밀번호를 입력하세요.");
        password.style.border = "2px solid red";
        return false;
    }
    else if (inputId.length < 6) {
        alert("아이디는 6자 이상이어야 합니다.");
        return false;
    }
    else if (inputPw.length < 8 || inputPw.length > 12) {
        alert("비밀번호는 8자 이상 12자 이내여야 합니다.");
        password.value = "";
        return false;
    }
    return true;
}

const handleLogin = function() {
    const inputId = id.value;
    const inputPw = password.value;

    if (validateInput(inputId, inputPw)) {
        if (inputId == userId && inputPw == userPw) {
            alert("로그인에 성공하였습니다.");
            id.value = "";
            password.value = "";
        }
        else {
            alert("회원 정보가 없습니다.");
        }
    }
};

const handleSignUp = function() {
    const inputId = id.value;
    const inputPw = password.value;

    if (validateInput(inputId, inputPw)) {
        alert("회원가입에 성공하였습니다.");

        userId = inputId;
        userPw = inputPw;

        id.value = "";
        password.value = "";
    }
};

loginButton.addEventListener("click", handleLogin);
signUpButton.addEventListener("click", handleSignUp);