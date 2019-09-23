var PulpAppMainPage = function () {

    this.createNavBar = function () {
        //element(by.xpath("//nav[@id='primary_nav_wrap']/ul/li[8]/a"));
        element(by.linkText('Create'));
    };

    this.seriesNavBar = function () {
        //element(by.xpath("//nav[@id='primary_nav_wrap']/ul/li[8]/a"));
        element(by.linkText('Series'));
    };

    this.author = function () {
        element(by.linkText('Author'));
    };

    this.series = function () {
        element(by.linkText('Series'));
    };

    this.publisher = function () {
        element(by.linkText('Publisher'));
    };

    this.book = function () {
        element(by.linkText('Book'));
    };
}

module.exports = PulpAppMainPage;