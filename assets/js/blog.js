// Retrieve posts from localStorage and display them
document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('postsContainer');
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    if (posts.length === 0) {
        postsContainer.innerHTML = '<p>No posts available.</p>';
    } else {
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <p><em>By ${post.username}</em></p>
            `;
            postsContainer.appendChild(postElement);
        });
    }
});

// Dark mode toggle
document.getElementById('darkModeToggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
});
