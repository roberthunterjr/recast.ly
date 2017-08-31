var searchYouTube = (options, callback) => {
  // TODO
  console.log(options);
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      maxResults: options.max,
      key: options.key,
      q: options.query,
      part: 'snippet',
      videoEmbeddable: true,
      type: 'video'
    },
    success: function(data) {
      console.log(data.items);
      callback(data.items);
    },
    error: function() {
      console.log('failed AJAX');
    }

  });

};

window.searchYouTube = searchYouTube;

//
// $.ajax({
//   url: url,
//   data: data,
//   success: success,
//   dataType: dataType
// });
