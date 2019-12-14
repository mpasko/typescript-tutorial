
function prepareSwitches(onBtn:string, offBtn:string, onClass: string, offClass:string) {
  const tsOn = jQuery(onBtn);
  tsOn.click(() => {
    hideClass(offClass);
    showClass(onClass);
  });
  const jsOn = jQuery(offBtn);
  jsOn.click(() => {
    hideClass(onClass);
    showClass(offClass);
  });

  hideClass(onClass);
}

prepareSwitches('#turn-ts-on', '#turn-js-on', '.typescript', '.javascript');
prepareSwitches('#show-good', '#show-bad', '.good', '.bad');

function hideClass(classId: string) {
  const allContainers = jQuery(classId);
  allContainers.addClass('hidden');
}

function showClass(classId: string) {
  const allContainers = jQuery(classId);
  allContainers.removeClass('hidden');
}

attachFlyout('#attach-1', '#flyout-1', 'flyout-error');
attachFlyout('#attach-2', '#flyout-2', 'flyout-error');
attachFlyout('#attach-hint-1', '#flyout-hint-1', 'flyout-intelisense');
attachFlyout('#attach-hint-2', '#flyout-hint-2', 'flyout-intelisense');

function attachFlyout(containerId: string, fluyoutId: string, additionalStyle: string) {
  const flyoutElement = jQuery(fluyoutId);
  const containerElement = jQuery(containerId);
  hideClass(fluyoutId);
  flyoutElement.addClass('flyout-content');
  containerElement.addClass('flyout-container');
  containerElement.addClass(additionalStyle);
  containerElement.mouseenter(() => {
    showClass(fluyoutId);
  });
  containerElement.mouseleave(() => {
    hideClass(fluyoutId);
  });
}