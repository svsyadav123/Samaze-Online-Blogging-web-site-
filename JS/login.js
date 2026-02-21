// document.addEventListener("DOMContentLoaded", () => {
//     import client from './src/appwrite.js';
//     import { Account } from 'appwrite';

//     const account = new Account(client);
//     const authStatus = document.getElementById("authStatus");

//     const loginForm = document.getElementById("loginForm");
//     const signupForm = document.getElementById("signupForm");
//     const showSignup = document.getElementById("showSignup");
//     const showLogin = document.getElementById("showLogin");

//     // Toggle forms
//     showSignup.addEventListener("click", () => {
//         loginForm.classList.remove("active");
//         signupForm.classList.add("active");
//         authStatus.innerText = "";
//     });

//     showLogin.addEventListener("click", () => {
//         signupForm.classList.remove("active");
//         loginForm.classList.add("active");
//         authStatus.innerText = "";
//     });

//     // Signup & Login logic here...
// });


//     // SIGNUP
//     signupForm.addEventListener("submit", async (e) => {
//         e.preventDefault();

//         const name = document.getElementById("signupName").value;
//         const email = document.getElementById("signupEmail").value;
//         const password = document.getElementById("signupPassword").value;

//         try {
//             await account.create(ID.unique(), email, password, name);
//             await account.createEmailSession(email, password);
//             alert("Signup Successful 🚀");
//             window.location.href = "home.html";
//         } catch (error) {
//             alert(error.message);
//         }
//     });
// // 