define(['SocialNetView', 'text!templates/contact.html'], function(SocialNetView, contactTemplate) {
  var contactView = SocialNetView.extend({
    addButton: false,

    removeButton: false,

    tagName: 'li',

    events: {
      "click .addbutton": "addContact",
      "click .removebutton": "removeContact"
    },

    addContact: function() {
      var $responseArea = this.$('.actionArea');
      $.post('/accounts/me/contact',
        {contactId: this.model.get('_id')},
        function onSuccess() {
          $responseArea.text('Contact Added');
        }, function onError() {
          $responseArea.text('Could not add contact');
        }
      );
    },

    removeContact: function() {
      var $responseArea = this.$('.actionarea');
      $responseArea.text('Removing contact...');
      $.ajax({
        url: '/accounts/me/contact',
        type: 'DELETE',
        data: {
          contactId: this.model.get('accountId')
        }}).done(function onSuccess() {
          $responseArea.text('Contact Removed');
        }).fail(function onError() {
          $responseArea.text('Could not remove contact');
        });
    },

    initialize: function() {
      // Set the addButton variable in case it has been added in the constructor
      if ( this.addButton ) {
        this.addButton = this.addButton;
      }

      if ( this.removeButton ) {
        this.removeButton = this.removeButton;
      }
    },

    render: function() {
      var template = _.template(contactTemplate);
      $(this.el).html(template({
        model: this.model.toJSON(),
        addButton: this.addButton,
        removeButton: this.removeButton
      }));
      return this;
    }
  });

  return contactView;
});
