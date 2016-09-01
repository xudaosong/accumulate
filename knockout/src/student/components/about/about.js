define(['knockout', 'jquery', 'text!./about.html'],
    function (ko, $, template) {

        function viewModel(params) {
            var vm = this;
            vm.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
        }

        return {viewModel: viewModel, template: template};
    });