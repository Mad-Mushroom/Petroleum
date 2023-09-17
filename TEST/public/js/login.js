const name = document.querySelector('.fullname') || null;
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const submitBtn = document.querySelector('.submit-login');

const validateData = (data) => {
    if(!data.name){
        alert(data);
    } else{
        sessionStorage.name = data.name;
        sessionStorage.email = data.email;
        location.href = '/';
    }
}

if(name == null){ // means login page is open
    submitBtn.addEventListener('click', () => {
        fetch('/login-user',{
            method: 'post',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({
                email: email.value,
                password: password.value
            })
        })
        .then(res => res.json())
        .then(data => {
            validateData(data);
        })
    })
} else{ // means register page is open

    submitBtn.addEventListener('click', () => {
        fetch('/register-user', {
            method: 'post',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({
                name: name.value,
                email: email.value,
                password: password.value
            })
        })
        .then(res => res.json())
        .then(data => {
            validateData(data);
        })
    })

}