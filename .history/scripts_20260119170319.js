// ============================================
// DATA SECTION - EDIT THIS TO UPDATE YOUR SITE
// ============================================

const projectsData = [
    {
        title: "Market Dashboard",
        description: "A dashboard created using Holistics/PowerBI to track market information and support pricing policies.",
        link: "#",
        linkText: "View Project"
    },
    {
        title: "Real Estate Pricing Model",
        description: "Data analysis project using Python to estimate initial and final pricing for real estate assets.",
        link: "#",
        linkText: "View Project"
    },
    {
        title: "Web Scraper",
        description: "A Python script to extract data from various sources for analysis.",
        link: "#",
        linkText: "View Code"
    },
    {
        title: "Sales Forecasting Tool",
        description: "Predicted future sales trends using historical data and regression models in Python.",
        link: "#",
        linkText: "View Project"
    },
    {
        title: "Portfolio Website",
        description: "This very website! Built with HTML, CSS, JavaScript, and hosted on GitHub Pages.",
        link: "#",
        linkText: "View Code"
    }
];

const blogData = [
    {
        title: "Getting started with Machine Learning",
        description: "My journey into ML and what I've learned so far about algorithms and data preparation.",
        date: "Jan 15, 2026",
        link: "https://medium.com/",
        linkText: "Read on Medium"
    },
    {
        title: "Visualizing Data with PowerBI",
        description: "Tips and tricks for creating effective dashboards that drive business decisions.",
        date: "Dec 10, 2025",
        link: "#",
        linkText: "Read Article"
    },
    {
        title: "Why Python is Essential for Finance",
        description: "Automating spreadsheets and financial modeling with Python libraries like Pandas.",
        date: "Nov 22, 2025",
        link: "#",
        linkText: "Read Article"
    },
    {
        title: "The Future of Proptech",
        description: "Reflections on my experience at Habi and how technology is changing real estate.",
        date: "Oct 05, 2025",
        link: "#",
        linkText: "Read Article"
    }
];

const bookData = [
    {
        title: "How to Avoid a Climate Disaster",
        author: "Bill Gates",
        review: "How to Avoid a Climate Disaster was a good book that helped me to have a better view of the climate problem. I can understand the key factors that make this problem worse and learned what society and I can do to achieve the goal of zero carbon emissions. I would highly recommend it.",
        rating: "4/5 stars",
        link: "https://www.goodreads.com/book/show/52275335-how-to-avoid-a-climate-disaster",
        linkText: "View on Goodreads"
    },
    {
        title: "Atomic Habits",
        author: "James Clear",
        review: "A fantastic guide on how small changes can lead to remarkable results. Essential reading for personal growth.",
        rating: "5/5 stars",
        link: "https://www.goodreads.com/",
        linkText: "View on Goodreads"
    },
    {
        title: "Clean Code",
        author: "Robert C. Martin",
        review: "Helped me understand the importance of writing readable and maintainable software.",
        rating: "5/5 stars",
        link: "https://www.goodreads.com/",
        linkText: "View on Goodreads"
    }
];


// ============================================
// LOGIC SECTION - DO NOT EDIT UNLESS NECESSARY
// ============================================

function renderProjects(containerId, limit = null) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const dataToRender = limit ? projectsData.slice(0, limit) : projectsData;

    container.innerHTML = dataToRender.map(project => `
        <div class="project-card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" class="project-link">${project.linkText} &rarr;</a>
        </div>
    `).join('');
}

function renderBlogs(containerId, limit = null) {
    const container = document.getElementById(containerId);
    if (!container) return;

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

    const dataToRender = limit ? bookData.slice(0, limit) : bookData;

    container.innerHTML = dataToRender.map(book => `
        <div class="list-item">
            <div>
                <h3>${book.title}</h3>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><em>"${book.review}"</em></p>
                ${book.rating ? `<p><strong>Rating:</strong> ${book.rating}</p>` : ''}
            </div>
            <a href="${book.link}" target="_blank">${book.linkText} <i class="fas fa-book-open"></i></a>
        </div>
    `).join('');
}
