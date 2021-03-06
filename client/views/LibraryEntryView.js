define(['backbone'], function(Backbone){
  var LibraryEntryView = Backbone.View.extend({

    tagName: 'tr',

    template: _.template('<td><strong><%= artist %></strong></td><td><%= title %></td><td><%= playCount %></td>'),

    events: {
      'click': function() {
        //this.model.play();
        this.model.enqueue();
      }
    },

    render: function(){
      return this.$el.html(this.template(this.model.attributes));
    }

  });
  return LibraryEntryView;
});
