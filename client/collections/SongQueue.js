// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(song){
      if(this.length === 1){
        this.playFirst();
      }
    }, this);
  },

  playFirst: function(){
    var song = this.at(0);
    song.play();
  }

});
