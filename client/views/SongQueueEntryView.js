// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
define(['backbone'],function(Backbone) {
  var SongQueueEntryView = Backbone.View.extend({
    // your code here!
    tagName: 'tr',

    template: _.template('<td><strong><%= artist %></strong></td><td><%= title %></td>'),

    events: {
      'click': function(){
        this.model.dequeue();
      }
    },

    render: function(){
      return this.$el.html(this.template(this.model.attributes));
    }
  });
  return SongQueueEntryView;
});
