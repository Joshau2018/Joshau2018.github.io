document.addEventListener("DOMContentLoaded", function () {
    const blogContainer = document.getElementById("blogContainer");
  
    // Example blog data (Replace this with an API call if needed)
    const blogs = [
      {
        title: "Step One of making a blueprint for an AI",
        image: "/MediaAssets/ArtificialAIBluePrint.jpg",
        description: "This is the first step in planning on how to make your own AI",
        link: "/blog/Step-one-in-planning-for-making-an-AI.html",
      },
      {
        title: "Step Two of making a blueprint for an AI",
        image: "MediaAssets/roboticPython.jpg",
        description: "This is the second step in planning on how to make your own AI",
        link: "blog/Step-Two-In-Planning-for-making-an-AI.html",
      },
      {
        title: "Step Three of making a blueprint for an AI",
        image: "MediaAssets/roboticPython.jpg",
        description: "This is the thirf step in planning on how to make your own AI",
        link: "blog/Step-three-In-Planning-for-making-an-AI.html",
      },
      {
        title: "Step Four of making a blueprint for an AI",
        image: "MediaAssets/roboticPython.jpg",
        description: "This is the fourth step in planning on how to make your own AI",
        link: "blog/Step-Two-In-Planning-for-making-an-AI.html",
      },
      {
        title: "Step Five of making a blueprint for an AI",
        image: "MediaAssets/roboticPython.jpg",
        description: "This is the fifth step in planning on how to make your own AI",
        link: "blog/Step-Two-In-Planning-for-making-an-AI.html",
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
  
