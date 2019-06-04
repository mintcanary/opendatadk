module.exports = function(eleventyConfig) {

  // Copy the `css` directory
  eleventyConfig.addPassthroughCopy("css");

  return {
    passthroughFileCopy: true
  };
};
