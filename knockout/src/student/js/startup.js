define(['knockout', './router', 'knockout-projections'], function (ko, router) {
    /*公共部分*/
    ko.components.register('header', {require: 'student/components/header/header'});
    ko.components.register('footer', {require: 'student/components/footer/footer'});
    ko.components.register('about', {require: 'student/components/about/about'});
    ko.components.register('home', {require: 'student/components/home/home'});

//    var loadingDialog = dialog.loading();
    var viewModelAjaxLoader = {
        loadViewModel: function (name, viewModelConfig, callback) {
            var init = viewModelConfig.prototype.init;
            if (!!init) {
                init(router.currentRoute()).then(function () {
                    callback(null);
                    if(viewModelConfig.prototype.onloaded){
                      viewModelConfig.prototype.onloaded();
                    }
                    if (!!viewModelConfig.prototype.clearCached) {
                      ko.components.clearCachedDefinition(name);
                    }
                });
            } else {
                callback(null);
                if(viewModelConfig.prototype.onloaded){
                  viewModelConfig.prototype.onloaded();
                }
                if (!!viewModelConfig.prototype.clearCached){
                  ko.components.clearCachedDefinition(name);
                }
            }
        }
    };
    ko.components.loaders.unshift(viewModelAjaxLoader);

    ko.applyBindings({route: router.currentRoute});
});
