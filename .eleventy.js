// The export statement makes these settings available to other files in 11ty
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("blogPosts", function (title, author, post) {
    return `<div class="blog">
        <div class="postTitle">
        <h3><strong>${title}</strong></h3></div>
        <div class="author">${author}</div>
        <div class="postContent">${post}</div>
      </div>`;
  });
};
