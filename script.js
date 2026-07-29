const uploadBtn = document.getElementById("uploadBtn");
const resumeFile = document.getElementById("resumeFile");
const uploadMessage = document.getElementById("uploadMessage");

uploadBtn.addEventListener("click", function () {

    if (resumeFile.files.length === 0) {

        uploadMessage.innerText = "Please select your resume first.";

        uploadMessage.style.color = "#ff5c6c";

    } else {

        const file = resumeFile.files[0];

        uploadMessage.innerText =
            file.name + " selected successfully!";

        uploadMessage.style.color = "#26d477";

    }

});