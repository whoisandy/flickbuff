define([
  'handlebars',
  'views/base',
  'text!templates/sidebar.html'
], function(handlebars, BaseView, sidebarTemplate) {
  var SidebarView = BaseView.extend({
    elements: {
      '$search': '.search-input'
    },
    render: function() {
      console.log(this.$search);
      return this;
    }
  });

  return SidebarView;
})
