module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("_src/css/");
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("txt");

    
      return {
        dir: {
          input: '_src',
          output: '_site'
        }
      };
};

