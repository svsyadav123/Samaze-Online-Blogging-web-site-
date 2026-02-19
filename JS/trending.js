// Sample trending posts
const trendingPostsData = [
    {
        id: 1,
        title: "Trending design tools you must try in 2026!",
        author: "Alex Morgan",
        avatar: "https://i.pravatar.cc/40?img=5",
        time: "1d ago",
        content: "Full blog content of trending design tools in 2026. Learn about the latest in design technology, AI tools, and productivity tips.",
        comments: [
            { user: "John", text: "Amazing post!" },
            { user: "Sarah", text: "Loved the tips!" }
        ]
    },
    {
        id: 2,
        title: "AI is changing the future of web development 🚀",
        author: "TechWorld",
        avatar: "https://i.pravatar.cc/40?img=6",
        time: "2h ago",
        content: "AI in web development is revolutionizing the way websites are built. Learn how to integrate AI-powered tools into your workflow.",
        comments: []
    },
    {
        id: 3,
        title: "Welcome to the Trending section 🔥",
        author: "Samaze Official",
        avatar: "https://i.pravatar.cc/40?img=7",
        time: "5h ago",
        content: "We bring you the hottest topics and posts from the Samaze community. Stay updated with what's trending now!",
        comments: []
    }
];

// Load trending posts
function loadTrendingPosts() {
    const container = document.querySelector('.posts-container');
    container.innerHTML = '';
    trendingPostsData.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.className = 'post clickable-post';
        postDiv.innerHTML = `
            <div class="post-header">
                <img src="${post.avatar}" class="avatar">
                <div>
                    <div class="username">${post.author}</div>
                    <div class="handle">@${post.author.toLowerCase().replace(' ', '_')} · ${post.time}</div>
                </div>
            </div>
            <div class="post-content">
                ${post.title}
            </div>
            <div class="post-actions">
                <button onclick="likePost(this)">❤️ Like</button>
            </div>
        `;
        postDiv.addEventListener('click', () => openTrendingPostDetail(post));
        container.appendChild(postDiv);
    });
}

// Open full blog-style post
function openTrendingPostDetail(post) {
    const container = document.querySelector('.posts-container');
    container.innerHTML = `
        <div class="post">
            <div class="post-header">
                <img src="${post.avatar}" class="avatar">
                <div>
                    <div class="username">${post.author}</div>
                    <div class="handle">@${post.author.toLowerCase().replace(' ', '_')} · ${post.time}</div>
                </div>
            </div>

            <div class="post-content" style="margin-top:10px;">
                <h2>${post.title}</h2>
                <p>${post.content}</p>
            </div>

            <div class="post-actions" style="margin-top:10px;">
                <button onclick="likePost(this)">❤️ Like</button>
                <button onclick="bookmarkPost(this)">🔖 Bookmark</button>
                <button onclick="focusComment(this)">💬 Comment</button>
            </div>

            <div class="comments-section" style="margin-top:10px;">
                ${post.comments.map(c => `<p><strong>${c.user}</strong>: ${c.text}</p>`).join('')}
            </div>

            <div class="add-comment" style="margin-top:10px;">
                <input type="text" placeholder="Add a comment">
                <button onclick="addComment(this)">Post</button>
            </div>
        </div>
    `;
}

// Actions
function likePost(btn) { alert('Liked!'); }
function bookmarkPost(btn) { alert('Bookmarked!'); }
function focusComment(btn) { btn.closest('.post').querySelector('input').focus(); }
function addComment(btn){
    const input = btn.closest('.post').querySelector('input');
    if(!input.value) return;
    const comments = btn.closest('.post').querySelector('.comments-section');
    comments.innerHTML += `<p><strong>You</strong>: ${input.value}</p>`;
    input.value = '';
}

// Initial load
document.addEventListener('DOMContentLoaded', loadTrendingPosts);

document.getElementById('sidebar-trending').addEventListener('click', () => {
    loadTrendingPosts(); // populates the middle feed
});
