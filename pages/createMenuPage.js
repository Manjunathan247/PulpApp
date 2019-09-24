var CreateMenuPage = function () {

    this.createAuthor = function () {
        element(by.linkText('Create Author'));
    };

    this.createSeries = function () {
        element(by.linkText('Create Series'));
    };

    this.createPublisher = function () {
        element(by.linkText('Create Publisher'));
    };

    this.createBook = function () {
        element(by.linkText('Create Book'));
    };
}

module.exports = new CreateMenuPage();