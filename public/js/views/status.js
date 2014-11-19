define(['SocialNetView', 'text!templates/status.html'], function(SocialNetView, statusTemplate) {
  	var statusView = SocialNetView.extend({
    tagName: 'li',

    render: function() {
    		var template = _.template(statusTemplate);
      		$(this.el).html(template({ status : this.model.attributes.status }));
      		return this;
    	}
  	});

  return statusView;
});
