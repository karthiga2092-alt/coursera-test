$(document).ready(function() {
    $('#navbar-collapse').on('shown.bs.collapse', function () {
      $('.navbar-toggle').addClass('toggled-open');
    });
    $('#navbar-collapse').on('hidden.bs.collapse', function () {
      $('.navbar-toggle').removeClass('toggled-open');
    });
  });