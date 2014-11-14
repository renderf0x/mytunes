define(['backbone','views/SongQueueEntryView'], function(Backbone, SongQueueEntryView){

  var SongQueueView = Backbone.View.extend({

    tagName: "table",

    initialize: function() {
      this.render();
      this.listenTo(this.collection, "add", this.render);
      this.listenTo(this.collection, "remove", this.render);

      this.$el.attr('class', 'table table-hover');
    },

    render: function() {
      this.$el.children().detach();

      this.$el.html('<th>Artist</th><th>Song</th>').append(
        this.collection.map(function(song){
          return new SongQueueEntryView({model: song}).render();
        })
      );

      return this.$el;
    }

  });
  return SongQueueView;
});

// params.library.on('enqueue', function(song){
//   this.get('songQueue').push(song);
//   console.log(this.get('songQueue').length);
// }, this);
