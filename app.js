function loginForm(){
    event.preventDefault();
    let userName = (document.getElementById('username').value).toLowerCase();
    let password = document.getElementById('password').value;
    if(userName === 'admin'){
        if(password === 'admin'){
            document.getElementById('dashboard').classList.remove('hidden');
            document.getElementById('login').classList.add('hidden');
            document.getElementById('shape').classList.add('hidden');
            document.getElementById('userName').innerText = userName;
            document.getElementById('usernameProfile').innerText = userName;
            document.getElementById('userEmailProfile').innerText = `${userName}@email.com`
        }
        else{
            document.getElementById('error').innerText = 'Invalid Password';
            document.getElementById('password').value = '';
        document.getElementById('password').focus();
        }
    }
    else{
        document.getElementById('error').innerText = 'Invalid UserName';
        document.getElementById('username').value = '';
        document.getElementById('username').focus();
        document.getElementById('password').value = '';
    }
    
};

function logOut(){
    document.getElementById('dashboard').classList.add('hidden');
    document.getElementById('login').classList.remove('hidden');
    document.getElementById('shape').classList.remove('hidden');
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}