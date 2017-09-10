var SearchView = Backbone.View.extend({

  events: {
    'click .btn': 'handleSearch',
    'keyup input': 'handleEnter'
  },

  handleEnter: function(e) {
    if (e.which === 13) {
      this.collection.search($('input').val())
    }
  },

  handleSearch: function() {
    this.collection.search($('input').val());
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
