function validateAndSubmit(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phoneNumber = document.getElementById("number").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (phoneNumber === "") {
        alert("Please enter your phone number.");
        return;
    }

    if (!gender) {
        alert("Please select your gender.");
        return;
    }

    alert("Thank you for completing the survey!");
    document.getElementById("survey-form").reset();
}