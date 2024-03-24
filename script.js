/*تسجيل الدخول عن طريق نفاذ*/ 

function login_Nafath(){
window.open("https://www.iam.gov.sa/authservice/userauthservice?lang=ar");
}

/*الوصول للدواء*/
let c1=document.getElementsByName('.c1');
let c2=document.querySelector('.c2');
let c3=document.querySelector('.c3');

function open_med(){
    window.open('medicine1.html'); 
}
c1.addEventListener("click", open_med);
c2.addEventListener("click", open_med);
c3.addEventListener("click", open_med);

