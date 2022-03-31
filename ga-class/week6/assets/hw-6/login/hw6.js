let loginButton = document.getElementById('loginButton');

function logIn() { alert("Login successfully") };

const logIn = (event) => {
    event.preventDefault();
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    let text = document.querySelector('#text')
    if (username == false || password.length < 8) {
        alert("Please enter a valid username and password");

    } else {
        text.innerHTML = `hello ${username}`;
    }

}
loginButton.addEventListener('click', logIn);