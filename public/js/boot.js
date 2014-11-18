require.config({
  paths: {
    jQuery: '/js/lib/jquery',
    Underscore: '/js/lib/underscore',
    Backbone: '/js/lib/backbone',
    Sockets: '/socket.io/socket.io',
    models: 'models',
    text: '/js/lib/text',
    templates: '../templates',

    SocialNetView: '/js/SocialNetView'
  },

  shim: {
    'Backbone': ['Underscore', 'jQuery'],
    'SocialNet': ['Backbone']
  }
});

require(['SocialNet'], function(SocialNet) {
  SocialNet.initialize();
});
