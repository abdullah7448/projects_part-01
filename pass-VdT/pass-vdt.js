const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
const requirementList = document.querySelectorAll(".requirement-list li");

// An array of password requirements with corresponding 
// regular expressions and index of the requirement list item
const requirements = [
    { regex: /.{8,}/, index: 0 }, // Minimum of 8 characters
    { regex: /[0-9]/, index: 1 }, // At least one number
    { regex: /[a-z]/, index: 2 }, // At least one lowercase letter
    { regex: /[^A-Za-z0-9]/, index: 3 }, // At least one special character
    { regex: /[A-Z]/, index: 4 }, // At least one uppercase letter
]

passwordInput.addEventListener("keyup", item =>{


    requirements.forEach(e =>{

        const isValid=e.regex.test(item.target.value);
        const requirementItem = requirementList[e.index];

        if(isValid){
                        requirementItem.classList.add("valid");
                        requirementItem.firstElementChild.className = "fa-solid fa-check";
                    } else {
                        requirementItem.classList.remove("valid");
                        requirementItem.firstElementChild.className = "fa-solid fa-circle";
                    }


    })
       
})


eyeIcon.addEventListener("click", ()=>{
           if(passwordInput.type === "password"){
                  passwordInput.type = "text";
           }
           else{
            passwordInput.type= "password"
           }
})


