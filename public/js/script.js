var BASE_URL = "/api/"
var docker_endpoint = "http://aca6342e.ngrok.io/execute"

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

$(() => {
    $('select#languageSelector').on('change', function (e) {
        if (this.value === "C") {
            editor.session.setValue('#include <stdio.h>\nint main(){\n//Your code here\nreturn 0;\n}')
            editor.session.setMode("ace/mode/c_cpp")
            editor.gotoLine(3)
        } else {
            editor.session.setValue("if _name_ == '_main_': \n# Write your code here\n")
            editor.session.setMode("ace/mode/python")
            editor.gotoLine(3)
        }

    });
})

function submitCode() {
    // console.log(id)
    var userCode = editor.getValue();
    $.ajax({
        method: "post",
        url: docker_endpoint+"/1",
        data: {
            script: userCode,
            language: "C"
        },
        success: function (data) {
            console.log("Submit Code Success", data)
        },
        failure: function (data) {
            console.log("Submit Code Failure b", data)
        }
    });
}