$(document).ready(function () {
  $('.tooltip-right').tooltip({
    placement: 'right',
    viewport: {selector: 'body', padding: 2}
  })
  $('.tooltip-bottom').tooltip({
    placement: 'bottom',
    viewport: {selector: 'body', padding: 2}
  })
  $('.tooltip-viewport-right').tooltip({
    placement: 'right',
    viewport: {selector: '.container-viewport', padding: 2}
  })
  $('.tooltip-viewport-bottom').tooltip({
    placement: 'bottom',
    viewport: {selector: '.container-viewport', padding: 2}
  })
  $('.tooltip-viewport-right-md').tooltip({
    placement: 'right',
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner" style="max-width:400px;width:400px;"></div></div>',
    viewport: {selector: '.container-viewport', padding: 2}
  })
  $('.tooltip-viewport-bottom-md').tooltip({
    placement: 'bottom',
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner" style="max-width:400px;width:400px;"></div></div>',
    viewport: {selector: '.container-viewport', padding: 2}
  })
  $('.tooltip-viewport-right-sm').tooltip({
    placement: 'right',
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner" style="max-width:200px;width:200px;"></div></div>',
    viewport: {selector: '.container-viewport', padding: 2}
  })
  $('.tooltip-viewport-bottom-sm').tooltip({
    placement: 'bottom',
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner" style="max-width:200px;width:200px;"></div></div>',
    viewport: {selector: '.container-viewport', padding: 2}
  })
})
