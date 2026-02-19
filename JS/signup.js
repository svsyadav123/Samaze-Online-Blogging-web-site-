document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("signupForm");

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        try {
            await account.create(
                ID.unique(),
                email,
                password,
                name
            );

            alert("Signup successful!");
            window.location.href = "login.html";

        } catch (error) {
            alert(error.message);
        }
    });

});
