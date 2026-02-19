document.addEventListener("DOMContentLoaded", function () {

    // ==============================
    // FORM TOGGLE (Login ↔ Signup)
    // ==============================

    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    const showSignup = document.getElementById("showSignup");
    const showLogin = document.getElementById("showLogin");

    if (showSignup) {
        showSignup.addEventListener("click", function () {
            loginForm.classList.remove("active");
            signupForm.classList.add("active");
        });
    }

    if (showLogin) {
        showLogin.addEventListener("click", function () {
            signupForm.classList.remove("active");
            loginForm.classList.add("active");
        });
    }


    // ==============================
    // LOGIN
    // ==============================

    if (loginForm) {
       loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  try {
    await account.createEmailSession(email, password);

    alert("Login Successful ✅");
    window.location.href = "home.html";

  } catch (error) {
    alert(error.message);
  }
});

    }


    // ==============================
    // SIGNUP
    // ==============================

    if (signupForm) {
        signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("signup-name").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  try {
    // Create Account
    await account.create(
      ID.unique(),
      email,
      password,
      name
    );

    // Auto Login
    await account.createEmailSession(email, password);

    alert("Signup Successful 🚀");
    window.location.href = "home.html";

  } catch (error) {
    alert(error.message);
  }
});

    }

});
