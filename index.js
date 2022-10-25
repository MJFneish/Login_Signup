window.onload = function(){
    let LOGIN= document.getElementById('LOGIN');
    let SIGNUP = document.getElementById('SIGNUP');
    let SWAP = document.getElementById('SWAP');
    let login = document.querySelectorAll('.login');
    let signup = document.querySelectorAll('.signup');
    
    let linkSubmit = document.querySelectorAll('.submit');
    let loginSubmit =linkSubmit[0];
    let signupSubmit =linkSubmit[1];

    SIGNUP.addEventListener('click',()=>{
        SWAP.classList.add('toright');
        login[0].classList.remove('active');
        signup[0].classList.add('active');
        login[0].style.top = 20 + '%';
        login[0].style.opacity = 0;
        login[0].setAttribute("pointer-events", "none");
    });
    LOGIN.addEventListener('click',()=>{
        SWAP.classList.remove('toright');
        login[0].classList.add('active');
        signup[0].classList.remove('active');
        login[0].style.top = 0 + '%';
        login[0].style.opacity = 1;
        login[0].setAttribute("pointer-events", "all");

    });
    loginSubmit.addEventListener("click", function () {
        login.submit();
    });
    signupSubmit.addEventListener("click", function () {
        signup.submit();
    });



    let pswrd = document.getElementsByClassName('pswrd');
    let pass1 =pswrd[0];
    let pass2 =pswrd[1];
    let togglebtn = document.querySelectorAll('.togglebtn');

    togglebtn[0].onclick = function(){
        if(pass1.type === 'password'){
            pass1.setAttribute('type', 'text');
            togglebtn[0].classList.add('hide');
        } else {
            pass1.setAttribute('type', 'password');
            togglebtn[0].classList.remove('hide');
        }
    }
    togglebtn[1].onclick = function(){
        if(pass2.type === 'password'){
            pass2.setAttribute('type', 'text');
            togglebtn[1].classList.add('hide');
        } else {
            pass2.setAttribute('type', 'password');
            togglebtn[1].classList.remove('hide');
        }
    }


}