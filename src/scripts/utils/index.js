define([
  'handlebars',
], function(hbs) {
  var Utils = {
    init: function() {
      this.helpers();
    },

    helpers: function() {
      hbs.registerHelper('image', function(path) {
        var imageUrl;
        if(path !== null) {
          imageUrl = 'https://image.tmdb.org/t/p/w154' + path;
        } else {
          imageUrl = 'https://placehold.it/154x218?text="No Image Found"';
        }

        return new hbs.SafeString("<img src='" + imageUrl + "'/>");
      });

      hbs.registerHelper('rating', function(score) {
        var percentage = (parseFloat(score, 10)/10)*100;
        console.log(percentage);
        return new hbs.SafeString("<span class='rating-stars' style='width:" + percentage + "%'></span>");
      });

      hbs.registerHelper('year', function(date) {
        var year = date.split('-')[0];
        return new hbs.SafeString("<h5 class='year'>" + year + "</h5>");
      });
    }
  };

  return Utils;
});