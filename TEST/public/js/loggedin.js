const profile = document.querySelector('.profile');

if(profile != null){
    if(!sessionStorage.name){
        profile.innerHTML = '<a href="login.html"><button id="loginButton">Login</button></a>';
    } else{
        profile.innerHTML = `<a href="/account"><button>${sessionStorage.name}</button></a>`;
    }
}

const accDet = document.querySelector('.accDetails');

if(!sessionStorage.name){
    accDet.innerHTML = '<a href="login.html"><button id="loginButton">Login</button></a>';
} else{
    accDet.innerHTML = `<p>Name: ${sessionStorage.name}</p><br><br><p>E-Mail: ${sessionStorage.email}</p><br><br><button class="delAcc">Delete Account</button><button class="logout">Logout</button>`;
}

const logOut = document.querySelector('.logout');

if(logOut != null){
    logOut.onclick = () => {
        sessionStorage.clear();
        window.location = "/";
        //location.reload();
    }
}

const delAcc = document.querySelector('.delAcc');

if(delAcc != null){
    delAcc.onclick = () => {
        fetch('/delete-user',{
            method: 'post',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({
                email: sessionStorage.email,
                password: sessionStorage.email
            })
        })
        .then(res => res.json())
        .then(data => {
            alert(data);
        })
    }
}