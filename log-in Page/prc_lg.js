const forms = document.querySelector(".forms"),
pass = document.querySelectorAll(".eye-icon"),
links = document.querySelectorAll(".link");


//for password input-box
pass.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {

let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
  pwFields.forEach(password => {


        if(password.type === "password"){
            password.type = "text";

            eyeIcon.classList.replace("bx-hide", "bx-show"); //for eye-icon changing
            return;
         }
        password.type="password";

        eyeIcon.classList.replace("bx-show", "bx-hide");//for eye-icon changing

    })
})
})


//for signup and login page toggling
links.forEach(link => {
    link.addEventListener("click", () => {
        forms.classList.toggle("show-signup")  ; 
    })

})



// // https://www.codingnepalweb.com/login-signup-form-html-css-javascript/