ready = ->
  $("input[name='patch[code]']").tooltip({'trigger':'focus', 'title': 'Será salvo em maíusculo'})

$(document).ready(ready)
$(document).on('page:load', ready)

