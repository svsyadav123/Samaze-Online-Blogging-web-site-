// =====================================
// AUTH CHECK (Protect Page)
// =====================================
document.addEventListener("DOMContentLoaded", async function () {
    try {
        await account.get();
        initializeHome();
    } catch (error) {
        window.location.href = "login.html";
    }
});



// =====================================
// INITIALIZE HOME
// =====================================
function initializeHome() {

    // =========================
    // Sidebar Page Loader
    // =========================
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

    // =========================
    // Logout
    // =========================
    const logoutBtn = document.getElementById("logout");

    if (logoutBtn) {
        logoutBtn.addEventListener("click", async function () {
            const confirmLogout = confirm("Do you really want to log out?");
            if (!confirmLogout) return;

            try {
                await account.deleteSession("current");
                window.location.href = "login.html";
            } catch (error) {
                alert("Logout failed");
                console.error(error);
            }
        });
    }

    // =========================
    // Post Modal
    // =========================
    const postBtn = document.getElementById("sidebar-post");
    const modal = document.getElementById("postModal");

    if (postBtn && modal) {
        postBtn.addEventListener("click", function (e) {
            e.preventDefault();
            modal.style.display = "flex";
        });
    }

    // =========================
    // Auto Load Home Page
    // =========================
    loadPage("Pages/home-content.html");
}


// =====================================
// LOAD PAGE FUNCTION
// =====================================
function loadPage(path) {
    const mainContent = document.getElementById("mainContent");

    if (!mainContent) return;

    fetch(path)
        .then(res => res.text())
        .then(data => {
            mainContent.innerHTML = data;
        })
        .catch(err => console.error("Error loading page:", err));
}


// =====================================
// CLOSE MODAL
// =====================================
function closePostModal() {
    const modal = document.getElementById("postModal");
    if (modal) {
        modal.style.display = "none";
    }
}


// =====================================
// POST CLICK HANDLER (Delegation)
// =====================================
document.addEventListener("click", function (e) {
    const post = e.target.closest(".post");

    if (post) {
        const postId = post.getAttribute("data-post-id");
        if (postId) {
            openPost(postId);
        }
    }
});


// =====================================
// OPEN SINGLE POST
// =====================================
function openPost(postId) {
    fetch("Pages/post-detail.html")
        .then(res => res.text())
        .then(data => {
            const mainContent = document.getElementById("mainContent");
            if (!mainContent) return;

            mainContent.innerHTML = data;

            setTimeout(() => {
                loadPostData(postId);
            }, 50);
        })
        .catch(err => console.error("Error loading post:", err));
}


// =====================================
// LOAD POST DATA
// =====================================
function loadPostData(postId) {
    const postContent = document.getElementById("postContent");
    if (!postContent) return;

    const posts = {
        "1": "Just finished redesigning my portfolio website!",
        "2": "Exploring the beautiful mountains this weekend.",
        "3": "Trending design tools you must try in 2026!"
    };

    postContent.innerText = posts[postId] || "Post content not found.";
}

const client = new Appwrite.Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("698d893400107bdbaf22");

const account = new Appwrite.Account(client);

async function checkUser() {
  try {
    const user = await account.get();
    console.log("Logged in user:", user);
  } catch (error) {
    window.location.href = "login.html";
  }
}

