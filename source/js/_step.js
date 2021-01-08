$(document).ready(function() {
  $('.step-content').first().show();
});

$('.next').click(function(event) {
  var currentStep = $(this).closest('.step-content');
  var nextStep = $(this).closest('.step-content').next();
  $('.step').eq($('.step-content').index(currentStep)).removeClass('step__current');
  $('.step').eq($('.step-content').index(nextStep)).addClass('step__current');
  currentStep.hide();
  nextStep.show();
  event.preventDefault();
});

$('.back').click(function(event) {
  var currentStep = $(this).closest('.step-content');
  var prevStep = $(this).closest('.step-content').prev();
  $('.step').eq($('.step-content').index(currentStep)).removeClass('step__current');
  $('.step').eq($('.step-content').index(prevStep)).addClass('step__current');
  currentStep.hide();
  prevStep.show();
  event.preventDefault();
});
