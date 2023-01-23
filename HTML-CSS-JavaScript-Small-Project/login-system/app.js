function loginAction() {
    let userName = document.getElementById('user-name-id');

    let pwd = document.getElementById('pw-id');
    let confirmPwd = document.getElementById('confirm-pw-id');

    let msgBox = document.getElementById('error-msg-box');

    // user name can't be space or empty
    // so, we need to check user name
    if (userName.value.trim() == "") {
        msgBox.innerText = `Please enter user name`;
    }
    // password also can't be space or empty
    // we also need to check password
    else if (pwd.value.trim() == '' || confirmPwd.value.trim() == '') {
        msgBox.innerText = `Please enter password`;
    }
    // compare password and confirm password
    else if (pwd.value == confirmPwd.value) {
        // save storage
        localStorage.setItem('user-name', userName.value);
        // go to welcome page
        window.location.href = 'welcome.html';
    } else {
        msgBox.innerText = `Password doesn't match!`;
    }
}