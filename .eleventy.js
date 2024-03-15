module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./mashademianovastyles.css')
    eleventyConfig.addPassthroughCopy('./mashademianova.js')
    eleventyConfig.addPassthroughCopy("**/*.jpg")
  }