const marked=require("marked");
const sanitizedHtml=require("sanitize-html");
const TurndownService = require("turndown");
function markdownSanitizer(markdownContent){
    //the purpose of this function is to purify the markdown which we will get from client and remove malicious piece of javascript code in script tag
    //from html 

    //convert markdown to html
    const convertedHtml=marked(markdownContent);

    //sanitize html
    const sanitizedHtml=sanitizedHtml(convertedHtml,{
        allowedTags:sanitizedHtml.defaults.allowedTags//preventing script tag to be included in the purified html content which we will get
    });
    const turndownservice=new TurndownService();
    const convertedMarkdown=turndownservice.turndown(sanitizedHtml);

 
    return sanitizedHtml;

}

module.exports=markdownSanitizer;
