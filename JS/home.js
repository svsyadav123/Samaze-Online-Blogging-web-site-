// =========================
// HOME.JS - CLEAN VERSION
// =========================


// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {

    const mainContent = document.getElementById("mainContent");
    const logoutBtn = document.getElementById("logout");
    const postBtn = document.getElementById("sidebar-post");
    const modal = document.getElementById("postModal");

    // -------------------------
    // SIDEBAR PAGE MAPPING
    // -------------------------
    const pages = {
        "sidebar-home": "Pages/home-content.html",
        "sidebar-search": "Pages/search.html",
        "sidebar-trending": "Pages/trending.html",
        "sidebar-notifications": "Pages/notification.html",
        "sidebar-bookmarks": "Pages/bookmark.html",
        "sidebar-profile": "Pages/profile.html",
        "sidebar-settings": "Pages/settings.html"
    };

    // -------------------------
    // LOAD PAGE FUNCTION
    // -------------------------
    function loadPage(path) {
        fetch(path)
            .then(res => res.text())
            .then(data => {
                mainContent.innerHTML = data;
            })
            .catch(err => console.error("Error loading page:", err));
    }

    // -------------------------
    // ADD CLICK LISTENERS TO SIDEBAR
    // -------------------------
    Object.keys(pages).forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.addEventListener("click", () => {
                loadPage(pages[id]);
            });
        }
    });

    // -------------------------
    // LOGOUT BUTTON
    // -------------------------
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            if (confirm("Do you really want to log out?")) {
                window.location.href = "login.html";
            }
        });
    }

    // -------------------------
    // SIDEBAR POST BUTTON (OPEN MODAL)
    // -------------------------
    if (postBtn && modal) {
        postBtn.addEventListener("click", function (e) {
            e.preventDefault();
            modal.style.display = "flex";
        });
    }

    // -------------------------
    // AUTO LOAD HOME PAGE
    // -------------------------
    loadPage(pages["sidebar-home"]);

    // -------------------------
    // POST CLICK HANDLER (DELEGATION)
    // -------------------------
    document.addEventListener("click", function (e) {
        const post = e.target.closest(".post");
        if (post && post.classList.contains("clickable-post")) {
            // Ignore clicks on text to allow selection
            if (e.target.classList.contains("post-text")) return;

            const postId = post.dataset.postId;
            if (postId) openPost(postId);
        }
    });

    // -------------------------
    // CLOSE MODAL
    // -------------------------
    const closeModalBtn = document.querySelector(".close-btn");
    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    // Close modal when clicking outside content
    window.addEventListener("click", e => {
        if (e.target === modal) modal.style.display = "none";
    });

});

// ==========================
// OPEN SINGLE POST
// ==========================
function openPost(postId) {
    const mainContent = document.getElementById("mainContent");

    fetch("Pages/post-detail.html")
        .then(res => res.text())
        .then(data => {
            mainContent.innerHTML = data;

            // Wait a bit for HTML to render
            setTimeout(() => {
                loadPostData(postId);
            }, 50);
        })
        .catch(err => console.error("Error loading post:", err));
}

// ==========================
// LOAD POST DATA
// ==========================
function loadPostData(postId) {
    const postContent = document.getElementById("postContent");
    if (!postContent) return;

    switch (postId) {
        case "1":
            postContent.innerText = "Just finished redesigning my portfolio website!";
            break;
        case "2":
            postContent.innerText = "Exploring the beautiful mountains this weekend.";
            break;
        case "3":
            postContent.innerText = "Trending design tools you must try in 2026!";
            break;
        default:
            postContent.innerText = "Post content not found.";
            break;
    }
}



//for APPWRITE

// import client from '../src/appwrite.js';
// import { Account, Databases } from 'appwrite';

// const account = new Account(client);
// const db = new Databases(client); // optional for posts fetching
// const usernameEl = document.getElementById("username");
// const mainContent = document.getElementById("mainContent");
// const logoutBtn = document.getElementById("logout");
// const postBtn = document.getElementById("sidebar-post");
// const modal = document.getElementById("postModal");

// -------------------------
// 1️⃣ CHECK IF LOGGED IN & LOAD HOME PAGE
// -------------------------
// account.get()
//     .then(user => {
//         console.log("Logged in user:", user);
//         if(usernameEl) usernameEl.innerText = `Welcome, ${user.name}`;

//         // Now load the home page
//         loadPage(pages["sidebar-home"]);
//     })
//     .catch(err => {
//         console.log("No active session, redirecting...");
//         window.location.href = "./index.html";
//     });

// // -------------------------
// // SIDEBAR PAGE MAPPING
// // -------------------------
// const pages = {
//     "sidebar-home": "Pages/home-content.html",
//     "sidebar-search": "Pages/search.html",
//     "sidebar-trending": "Pages/trending.html",
//     "sidebar-notifications": "Pages/notification.html",
//     "sidebar-bookmarks": "Pages/bookmark.html",
//     "sidebar-profile": "Pages/profile.html",
//     "sidebar-settings": "Pages/settings.html"
// };

// // -------------------------
// // LOAD PAGE FUNCTION
// // -------------------------
// function loadPage(path) {
//     fetch(path)
//         .then(res => res.text())
//         .then(data => mainContent.innerHTML = data)
//         .catch(err => console.error("Error loading page:", err));
// }

// // -------------------------
// // ADD CLICK LISTENERS TO SIDEBAR
// // -------------------------
// Object.keys(pages).forEach(id => {
//     const btn = document.getElementById(id);
//     if (btn) {
//         btn.addEventListener("click", () => loadPage(pages[id]));
//     }
// });

// // -------------------------
// // LOGOUT BUTTON
// // -------------------------
// if (logoutBtn) {
//     logoutBtn.addEventListener("click", () => {
//         if(confirm("Do you really want to log out?")) {
//             account.deleteSession('current')
//                 .then(() => window.location.href = "./index.html")
//                 .catch(err => console.error(err));
//         }
//     });
// }

// // -------------------------
// // SIDEBAR POST BUTTON (OPEN MODAL)
// // -------------------------
// if (postBtn && modal) {
//     postBtn.addEventListener("click", e => {
//         e.preventDefault();
//         modal.style.display = "flex";
//     });
// }

// // -------------------------
// // POST CLICK HANDLER (DELEGATION)
// // -------------------------
// document.addEventListener("click", e => {
//     const post = e.target.closest(".post");
//     if (post && post.classList.contains("clickable-post")) {
//         if(e.target.classList.contains("post-text")) return;
//         const postId = post.dataset.postId;
//         if(postId) openPost(postId);
//     }
// });

// // -------------------------
// // CLOSE MODAL
// // -------------------------
// const closeModalBtn = document.querySelector(".close-btn");
// if (closeModalBtn) {
//     closeModalBtn.addEventListener("click", () => {
//         modal.style.display = "none";
//     });
// }
// window.addEventListener("click", e => {
//     if(e.target === modal) modal.style.display = "none";
// });

// // -------------------------
// // OPEN SINGLE POST
// // -------------------------
// function openPost(postId) {
//     fetch("Pages/post-detail.html")
//         .then(res => res.text())
//         .then(data => {
//             mainContent.innerHTML = data;
//             setTimeout(() => loadPostData(postId), 50);
//         })
//         .catch(err => console.error("Error loading post:", err));
// }

// // -------------------------
// // LOAD POST DATA
// // -------------------------
// function loadPostData(postId) {
//     const postContent = document.getElementById("postContent");
//     if(!postContent) return;
//     switch(postId) {
//         case "1": postContent.innerText = "Just finished redesigning my portfolio website!"; break;
//         case "2": postContent.innerText = "Exploring the beautiful mountains this weekend."; break;
//         case "3": postContent.innerText = "Trending design tools you must try in 2026!"; break;
//         default: postContent.innerText = "Post content not found."; break;
//     }
// }
