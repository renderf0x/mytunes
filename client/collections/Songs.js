// Songs.js - Defines a backbone collection class for songs.
define(["models/SongModel", "backbone", "backbone.localStorage"], function(SongModel, Backbone) {
  var Songs = Backbone.Collection.extend({
    model: SongModel,
    localStorage: new Backbone.LocalStorage("songs-backbone"),
    initialize: function() {
      this.fetch();
    }
  });
  return Songs;
});
