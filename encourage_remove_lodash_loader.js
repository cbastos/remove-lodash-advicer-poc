const path = require('path');

module.exports = function(content, map, meta) {
    if(content.includes("require('lodash')") || content.includes("from 'lodash'") || content.includes('from "lodash"')){
        const modulePath = path.relative('.', this.resourcePath)
        return `
        console.log('You are using Lodash here: ${modulePath} and you could consider to replace it with native methods: https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore'); 
        ${content}
        `
    }
    return content;
};