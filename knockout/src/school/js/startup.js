define(['knockout', 'knockout-projections'], function (ko) {
    /*公共部分*/
    ko.components.register('header', {require: 'school/components/header/header'});
    ko.components.register('footer', {require: 'school/components/footer/footer'});
    ko.components.register('news', {require: 'school/components/news/news'});
    ko.components.register('home', {require: 'school/components/home/home'});

    ko.applyBindings();
});
