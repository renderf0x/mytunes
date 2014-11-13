define(['backbone', 'views/LibraryEntryView'], function(Backbone, LibraryEntryView) {
  var LibraryView = Backbone.View.extend({

    tagName: "table",

    initialize: function() {
      this.render();

      this.listenTo(this.collection, "play", function(){
        // console.log("play event passed along");
        this.render();
      });
    },

    render: function(){
      // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
      // see http://api.jquery.com/detach/
      this.$el.children().detach();
      // console.log("LibView render happened");

      this.$el.html('<th>Library</th>').append(
        this.collection.map(function(song){
          return new LibraryEntryView({model: song}).render();
        })
      );
    }

  });
  return LibraryView;
});
