document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      let isValid = true;

      // Clear previous errors
      document.querySelectorAll(".error").forEach(el => el.textContent = "");

      const firstName = document.getElementById("firstName").value.trim();
      const lastName = document.getElementById("lastName").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      const contact = document.getElementById("contactNumber").value.trim();
      const supportReason = document.getElementById("supportReason").value.trim();

      const sex = document.querySelector('input[name="sex"]:checked');

      if (!firstName) {
        isValid = false;
        document.getElementById("errorFirstName").textContent = "required";
      }

      if (!lastName) {
        isValid = false;
        document.getElementById("errorLastName").textContent = "required";
      }

      if (!sex) {
        isValid = false;
        document.getElementById("errorSex").textContent = "required";
      }

      if (!email) {
        isValid = false;
        document.getElementById("errorEmail").textContent = "required";
      }

      if (!password) {
        isValid = false;
        document.getElementById("errorPassword").textContent = "required";
      }

      if (!supportReason) {
        isValid = false;
        document.getElementById("errorSupportReason").textContent = "required";
      }

      if (isValid) {
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
        localStorage.setItem("email", email);
        localStorage.setItem("sex", sex.value);
        localStorage.setItem("supportReason", supportReason);
        window.location.href = "proj_profile_lastname.html";
      }
    });
  }

  // Profile Page Rendering
  const profileFirstName = document.getElementById("profileFirstName");
  if (profileFirstName) {
    document.getElementById("profileFirstName").textContent = localStorage.getItem("firstName");
    document.getElementById("profileLastName").textContent = localStorage.getItem("lastName");
    document.getElementById("profileEmail").textContent = localStorage.getItem("email");
    document.getElementById("profileSex").textContent = localStorage.getItem("sex");
    document.getElementById("profileSupportReason").textContent = localStorage.getItem("supportReason");
  }
});
