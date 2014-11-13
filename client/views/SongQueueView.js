// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();
    this.listenTo(this.collection, "add", this.render);
    this.listenTo(this.collection, "remove", this.render);
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>SongQueue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );

    return this.$el;
  }

});

// params.library.on('enqueue', function(song){
//   this.get('songQueue').push(song);
//   console.log(this.get('songQueue').length);
// }, this);
