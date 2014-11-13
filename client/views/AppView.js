// AppView.js - Defines a backbone view class for the whole music app.

define(['backbone','views/PlayerView','views/LibraryView','views/SongQueueView'], function(Backbone, PlayerView, LibraryView, SongQueueView){

  var AppView = Backbone.View.extend({

    initialize: function(params){
      this.playerView = new PlayerView({model: this.model.get('currentSong')});
      this.libraryView = new LibraryView({collection: this.model.get('library')});
      this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});

      // change:currentSong - this is Backbone's way of allowing you to filter events to
      // ONLY receive change events for the specific property, 'currentSong'
      this.model.on('change:currentSong', function(model){
        this.playerView.setSong(model.get('currentSong'));
      }, this);

      this.model.on('change:songQueue', function(){
        this.model.get('songQueue').render();
      } ,this);
    },

    render: function(){
      return this.$el.html([
        this.playerView.$el,
        this.libraryView.$el,
        this.songQueueView.$el
      ]);
    }

  });
  return AppView;
});
