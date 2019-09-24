var ListOfSeriesPage = function () {

    this.createNavBar = function () {
        //element(by.xpath("//nav[@id='primary_nav_wrap']/ul/li[8]/a"));
        element(by.linkText('Create'));
    };

    this.listOfSeries = function () {
       return element.all(by.xpath("/html/body/ul/li")).getText().then(function (listOf_Series) {
            console.log("List of series are " + listOf_Series);
        })
    }

    element.all(by.css('ul.sbsb_b')).each(function(element, index) {
        element.getText().then(function(text) {
            console.log(text);
        });
    });

}

module.exports = new ListOfSeriesPage();