
var sample = function () {
    var pulpAppMainPage = require('../pages/pulpAppMainPage.js');
    var createAuthorPage = require('../pages/createAuthorPage.js');
    var createSeriesPage = require('../pages/createSeriesPage.js');
    var createPublisherPage = require('../pages/createPublisherPage');
    var createBookPage = require('../pages/createBookPage.js');
    var createMenu = require('../pages/createMenuPage');
    var listofSeriesPage = require('../pages/listOfSeriesPage.js');

    var { setDefaultTimeout } = require('cucumber');
    setDefaultTimeout(60 * 1000);
    var { defineSupportCode } = require('cucumber');
    var chai = require('chai').use(require('chai-as-promised'));
    var expect = chai.expect;

    defineSupportCode(function ({ Given, When, Then }) {

        Given('The Pulp app main menu is open', async function () {
            browser.ignoreSynchronization = true;
            await browser.waitForAngularEnabled(false);
            await browser.driver.manage().window().maximize();
            await browser.get("https://thepulper.herokuapp.com/apps/pulp/");
            var title = await browser.getTitle();
            console.log("Title of the page is " + title);
            await expect(title).to.equal("Pulp App Main Menu");
        });

        When('I mouse hover on Create link in navigation bar', async function () {
            await browser.actions().mouseMove({ x: 503, y: 15 }).perform();
            //await browser.actions().mouseMove(mainPage.createNavBar()).perform();
        });

        Then('It should display Author,Series,Publisher and Book under Create link', async function () {
            //await pulpAppMainPage.author().click();
            await expect(pulpAppMainPage.author().isDisplayed()).to.eventually.be.true;
            await expect(pulpAppMainPage.series().isDisplayed()).to.eventually.be.true;
            await expect(pulpAppMainPage.publisher().isDisplayed()).to.eventually.be.true;
            await expect(pulpAppMainPage.book().isDisplayed()).to.eventually.be.true;
        });

        Given('The Author link should display under Create', async function () {
            await expect(pulpAppMainPage.author().isDisplayed()).to.eventually.be.true;
        });

        When('I click on Author link', async function () {
            await pulpAppMainPage.author().click();
        });

        Then('It should navigate to Create Author page', async function () {
            var titleAuthorPage = await browser.getTitle();
            console.log("Title of the page is " + titleAuthorPage);
            await expect(titleAuthorPage).to.equal("Create Author");

        });

        Then('I enter name of the author', async function () {
            await createAuthorPage.enterAuthorName("demoAuthor");

        });

        Then('I click on Create link to create Author', async function () {
            await createAuthorPage.createButton().click();

        });

        Then('the author should be added to the list', async function () {
            var Authortext = await createAuthorPage.addedAuthorList().getText();
            console.log("Name of the author added to the list is " + Authortext);
            await expect(Authortext).to.equal("Added Author demoAuthor");

        });

        Given('The Series link should display under Create', async function () {
            await browser.navigate().back();
            //await browser.actions().mouseMove({ x: 503, y: 15 }).perform();
            await browser.actions().mouseMove(pulpAppMainPage.createNavBar()).perform();
            await expect(pulpAppMainPage.series().isDisplayed()).to.eventually.be.true;
        });

        When('I click on Series link', async function () {
            await pulpAppMainPage.series().click();
        });

        Then('It should navigate to Create Series page', async function () {
            var titleSeriesPage = await browser.getTitle();
            console.log("Title of the page is " + titleSeriesPage);
            await expect(titleSeriesPage).to.equal("Create Series");

        });

        Then('I enter name of the Series', async function () {
            await createSeriesPage.nameOfSeries("demoSeries");
        });

        Then('I click on Create link to create Series', async function () {
            await createSeriesPage.createButton().click();

        });

        Then('the Series should be added to the list', async function () {
            var seriesList = await createSeriesPage.addedSeriesList().getText();
            console.log("Name of the series added to the list is " + seriesList);
            await expect(seriesList).to.equal("Added Series demoSeries");

        });

        Given('The Publisher link should display under Create', async function () {
            await browser.actions().mouseMove(pulpAppMainPage.createNavBar()).perform();
            await expect(pulpAppMainPage.publisher().isDisplayed()).to.eventually.be.true;

        });

        When('I click on Publisher link', async function () {
            await pulpAppMainPage.publisher().click();
        });

        Then('It should navigate to Create Publisher page', async function () {
            var titlePublisherPage = await browser.getTitle();
            console.log("Title of the page is " + titlePublisherPage);
            await expect(titlePublisherPage).to.equal("Create Publisher");
        });

        Then('I enter name of the Publisher', async function () {
            await createPublisherPage.enterPublisherName("demoPublisher");
        });

        Then('I click on Create link to create Publisher', async function () {
            await createPublisherPage.createButton().click();
        });

        Then('the Publisher should be added to the list', async function () {
            var publisherList = await createPublisherPage.addedPublisherList().getText();
            console.log("Name of the Publisher added to the list is " + publisherList);
            await expect(publisherList).to.equal("Added Publisher demoPublisher");

        });

        Given('The Book link should display under Create', async function () {
            await browser.actions().mouseMove(pulpAppMainPage.createNavBar()).perform();
            await expect(pulpAppMainPage.book().isDisplayed()).to.eventually.be.true;
        });

        When('I click on Book link', async function () {
            await pulpAppMainPage.book().click();

        });

        Then('It should navigate to Create Book page', async function () {
            var titleBookPage = await browser.getTitle();
            console.log("Title of the page is " + titleBookPage);
            await expect(titleBookPage).to.equal("Create Book");

        });

        Then('I enter the title of the book', async function () {
            await createBookPage.titleOfBook("demoBook");
            await browser.sleep(10000);
        });

        Then('I select the Author from drop down', async function () {
            await createBookPage.authorOfBook(5);

        });

        Then('I select the Publisher from drop down', async function () {
            await createBookPage.publisherOfBook("2");

        });

        Then('I select the Series from drop down', async function () {
            await createBookPage.seriesOfBook("2");

        });

        Then('I enter the Series Identifier', async function () {
            await createBookPage.seriesIdentifierOfBook("1992");

        });


        Then('I enter the Year of publication', async function () {
            await createBookPage.yearofpublication("2012");

        });

        Then('I click on Create link to create Book', async function () {
            await createBookPage.createButton().click();
            await browser.sleep(20000);
        });

        Then('the Book should be added to the list', async function () {
            var bookList = await createBookPage.addedBookList().getText();
            console.log(bookList);
            await expect(bookList).to.equal("Added Book demoBook");

        });

        When('I click on Series navigation link', async function () {
            await pulpAppMainPage.seriesNavBar().click();
            var titleListOfSeriesPage = await browser.getTitle();
            console.log("Title of the page is " + titleListOfSeriesPage);
            await expect(titleListOfSeriesPage).to.equal("List of Series");
            await browser.sleep(5000);

        });

        Then('It should display with list of created series', async function () {
            //var seriesLists=await listofSeriesPage.listOfSeries();
            // element.all(by.xpath("/html/body/ul/li")).each(function (listOf_Series) {
            //     console.log("List of series are " + listOf_Series);

            // element.all(by.xpath("/html/body/ul/li")).each(function(element) {
            //     // Will print 0 First, 1 Second, 2 Third.
            //     element.getText().then(function (listOf_Series) {
            //       console.log(listOf_Series);
            //     });
            //   });
        });

        Then('I click on created series link', function () {


        });

        Then('It should display selected series details page', function () {


        });


        Then('I click on List of Books in Series', function () {

            ``
        });


        Then('It should display the table of books in the series', function () {


        });

    });

}

module.exports = new sample();
