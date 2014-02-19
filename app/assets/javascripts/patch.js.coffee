ready = ->
  $("input[name='patch[code]']").tooltip({'trigger':'focus', 'title': 'Será salvo em maíusculo'})

  $("input[name='patch[group_list]']").tokenfield({
    typeahead: {
      name: 'tags',
      local: $("input[name='patch[group_list]']").data('groups')
    }
  })
  
  return null

$(document).ready(ready)
$(document).on('page:load', ready)

