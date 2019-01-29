var BASE_URL = "/api/"
var docker_endpoint = "http://aca6342e.ngrok.io/execute"
console.log(`

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XX                                                                          XX
XX   MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM   XX
XX   MMMMMMMMMMMMMMMMMMMMMssssssssssssssssssssssssssMMMMMMMMMMMMMMMMMMMMM   XX
XX   MMMMMMMMMMMMMMMMss'''                          '''ssMMMMMMMMMMMMMMMM   XX
XX   MMMMMMMMMMMMyy''                                    ''yyMMMMMMMMMMMM   XX
XX   MMMMMMMMyy''                                            ''yyMMMMMMMM   XX
XX   MMMMMy''                                                    ''yMMMMM   XX
XX   MMMy'                                                          'yMMM   XX
XX   Mh'                                                              'hM   XX
XX   -                                                                  -   XX
XX                                                                          XX
XX   ::                                                                ::   XX
XX   MMhh.        ..hhhhhh..                      ..hhhhhh..        .hhMM   XX
XX   MMMMMh   ..hhMMMMMMMMMMhh.                .hhMMMMMMMMMMhh..   hMMMMM   XX
XX   ---MMM .hMMMMdd:::dMMMMMMMhh..        ..hhMMMMMMMd:::ddMMMMh. MMM---   XX
XX   MMMMMM MMmm''      'mmMMMMMMMMyy.  .yyMMMMMMMMmm'      ''mmMM MMMMMM   XX
XX   ---mMM ''             'mmMMMMMMMM  MMMMMMMMmm'             '' MMm---   XX
XX   yyyym'    .              'mMMMMm'  'mMMMMm'              .    'myyyy   XX
XX   mm''    .y'     ..yyyyy..  ''''      ''''  ..yyyyy..     'y.    ''mm   XX
XX           MN    .sMMMMMMMMMss.   .    .   .ssMMMMMMMMMs.    NM           XX
XX           N\`    MMMMMMMMMMMMMN   M    M   NMMMMMMMMMMMMM    \`N           XX
XX            +  .sMNNNNNMMMMMN+   \`N    N\`   +NMMMMMNNNNNMs.  +            XX
XX              o+++     ++++Mo    M      M    oM++++     +++o              XX
XX                                oo      oo                                XX
XX           oM                 oo          oo                 Mo           XX
XX         oMMo                M              M                oMMo         XX
XX       +MMMM                 s              s                 MMMM+       XX
XX      +MMMMM+            +++NNNN+        +NNNN+++            +MMMMM+      XX
XX     +MMMMMMM+       ++NNMMMMMMMMN+    +NMMMMMMMMNN++       +MMMMMMM+     XX
XX     MMMMMMMMMNN+++NNMMMMMMMMMMMMMMNNNNMMMMMMMMMMMMMMNN+++NNMMMMMMMMM     XX
XX     yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMy     XX
XX   m  yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMy  m   XX
XX   MMm yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMy mMM   XX
XX   MMMm .yyMMMMMMMMMMMMMMMM     MMMMMMMMMM     MMMMMMMMMMMMMMMMyy. mMMM   XX
XX   MMMMd   ''''hhhhh       odddo          obbbo        hhhh''''   dMMMM   XX
XX   MMMMMd             'hMMMMMMMMMMddddddMMMMMMMMMMh'             dMMMMM   XX
XX   MMMMMMd              'hMMMMMMMMMMMMMMMMMMMMMMh'              dMMMMMM   XX
XX   MMMMMMM-               ''ddMMMMMMMMMMMMMMdd''               -MMMMMMM   XX
XX   MMMMMMMM                   '::dddddddd::'                   MMMMMMMM   XX
XX   MMMMMMMM-                                                  -MMMMMMMM   XX
XX   MMMMMMMMM                                                  MMMMMMMMM   XX
XX   MMMMMMMMMy                                                yMMMMMMMMM   XX
XX   MMMMMMMMMMy.                                            .yMMMMMMMMMM   XX
XX   MMMMMMMMMMMMy.                                        .yMMMMMMMMMMMM   XX
XX   MMMMMMMMMMMMMMy.                                    .yMMMMMMMMMMMMMM   XX
XX   MMMMMMMMMMMMMMMMs.                                .sMMMMMMMMMMMMMMMM   XX
XX   MMMMMMMMMMMMMMMMMMss.           ....           .ssMMMMMMMMMMMMMMMMMM   XX
XX   MMMMMMMMMMMMMMMMMMMMNo         oNNNNo         oNMMMMMMMMMMMMMMMMMMMM   XX
XX                                                                          XX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    .o88o.                               o8o                .
    888 \`"                               \`"'              .o8
   o888oo   .oooo.o  .ooooo.   .ooooo.  oooo   .ooooo.  .o888oo oooo    ooo
    888    d88(  "8 d88' \`88b d88' \`"Y8 \`888  d88' \`88b   888    \`88.  .8'
    888    \`"Y88b.  888   888 888        888  888ooo888   888     \`88..8'
    888    o.  )88b 888   888 888   .o8  888  888    .o   888 .    \`888'
   o888o   8""888P' \`Y8bod8P' \`Y8bod8P' o888o \`Y8bod8P'   "888"      d8'
                                                                .o...P'
                                                                \`XER0'


`);

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
                    console.log(data)
                    if (data.success)
                        alert("User created successfully")
                    else
                        alert("User creation failed")
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
            editor.session.setValue("if _name_ == '_main_': \n\t# Write your code here\n")
            editor.session.setMode("ace/mode/python")
            editor.gotoLine(3)
        }

    });
})

// {
//     challengeResults:[
//         {
//             testCaseNumber: int,
//             success: bool,
//             !if not success errorMessage: string
//         }
//     ]
// }


function submitCode() {
    if ($("#code-status").length == 0) {
        $("#code-editor").after("<h3 class='ml-5 pt-4 text-secondary code-status-text' id='code-status'></h3>")
    }
    var status = document.getElementById("code-status")
    status.innerHTML = "Uploading"
    setTimeout(() => {
        status.innerHTML = "Processing ... "
    }, 1000)
    var userCode = editor.getValue();
    var language = document.getElementById("languageSelector").value
    $.ajax({
        method: "post",
        url: docker_endpoint + "/1",
        data: {
            script: userCode,
            language: language === "C" ? "C" : "PYTHON"
        },
        success: function (data) {
            status.innerHTML = "Done"
            if (data.challengeResults.length > 0 && data.challengeResults != null) {
                var content = "<div class='row ml-5 mt-3' id='code-results'><div class='col-3'><div class='nav flex-column nav-pills' id='v-pills-tab' role='tablist' aria-orientation='vertical'>";
                data.challengeResults.forEach(element => {
                    if (element.testCaseNumber === "1") {
                        content += `<a class="nav-link active ${element.success ? 'bg-success' : element.errorMessage == 'TIMEOUT' ? 'bg-timeout':'bg-danger'}" id='v-pills-${element.testCaseNumber}-tab' data-toggle='pill' href='#v-pills-${element.testCaseNumber}' role='tab' aria-controls='v-pills-${element.testCaseNumber}' aria-selected='true' style='font-family:Lato'>Test Case ${element.testCaseNumber}</a>`
                    } else
                        content += `<a class="nav-link active ${element.success ? 'bg-success' : element.errorMessage == 'TIMEOUT' ? 'bg-timeout':'bg-danger'} mt-3" id='v-pills-${element.testCaseNumber}-tab' data-toggle='pill' href='#v-pills-${element.testCaseNumber}' role='tab' aria-controls='v-pills-${element.testCaseNumber}' aria-selected='false' style='font-family:Lato'>Test Case ${element.testCaseNumber}</a>`
                });
                content += "</div></div>"
                content += "<div class='col-9'><div class='tab-content' id='v-pills-tabContent' style='height:40%;width:90%'>"
                data.challengeResults.forEach(element => {
                    if (element.testCaseNumber === "1") {
                        content += `<div class="tab-pane fade show active" id="v-pills-${element.testCaseNumber}" role="tabpanel" aria-labelledby="v-pills-${element.testCaseNumber}-tab">`
                        if (element.success) {
                            content += `<p class='pt-3 ml-4' style='font-family:Lato'>Code was executed successfully. Test case passed.</p></div>`
                        } else {
                            content += `<p class='pt-3 ml-4' style='font-family:Lato'>${element.errorMessage}</p></div>`
                        }
                    } else {
                        content += `<div class="tab-pane fade" id="v-pills-${element.testCaseNumber}" role="tabpanel" aria-labelledby="v-pills-${element.testCaseNumber}-tab">`
                        if (element.success) {
                            content += `<p class='pt-3 ml-4' style='font-family:Lato'>Code was executed successfully. Test case passed.</p></div>`
                        } else {
                            content += `<p class='pt-3 ml-4' style='font-family:Lato'>${element.errorMessage}</p></div>`
                        }
                    }
                });
                content += "</div></div></div>"
                if ($("#code-results").length > 0)
                    $("#code-results").remove()
                $("#code-status").after(content)
                document.getElementById("code-results").scrollIntoView();
            }
            console.log("Submit Code Success", data)
        },
        failure: function (data) {
            console.log("Submit Code Failure b", data)
        }
    });
}