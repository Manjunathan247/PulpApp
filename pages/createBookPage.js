var CreateBook = function () {

    this.titleOfBook = function (bookTitle) {
        element(by.id('booktitle')).sendkeys(bookTitle);
    };

    this.authorOfBook = function (authorOfBook) {
        //element(by.id('authoridselect')).$('[value="J. Allan Dunn"]');
        var options = element.all(by.tagName('option'))
            .then(function (options) {
                options[authorOfBook];
            });
    };

    this.publisherOfBook = function (publisherOfBook) {
        var options = element.all(by.tagName('option'))
            .then(function (options) {
                options[publisherOfBook];
            });
    };

    this.seriesOfBook = function (seriesOfBook) {
        var options = element.all(by.tagName('option'))
            .then(function (options) {
                options[seriesOfBook];
            });
    };

    this.seriesIdentifierOfBook = function (seriesIdOfBook) {
        element(by.id('seriesidentifierid')).sendkeys(seriesIdOfBook);
    };

    this.yearofpublication = function (yearofpublication) {
        element(by.id('yearofPub')).sendkeys(yearofpublication);
    };
    
    this.createButton = function () {
        element(by.id('create'));  
    };

    this.addedBookList = function () {
        element(by.xpath("//h2[starts-with(text(),'Added Book')]"));  
    };
}

module.exports = CreateBook;

