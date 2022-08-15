function login() {
    if(document.getElementById("UserName").value != "" || document.getElementById("Password").value != "")
    {
        var username = document.getElementById("UserName").value;
        var password = document.getElementById("Password").value;
        if (username != null && password != null)
        {
            console.log("LOG : USERNAME AND PASSWORD NOT NULL")
            if (username.length > 8 || password.length > 8) 
            {
                console.log("LOG : USERNAME AND PASSWORD GREATER THAN 8")
                alert("Username:  " + username + " Password: " + password);
            }
            else
            {
                console.log("LOG : USERNAME AND PASSWORD NOT GREATER THAN 8")
                alert("Please enter correct Username and Password");
            }
        }
        else
        {
            console.log("LOG : USERNAME AND PASSWORD ARE NULL")
            alert("Incomplete Information! Please enter correct information");
        }
    }
}