module.exports = function (eleventyConfig) {
  // Input directory: src
  // Output directory: _site
  eleventyConfig.addPassthroughCopy("src/style.css")
  eleventyConfig.setDataDeepMerge(true);
}
