var form = document.getElementById("resume-form");
var resumedisplayelement = document.getElementById("resume-display");
// handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // collect input values
    var name = document.getElementById("name").value;
    var fatherName = document.getElementById("fatherName").value;
    var contactDatail = document.getElementById("contactDatail").value;
    var email = document.getElementById("email").value;
    var NIC = document.getElementById("NIC").value;
    var education = document.getElementById("education").value;
    var skills = document.getElementById("skills").value;
    var experience = document.getElementById("experience").value;
    // generate resume content dynamically
    var resumHTMLelement = "\n<h1><b>Resume</b></h1>\n<h3>Personal Information</h3>\n<p><b>Name:</b>".concat(name, "</p>\n<p><b>fatherName:</b>").concat(fatherName, "</p>\n<p><b>ContactDetail</b>").concat(contactDatail, "</p>\n<p><b>Email:</b>").concat(email, "</p>\n<p><b>NIC:<b/>").concat(NIC, "</b></p>\n\n<h3>Education</h3>\n<p>").concat(education, "</p>\n\n<h3>skills</h3>\n<p>").concat(skills, "</p>\n<h3>Experience</h3>\n<p>").concat(experience, "</p>\n");
    // display the generated  resume 
    if (resumedisplayelement) {
        resumedisplayelement.innerHTML = resumHTMLelement;
    }
    else {
        console.error('the resume display element are missing.');
    }
});
