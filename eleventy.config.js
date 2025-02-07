module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets/css");
  eleventyConfig.addPassthroughCopy("assets/images");
  eleventyConfig.addPassthroughCopy("assets/svg");
  eleventyConfig.addPassthroughCopy("assets/favicons");
};