const { EleventyHtmlBasePlugin } = require('@11ty/eleventy')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin)

  eleventyConfig.addPassthroughCopy('img')
  eleventyConfig.addPassthroughCopy('main.css')

  eleventyConfig.ignores.add('README.md')

  return {
    pathPrefix: process.env.PATHPREFIX ?? '/',
  }
}
