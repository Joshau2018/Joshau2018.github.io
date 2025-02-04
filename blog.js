document.addEventListener("DOMContentLoaded", function () {
    const blogContainer = document.getElementById("blogContainer");
  
    // Example blog data (Replace this with an API call if needed)
    const blogs = [
      {
        title: "Step One in planning for making an AI",
        image: "/MediaAssets/ArtificialAIBluePrint.jpg",
        description: "Step one in creationg a blueprint for an AI.",
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
  
