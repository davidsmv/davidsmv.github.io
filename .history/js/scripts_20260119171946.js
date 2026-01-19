// ============================================
// LOGIC SECTION - DO NOT EDIT UNLESS NECESSARY
// ============================================

// Initialize Modal once when the script loads
document.addEventListener('DOMContentLoaded', () => {
    // Inject Modal HTML into the body
    const modalHtml = `
        <div id="previewModal" class="modal">
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <div id="modalBody" class="markdown-body">
                    Loading...
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);

    // Close modal logic
    const modal = document.getElementById("previewModal");
    const span = document.getElementsByClassName("close-modal")[0];

    if (span) {
        span.onclick = function() {
            modal.style.display = "none";
        }
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

function openPreview(readmeUrl) {
    const modal = document.getElementById("previewModal");
    const modalBody = document.getElementById("modalBody");
    
    if (!modal || !modalBody) return;
    
    modal.style.display = "block";
    modalBody.innerHTML = "Loading preview...";

    fetch(readmeUrl)
        .then(response => {
            if (!response.ok) throw new Error("Could not fetch README");
            return response.text();
        })
        .then(text => {
            // Using marked.js to convert markdown to HTML
            // Check if marked is available
            if (typeof marked !== 'undefined') {
                 modalBody.innerHTML = marked.parse(text);
            } else {
                 modalBody.innerHTML = "<p>Error: Markdown parser not loaded.</p><pre>" + text + "</pre>";
            }
        })
        .catch(err => {
            modalBody.innerHTML = `<p>Error loading preview: ${err.message}</p>`;
        });
}

function renderProjects(containerId, limit = null) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Use projectsData from data/projects.js
    const dataToRender = limit ? projectsData.slice(0, limit) : projectsData;

    container.innerHTML = dataToRender.map(project => {
        let previewButton = '';
        if (project.readmeUrl) {
            previewButton = `<button onclick="openPreview('${project.readmeUrl}')" style="margin-top: 10px; padding: 5px 10px; background: #eee; border: none; border-radius: 4px; cursor: pointer;">Preview Project</button>`;
        }

        return `
        <div class="project-card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" class="project-link">${project.linkText} &rarr;</a>
            <br>
            ${previewButton}
        </div>
    `}).join('');
}

function renderBlogs(containerId, limit = null) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Use blogData from data/blogs.js
    const dataToRender = limit ? blogData.slice(0, limit) : blogData;

    container.innerHTML = dataToRender.map(post => `
        <div class="list-item">
            <div>
                <h3>${post.title}</h3>
                <p>${post.description}</p>
                <small>Published on ${post.date}</small>
            </div>
            <a href="${post.link}" target="_blank">${post.linkText} <i class="fas fa-external-link-alt"></i></a>
        </div>
    `).join('');
}

function renderBooks(containerId, limit = null) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Use bookData from data/books.js
    const dataToRender = limit ? bookData.slice(0, limit) : bookData;

    container.innerHTML = dataToRender.map(book => {
        if (book.goodreadsHtml) {
            return `
                <div class="list-item" style="display: block; overflow: auto;">
                    ${book.goodreadsHtml}
                </div>
            `;
        }
        return `
            <div class="list-item">
                <div>
                    <h3>${book.title}</h3>
                    <p><strong>Author:</strong> ${book.author}</p>
                    <p><em>"${book.review}"</em></p>
                    ${book.rating ? `<p><strong>Rating:</strong> ${book.rating}</p>` : ''}
                </div>
                <a href="${book.link}" target="_blank">${book.linkText} <i class="fas fa-book-open"></i></a>
            </div>
        `;
    }).join('');
}
