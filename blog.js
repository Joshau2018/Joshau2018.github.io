document.addEventListener("DOMContentLoaded", function () {
    const blogContainer = document.getElementById("blogContainer");
  
    // Example blog data (Replace this with an API call if needed)
    const blogs = [
      {
        title: "How to Build a Web App",
        image: "https://source.unsplash.com/300x200/?technology",
        description: "A step-by-step guide on how to create a web application.",
        link: "/blog/Step-one-in-planning-for-making-an-AI .html",
      },
    ];
  
    // Loop through the blog data and create blog cards
    blogs.forEach((blog) => {
      const blogCard = document.createElement("div");
      blogCard.classList.add("blog-card");
  
      blogCard.innerHTML = `
        <img src="${blog.image}" alt="${blog.title}">
        <div class="blog-content">
          <div class="blog-title">${blog.title}</div>
          <div class="blog-description">${blog.description}</div>
          <a class="blog-link" href="${blog.link}">Read More →</a>
        </div>
      `;
  
      blogContainer.appendChild(blogCard);
    });
  });
  