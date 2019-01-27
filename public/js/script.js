var BASE_URL = "/api/"

function registerUser() {
    console.log("\n registerUser")
    $("#registerForm").off("submit").on("submit", function (value) {
        value.preventDefault();
        console.log("registerForm", "Submitted")
        var email = document.getElementById("signupEmail").value;
        var username = document.getElementById("signupUsername").value;
        var password = document.getElementById("signupPassword").value;
        if (email && username && password) {
            $.ajax({
                method: "post",
                url: BASE_URL + "account/register",
                data: {
                    username: username,
                    email: email,
                    password: password
                },
                success: function (data) {
                    console.log("DATA", data)
                },
                failure: function (data) {
                    console.log("DATA b", data)
                }
            });
        }
        return false;
    })
    return false;
}

}