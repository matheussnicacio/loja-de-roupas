var formSignin = document.querySelector('#signin')
var formSignup = document.querySelector('#signup')
var btnColor = document.querySelector('.btnColor')

document.querySelector('#btnSignin').addEventListener('click', () => {
  formSignin.style.left = "25px";
  formSignup.style.left = "450px";
  btnColor.style.left = "0px"; // Alinha a barra para "Entrar"
  btnColor.style.width = "100px"; // Ajusta o tamanho para "Entrar"
});

document.querySelector('#btnSignup').addEventListener('click', () => {
  formSignin.style.left = "-450px";
  formSignup.style.left = "25px";
  btnColor.style.left = "125px"; // Alinha a barra para "Inscrever-se"
  btnColor.style.width = "145px"; // Ajusta o tamanho para "Inscrever-se"
});
