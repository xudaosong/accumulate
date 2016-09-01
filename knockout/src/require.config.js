// require.js looks for the following global when initializing
var require = {
    baseUrl: "..",
    urlArgs:'0.0.0',
    paths: {
        "jquery": "lib/jquery/dist/jquery",
        "knockout": "lib/knockout/dist/knockout.debug",
        "knockout-projections": "lib/knockout-projections/dist/knockout-projections",
        "knockout.mapping": "lib/knockout.mapping/build/output/knockout.mapping-latest.debug",
        "knockout.validation": "lib/Knockout-Validation/Dist/knockout.validation",
        "crossroads": "lib/crossroads/dist/crossroads.min",
        "hasher": "lib/hasher/dist/js/hasher.min",
        "signals": "lib/js-signals/dist/signals.min",
        "text": "lib/text/text"
    },
    shim: {
        "knockout.mapping":["knockout"],
        "knockout.validation": ["knockout"]
    }
};
