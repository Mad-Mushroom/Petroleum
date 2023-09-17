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
    accDet.innerHTML = `<p>Name: ${sessionStorage.name}</p><br><br><p>E-Mail: ${sessionStorage.email}</p><br><br><button class="logout">Logout</button>`;
}

const logOut = document.querySelector('.logout');

if(logOut != null){
    logOut.onclick = () => {
        sessionStorage.clear();
        window.location = "/";
        //location.reload();
    }
}