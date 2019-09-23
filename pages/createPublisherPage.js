var CreatePublisher = function()
{
    this.nameOfPublisher = function (publisherName) {
        element(by.id('publishername')).sendkeys(publisherName);  
    };

    this.createButton = function () {
        element(by.id('create'));  
    };

    this.addedPublisherList = function () {
        element(by.xpath("//h2[starts-with(text(),'Added Publisher')]"));  
    };
}

module.exports = CreatePublisher;