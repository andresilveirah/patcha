ready = ->
  $("input[name='patch[code]']").tooltip({'trigger':'focus', 'title': I18n.t('forms.patches.code.tooltip')})

  $("input[name='patch[group_list]']").tokenfield({
    typeahead: {
      name: 'tags',
      local: $("input[name='patch[group_list]']").data('groups')
    }
  })
  
  $("input[name='patch[dots_count]']").on 'keyup', ->
    $("input[name='patch[cost]']").val(this.value * this.dataset.price / 1000)
  
  $("input[name='patch[cost]']").popover({
    'trigger':'focus',
    'html': true
    'content': "<a href='/settings/1/edit'>" + I18n.t('activerecord.attributes.setting.cost_per_thousand_points') + '</a>' + ' ' + I18n.l("currency", $("input[name='patch[dots_count]']").data('price')),
    'container': 'body'
  })
    
  return null

$(document).ready(ready)
$(document).on('page:load', ready)

