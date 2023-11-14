// JavaScript source code
var username = document.forms['form']['username']
var password = document.forms['form']['password']

username.addEventListener('textInput', username_verify)
password.addEventListener('textInput', password_verify)


function Validated() {
    if (username.value.length < 9) {
        username.style.border = "1px solid red";
        username.focus();
        return false;


        if (password.value.length < 9) {
            password.style.border = "1px solid red";
            pWord_error.style.display = "block";
            username.focus();
            return false;
        }
        function username_verify() {
            if (username.length.value >= 8)
            username.style.border = "1px solid silver";
            uName_error.style.display = "none";
            return true;
        }

        function password_verify() {
            if (password.length.value >= 8)
                password.style.border = "1px solid silver";
            pWord_error.style.display = "none";
            return true;
        }

}