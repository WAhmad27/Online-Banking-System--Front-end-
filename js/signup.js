debugger
function signup() {
    debugger
    if(document.getElementById("FirstName").value != "" && document.getElementById("LastName").value != "" && document.getElementById("DOB").value != "" && document.getElementById("UserName").value != "null" && document.getElementById("Email").value != "" && document.getElementById("Password").value != "" && document.getElementById("PasswordAgain").value != "")
    {
        var firstName = document.getElementById("FirstName").value;
        var lastName = document.getElementById("LastName").value;
        var dob = document.getElementById("DOB").value;
        var username = document.getElementById("UserName").value;
        var email = document.getElementById("Email").value;
        var password = document.getElementById("Password").value;
        var passwordVerify = document.getElementById("PasswordAgain").value;
        if (password==passwordVerify) 
        {
            if (firstName !=null && lastName!= null && username != null && email != null && password != null)
            {
                alert("Name: " + firstName + " " + lastName + " Date of Birth: " + dob + " Username: " + username + " Email Address: " + email + " Password: " + password);
            }
            else
            {
                window.alert("Incomplete Information! Please enter correct information");
            }
        }
        else
        {
            window.alert("Password does not match");
        }
    }
}