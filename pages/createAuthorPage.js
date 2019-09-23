var CreateAuthor = function()
{
    this.nameOfAuthor = function (authorName) {
        element(by.id('authorname')).sendkeys(authorName);  
    };

    this.createButton = function() {
        element(by.id('create'));  
    };

    this.addedAuthorList = function() {
        element(by.xpath("//h2[starts-with(text(),'Added Author')]"));  
    };
}

module.exports = CreateAuthor;