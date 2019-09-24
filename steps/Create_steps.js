
var sample = function () {
    var pulpAppMainPage = require('C:/Manjunathan/Automation Code/PulpApp_Assign/pages/pulpAppMainPage.js');
    var createAuthorPage = require('C:/Manjunathan/Automation Code/PulpApp_Assign/pages/createAuthorPage.js');
    var createSeriesPage = require('C:/Manjunathan/Automation Code/PulpApp_Assign/pages/createSeriesPage.js');
    var createPublisherPage = require('C:/Manjunathan/Automation Code/PulpApp_Assign/pages/createPublisherPage.js');
    var createBookPage = require('C:/Manjunathan/Automation Code/PulpApp_Assign/pages/createBookPage.js');

    var {setDefaultTimeout} = require('cucumber');
    setDefaultTimeout(60 * 1000);
    var { defineSupportCode } = require('cucumber');
    var chai = require('chai').use(require('chai-as-promised'));
    var expect = chai.expect;

    defineSupportCode(function ({ Given, When, Then }) {
        this.mainPage = new pulpAppMainPage();
        this.authorPage = new createAuthorPage();
        this.seriesPage = new createSeriesPage();
        this.publisherPage = new createPublisherPage();
        this.bookPage = new createBookPage();

        Given('The Pulp app main menu is open', async function () {
            browser.ignoreSynchronization = true;
            browser.driver.manage().window().maximize();
            await browser.get("https://thepulper.herokuapp.com/apps/pulp/");
            var title = await browser.getTitle();
            console.log("Title of the page is " + title);
            await expect(title).to.equal("Pulp App Main Menu");
            //return 'pending';
        });

        When('I mouse hover on Create link in navigation bar', async function () {
            await browser.actions().mouseMove({x: 503, y: 15}).perform();
            //await browser.actions().mouseMove(mainPage.createNavBar()).perform();
            //return 'pending';
        });

        /*Then('It should display Author,Series,Publisher and Book under Create link', async function () {
            await expect(mainPage.author().isDisplayed()).to.equal(true);
            await expect(mainPage.series().isDisplayed()).to.equal(true);
            await expect(mainPage.publisher().isDisplayed()).to.equal(true);
            await expect(mainPage.book().isDisplayed()).to.equal(true);
            return 'pending';
        });

        Given('The Author link should display under Create', async function () {
            await browser.actions().mouseMove(mainPage.createNavBar).perform();
            await expect(mainPage.author.isDisplayed()).toBe(true);
            return 'pending';
        });*/

        When('I click on Author link', async function () {
            await mainPage.author().click();
            return 'pending';
        });

        Then('It should navigate to Create Author page', async function () {
            var titleAuthorPage = await browser.getTitle();
            console.log("Title of the page is " + titleAuthorPage);
            await expect(titleAuthorPage).to.equal("Create Author");
            return 'pending';
        });

        Then('I enter name of the author', function () {
            authorPage.nameOfAuthor("demoAuthor");
            return 'pending';
        });

        Then('I click on Create link to create Author', function () {
            authorPage.createButton.click();
            return 'pending';
        });

        Then('the author should be added to the list', async function () {
            var Authortext = await authorPage.addedAuthorList.getText();
            console.log(Authortext);
            await expect(Authortext).to.equal(Authortext + " demoAuthor");
            return 'pending';
        });

        Given('The Series link should display under Create', async function () {
            await browser.actions().mouseMove(mainPage.createNavBar).perform();
            await expect(mainPage.series.isPresent()).toBe(true);
            return 'pending';
        });

        When('I click on Series link', function () {
            mainPage.series.click();
            return 'pending';
        });

        Then('It should navigate to Create Series page', async function () {
            var titleSeriesPage = await browser.getTitle();
            console.log("Title of the page is " + titleSeriesPage);
            await expect(titleSeriesPage).to.equal("Create Series");
            return 'pending';
        });

        Then('I enter name of the Series', function () {
            seriesPage.nameOfSeries("demoSeries");
            return 'pending';
        });

        Then('I click on Create link to create Series', function () {
            seriesPage.createButton.click();
            return 'pending';
        });

        Then('the Series should be added to the list', async function () {
            var seriesList = await seriesPage.addedSeriesList.getText();
            console.log(seriesList);
            await expect(seriesList).to.equal(Authortext + " demoAuthor");
            return 'pending';
        });

        Given('The Publisher link should display under Create', async function () {
            await browser.actions().mouseMove(mainPage.createNavBar).perform();
            await expect(mainPage.publisher.isPresent()).toBe(true);
            return 'pending';
        });

        When('I click on Publisher link', function () {
            mainPage.publisher.click();
            return 'pending';
        });

        Then('It should navigate to Create Publisher page', async function () {
            var titlePublisherPage = await browser.getTitle();
            console.log("Title of the page is " + titlePublisherPage);
            await expect(titlePublisherPage).to.equal("Create Publisher");
            return 'pending';
        });

        Then('I enter name of the Publisher', function () {
            publisherPage.nameOfPublisher("demoPublisher")
            return 'pending';
        });

        Then('I click on Create link to create Publisher', function () {
            publisherPage.createButton.click();
        });

        Then('the Publisher should be added to the list', async function () {
            var publisherList = await publisherPage.addedPublisherList.getText();
            console.log(publisherList);
            await expect(publisherList).to.equal(Authortext + " demoPublisher");
            return 'pending';
        });

        Given('The Book link should display under Create', async function () {
            await browser.actions().mouseMove(mainPage.createNavBar).perform();
            await expect(mainPage.book.isPresent()).toBe(true);
            return 'pending';
        });

        When('I click on Book link', function () {
            mainPage.book.click();
            return 'pending';
        });

        Then('It should navigate to Create Book page', async function () {
            var titleBookPage = await browser.getTitle();
            console.log("Title of the page is " + titleBookPage);
            await expect(titleBookPage).to.equal("Create Book");
            return 'pending';
        });

        Then('I enter the title of the book', function () {
            bookPage.titleOfBook("demoBook");
            return 'pending';
        });

        Then('I select the Author from drop down', function () {
            bookPage.authorOfBook(5);
            return 'pending';
        });

        Then('I select the Publisher from drop down', function () {
            bookPage.publisherOfBook("2");
            return 'pending';
        });

        Then('I select the Series from drop down', function () {
            bookPage.seriesOfBook("2");
            return 'pending';
        });

        Then('I enter the Series Identifier', function () {
            bookPage.seriesIdentifierOfBook("demoSeriesID");
            return 'pending';
        });


        Then('I enter the Year of publication', function () {
            bookPage.yearofpublication("2012");
            return 'pending';
        });

        Then('I click on Create link to create Book', function () {
            bookPage.createButton.click();
            return 'pending';
        });

        Then('the Book should be added to the list', async function () {
            var bookList = await bookPage.addedBookList.getText();
            console.log(bookList);
            await expect(bookList).to.equal(Authortext + " demoBook");
            return 'pending';
        });

        When('I click on Series navigation link', function () {
            mainPage.seriesNavBar.click();
            return 'pending';
        });

        Then('It should display with list of created series', function () {

            return 'pending';
        });


        Then('I click on created series link', function () {

            return 'pending';
        });

        Then('It should display selected series details page', function () {

            return 'pending';
        });


        Then('I click on List of Books in Series', function () {

            return 'pending'; ``
        });


        Then('It should display the table of books in the series', function () {

            return 'pending';
        });

    });

}

module.exports = new sample();
