const studentName = document.getElementById("studentName");
    const course = document.getElementById("course");
    const language = document.getElementById("language");

    const createBtn = document.getElementById("createBtn");

    const profileCard = document.getElementById("profileCard");
    const displayName = document.getElementById("displayName");
    const displayCourse = document.getElementById("displayCourse");
    const displayLanguage = document.getElementById("displayLanguage");
    const skillsList = document.getElementById("skillsList");

    const changeBg = document.getElementById("changeBg");
    const addSkill = document.getElementById("addSkill");
    const removeBtn = document.getElementById("removeBtn");

    // Create Profile
    createBtn.addEventListener("click", function () {

        if (
            studentName.value === "" ||
            course.value === "" ||
            language.value === ""
        ) {
            alert("Please fill in all fields.");
            return;
        }

        // Display information using DOM manipulation
        displayName.textContent = studentName.value;
        displayCourse.textContent = course.value;
        displayLanguage.textContent = language.value;

        // Add the favorite language as the first skill
        skillsList.innerHTML = "";

        const skill = document.createElement("span");
        skill.textContent = language.value;
        skill.classList.add("skill");

        skillsList.appendChild(skill);

        // Show profile card
        profileCard.style.display = "block";
    });

    // Change profile card background
    changeBg.addEventListener("click", function () {
        const colors = [
            "#ffffff",
            "#dff6ff",
            "#fff3cd",
            "#e2f0d9",
            "#f8d7da",
            "#e8dff5"
        ];

        const randomColor =
            colors[Math.floor(Math.random() * colors.length)];

        profileCard.style.backgroundColor = randomColor;
    });

    // Add a new skill
    addSkill.addEventListener("click", function () {
        const newSkill = prompt("Enter a new skill:");

        if (newSkill !== null && newSkill.trim() !== "") {

            const skill = document.createElement("span");

            skill.textContent = newSkill;
            skill.classList.add("skill");

            skillsList.appendChild(skill);
        }
    });

    // Remove profile information
    removeBtn.addEventListener("click", function () {

        displayName.textContent = "";
        displayCourse.textContent = "";
        displayLanguage.textContent = "";

        skillsList.innerHTML = "";

        studentName.value = "";
        course.value = "";
        language.value = "";

        profileCard.style.display = "none";
    });
                               
