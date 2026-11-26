
// 1. DARK / LIGHT THEME

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

});

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}


// 2. FORM VALIDATION

const form = document.getElementById("detailsForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    let valid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    const gender = document.querySelector(
        'input[name="gender"]:checked'
    );

    // Clear old errors

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("genderError").textContent = "";
    document.getElementById("formMessage").textContent = "";

    // Name validation

    if (name === "") {
        document.getElementById("nameError").textContent =
            "Please enter your name";
        valid = false;
    }

    // Email validation

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent =
            "Please enter a valid email";
        valid = false;
    }

    // Phone validation

    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").textContent =
            "Enter a valid 10 digit phone number";
        valid = false;
    }

    // Gender validation

    if (!gender) {
        document.getElementById("genderError").textContent =
            "Please select your gender";
        valid = false;
    }

    // Submit success

    if (valid) {

        document.getElementById("formMessage").textContent =
            "Form submitted successfully!";

        // Form details will remain.
        // No form.reset() here.
    }

});


// 3. RESET CONFIRMATION

form.addEventListener("reset", function (event) {

    const confirmReset = confirm(
        "Are you sure you want to clear all details?"
    );

    if (!confirmReset) {
        event.preventDefault();
        return;
    }

    setTimeout(function () {

        document.getElementById("nameError").textContent = "";
        document.getElementById("emailError").textContent = "";
        document.getElementById("phoneError").textContent = "";
        document.getElementById("genderError").textContent = "";
        document.getElementById("formMessage").textContent = "";

        document.getElementById("charCount").textContent = "0 / 200";

    }, 0);

});


// 4. ADDRESS CHARACTER COUNTER

const address = document.getElementById("address");
const charCount = document.getElementById("charCount");

address.addEventListener("input", function () {

    charCount.textContent =
        address.value.length + " / 200";

});


// 5. ADD NEW SKILL

const skillInput = document.getElementById("skillInput");
const skillList = document.getElementById("skillList");
const addSkillBtn = document.getElementById("addSkillBtn");

addSkillBtn.addEventListener("click", function () {

    const skill = skillInput.value.trim();

    if (skill === "") {
        alert("Please enter a skill");
        return;
    }

    const existingSkills = Array.from(skillList.children).map(
        item => item.textContent.toLowerCase()
    );

    if (existingSkills.includes(skill.toLowerCase())) {
        alert("This skill already exists");
        return;
    }

    const li = document.createElement("li");

    li.textContent = skill;

    skillList.appendChild(li);

    skillInput.value = "";

});


// 6. CURRENT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();


// 7. READ MORE / READ LESS

function toggleRead(id, button) {

    const text = document.getElementById(id);

    text.classList.toggle("expanded");

    if (text.classList.contains("expanded")) {

        button.textContent = "Read Less";

    } else {

        button.textContent = "Read More";

    }

}
