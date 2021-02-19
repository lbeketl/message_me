// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require semantic-ui
//= require_tree .


scroll_bottom = function() {
    if ($('#messages').length > 0) {
      $('#messages').scrollTop($('#messages')[0].scrollHeight);
    }
  }
  

    // $('#message_body').on('keydown', function(e) {
    //   if (e.keyCode == 13) {
    //     $('button').click();
    //     e.target.value = "";
    //     console.log('clicked')
    //   };
    // });
  
  
  $(document).on('turbolinks:load', function() {
    $('.ui.dropdown').dropdown();
    $('.message .close').on('click', function() {
      $(this).closest('.message').transition('fade');
    });

    $('#message_body').on('keydown', function(e) {
        if (e.keyCode == 13) {
          e.preventDefault();
          $('button').click();
          e.target.value = "";
        };
      });
    // submit_message();
    scroll_bottom();
  })

    