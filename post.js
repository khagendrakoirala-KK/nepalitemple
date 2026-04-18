const params = new URLSearchParams(window.location.search);
const postId = params.get("id");

fetch(`data/posts/${postId}.json`)
  .then(res => res.json())
  .then(post => {
    document.title = `${post.title} – Moments & Stories`;

    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content = post.description;
    document.head.appendChild(meta);

    document.getElementById("post").innerHTML = `
      <article>
        <h1>${post.title}</h1>
        <img src="${post.image}" alt="${post.title}">
        <p>${post.description}</p>
        <small>${post.date}</small>
      </article>
    `;
  })
  .catch(() => {
    document.getElementById("post").innerHTML = "<p>Post not found.</p>";
  });