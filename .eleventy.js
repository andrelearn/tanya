const { EleventyHtmlBasePlugin } = require('@11ty/eleventy')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin)

  eleventyConfig.addPassthroughCopy('img')

  return {
    pathPrefix: process.env.PATHPREFIX ?? '/',
  }
}
