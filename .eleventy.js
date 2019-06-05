module.exports = function(eleventyConfig) {

  // Copy the `css` directory
  eleventyConfig.addPassthroughCopy("css");

  // Copy the `js` directory
  eleventyConfig.addPassthroughCopy("js");

  return {
    passthroughFileCopy: true
  };
};
