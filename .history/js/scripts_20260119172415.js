// ============================================
// LOGIC SECTION - DO NOT EDIT UNLESS NECESSARY
// ============================================

// Helper function to fetch and render README
async function loadReadme(url, elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to load");
        const text = await response.text();
        
        // Use marked to parse, or fallback to text
        if (typeof marked !== 'undefined') {
            element.innerHTML = marked.parse(text);
        } else {
            element.innerText = text;
        }
    } catch (error) {
        element.innerHTML = `<small style="color: #666;">Preview not available (${error.message})</small>`;
    }
}

function renderProjects(containerId, limit = null) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Use projectsData from data/projects.js
    const dataToRender = limit ? projectsData.slice(0, limit) : projectsData;

    container.innerHTML = dataToRender.map((project, index) => {
        // Create unique ID for the readme container
        const readmeId = `readme-${containerId}-${index}`;
        
        let contentSection = '';
        
        if (project.readmeUrl) {
            // IF we have a README, we use it as the description
            contentSection = `
                <div style="margin-bottom: 15px;">
                     <a href="${project.link}" class="project-link">${project.linkText} &rarr;</a>
                </div>
                <div id="${readmeId}" class="project-readme-preview">
                    Loading description...
                </div>
                <!-- Optional: Read More link if it's truncated? The preview has a fade out, so a link to the repo is good -->
            `;
            // Trigger fetch
            setTimeout(() => loadReadme(project.readmeUrl, readmeId), 0);
        } else {
            // Fallback to manual description
            contentSection = `
                <p>${project.description}</p>
                <a href="${project.link}" class="project-link">${project.linkText} &rarr;</a>
            `;
        }

        return `
        <div class="project-card">
            <h3>${project.title}</h3>
            ${contentSection}
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
