# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

ready = ->
  $("input[name='setting[cost_per_thousand_points]']").popover({
    'trigger':'focus',
    'title': I18n.t('helpers.warning'),
    'content': I18n.t('forms.settings.cost_per_thousand_points.tooltip'),
    'placement': 'right',
    'animation': true,
    'container': 'body',
    'html': true
  })

$(document).ready(ready)
$(document).on('page:load', ready)