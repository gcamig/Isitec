document.addEventListener("DOMContentLoaded", function() {
  const resetForm = document.querySelector(".reset-password-form");
  const loginForm = document.querySelector(".login-form");
  const btn = document.querySelector("#toggle-form");
  const toggleText = document.querySelector("#toggle-area-text");
  
  btn.addEventListener("click", function(){
    console.log(window.screen.refreshRate);
    resetForm.classList.toggle("active");
    loginForm.classList.toggle("active");
    resetForm.classList.toggle("inactive");
    loginForm.classList.toggle("inactive");
    if (resetForm.classList.contains("active")) {
      btn.textContent = "Iniciar sesión";
      toggleText.textContent = "Volver al incio. ";
    } else {
      btn.textContent = "Recuperar";
      toggleText.textContent = "¿Has olvidado la contraseña? ";
    } 
  })
})
