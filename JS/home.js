// =========================
// GLOBAL LOAD PAGE FUNCTION
// =========================
function loadPage(path) {
    const mainContent = document.getElementById("mainContent");

    fetch(path)
        .then(res => res.text())
        .then(data => {
            mainContent.innerHTML = data;
        })
        .catch(err => console.error("Error loading page:", err));
}


// =========================
// DOM READY
// =========================
document.addEventListener("DOMContentLoaded", function () {

    const pages = {
        "sidebar-home": "Pages/home-content.html",
        "sidebar-search": "Pages/search.html",
        "sidebar-trending": "Pages/trending.html",
        "sidebar-notifications": "Pages/notification.html",
        "sidebar-bookmarks": "Pages/bookmark.html",
        "sidebar-profile": "Pages/profile.html",
        "sidebar-settings": "Pages/settings.html"
    };

    Object.keys(pages).forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.addEventListener("click", () => {
                loadPage(pages[id]);
            });
        }
    });

    // Logout
    const logoutBtn = document.getElementById("logout");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            if (confirm("Do you really want to log out?")) {
                window.location.href = "login.html";
            }
        });
    }

    // Post Modal
    const postBtn = document.getElementById("sidebar-post");
    const modal = document.getElementById("postModal");

    if (postBtn && modal) {
        postBtn.addEventListener("click", function (e) {
            e.preventDefault();
            modal.style.display = "flex";
        });
    }

    // Auto load home
    loadPage("Pages/home-content.html");
});


// =========================
// CLOSE MODAL
// =========================
function closePostModal() {
    document.getElementById("postModal").style.display = "none";
}


// =========================
// POST CLICK HANDLER (DELEGATION)
// =========================
document.addEventListener("click", function (e) {

    const post = e.target.closest(".post");

    if (post) {
        const postId = post.getAttribute("data-post-id");

        if (postId) {
            openPost(postId);
        }
    }
});


// =========================
// OPEN SINGLE POST
// =========================
function openPost(postId) {

    fetch("Pages/post-detail.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("mainContent").innerHTML = data;
            loadPostData(postId);
        })
        .catch(err => console.error("Error loading post:", err));
}


// =========================
// LOAD POST DATA
// =========================
function loadPostData(postId) {

    const postContent = document.getElementById("postContent");

    if (!postContent) return;

    if (postId === "1") {
        postContent.innerText = "Just finished redesigning my portfolio website!";
    }

    if (postId === "2") {
        postContent.innerText = "Exploring the beautiful mountains this weekend.";
    }
}
if (postId === "3") {
    postContent.innerText = "Trending design tools you must try in 2026!";
}


// post ko open karne ki liye 

// document.addEventListener("DOMContentLoaded", function () {

//     const posts = document.querySelectorAll(".post");

//     posts.forEach(post => {
//         post.addEventListener("click", function (e) {

//             // Prevent open if clicking action buttons
//             if (e.target.closest(".post-actions")) {
//                 e.stopPropagation();
//                 return;
//             }

//             const postId = post.dataset.postId;
//             window.location.href = "post-detail.html?id=" + postId;
//         });
//     });

// });
