var VideoListView = Backbone.View.extend({

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    this.collection.each(this.renderVideo, this);

    return this;
  },

  renderVideo: function(video) {
    var videoListEntryView = new VideoListEntryView({model: video});
    this.$('.video-list').append(videoListEntryView.render().el);
  },

  template: templateURL('src/templates/videoList.html')

});
