module.exports = function(eleventyConfig) {

  // Copy the `css` directory
  eleventyConfig.addPassthroughCopy("css");

  // Copy the `js` directory
  eleventyConfig.addPassthroughCopy("js");

  // Copy the `fonts` directory
  eleventyConfig.addPassthroughCopy("fonts");

  // Copy the `img` directory
  eleventyConfig.addPassthroughCopy("img");

  return {
    passthroughFileCopy: true
  };
};
