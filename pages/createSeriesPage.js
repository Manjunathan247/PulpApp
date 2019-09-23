var CreateSeries = function()
{
    this.nameOfSeries = function (seriesName) {
        element(by.id('seriesname')).sendkeys(seriesName);  
    };

    this.createButton = function () {
        element(by.id('create'));  
    };

    this.addedSeriesList = function () {
        element(by.xpath("//h2[starts-with(text(),'Added Series')]"));  
    };
};

module.exports = CreateSeries;