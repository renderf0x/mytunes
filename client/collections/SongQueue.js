// SongQueue.js - Defines a backbone model class for the song queue.

define(['backbone','collections/Songs'], function(Backbone, Songs){
  var SongQueue = Songs.extend({
    //localStorage: new Backbone.LocalStorage("songs-backbone"),
    initialize: function(){
      this.on('add', function(song){
        if(this.length === 1){
          this.playFirst();
        }
        //song.save();
      }, this);

      this.on('dequeue', function(song){
        return song.remove(song);
      }, this);

      this.on('ended', function(song){
        song.remove(song);
        if(this.length) {
          this.playFirst();
        }
      }, this);

      //this.fetch();

    },

    playFirst: function(){
      var song = this.at(0);
        song.play();
    }

  });
  return SongQueue;
});

