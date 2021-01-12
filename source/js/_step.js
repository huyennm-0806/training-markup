$(document).ready(function() {
  $('.auth-block--step').first().show();
});

$(document).on('click', '.js-step', function(e) {
  var nextStep = $(this).attr('data-show');
  var currentStep = $(this).parents('.auth-block--step');

  $(`#${currentStep.attr('id')}-label`).removeClass('step--current');
  currentStep.hide();
  $(`${nextStep}-label`).addClass('step--current');
  $(nextStep).show();
  e.preventDefault();
});
