const { EleventyHtmlBasePlugin } = require('@11ty/eleventy')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin)

  eleventyConfig.addPassthroughCopy('./mashademianovastyles.css')
  eleventyConfig.addPassthroughCopy('./mashademianova.js')
  eleventyConfig.addPassthroughCopy('img')

  return {
    pathPrefix: process.env.PATHPREFIX ?? '/',
  }
}
