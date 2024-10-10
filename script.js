document.addEventListener("DOMContentLoaded",function(){

    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");
    let isValid ;
    let messages ;

    form.addEventListener("submit", function(event){
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        isValid = true;
        messages = [];

        if(username.length < 3){
            isValid = false;
            messages.push("Username should be at least 3 characters long.");
        }
        if(email === ''){
          isValid = false;
          messages.push("Email is required.");
        }else if(!email.includes('@') || !email.includes('.')){
            isValid = false;
            messages.push("Invalid email format.");
        }

        if(password.length < 8){
            isValid = false;
            messages.push("Password should be at least 8 characters long.");
        }
        
        feedbackDiv.style.display = 'block';
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = '#28a745';
        }else{
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545';
        }

    });

}); 