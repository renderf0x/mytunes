require.config({
  paths: {
    'jquery': 'bower_components/jquery/jquery',
    'backbone': 'bower_components/backbone/backbone',
    'underscore': 'bower_components/underscore/underscore',
  },
  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
});

require(
  ['jquery',
   'underscore',
   'backbone',
   'models/AppModel',
   'collections/Songs',
   'views/AppView',
   'data/data'
  ],
  function($, _, B, AppModel, Songs, AppView, songData) {
    $(function() {
        // set up model objects
        var library = new Songs(songData);
        var app = new AppModel({library: library});

        // build a view for the top level of the whole app
        var appView = new AppView({model: app});

        // put the view onto the screen
        $('body').append(appView.render());
    });
  }
);
