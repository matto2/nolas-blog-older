const { DateTime } = require("luxon");


module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("_src/css/");
    eleventyConfig.addPassthroughCopy("_src/img");
    eleventyConfig.addPassthroughCopy("_src/js");
    eleventyConfig.addPassthroughCopy("_src/txt");

    
      return {
        dir: {
          input: '_src',
          output: '_site'
        }
      };
};
