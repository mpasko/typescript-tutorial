import * as jQuery from "jquery";

const tsOn = jQuery('#turn-ts-on');
tsOn.click(() => {
  hideClass('.javascript');
  showClass('.typescript');
});
const jsOn = jQuery('#turn-js-on');
jsOn.click(() => {
  hideClass('.typescript');
  showClass('.javascript');
});

hideClass('.typescript');

function hideClass(classId: string) {
  const allContainers = jQuery(classId);
  allContainers.addClass('hidden');
}

function showClass(classId: string) {
  const allContainers = jQuery(classId);
  allContainers.removeClass('hidden');
}

attachFlyout('#attach-1', '#flyout-1');

function attachFlyout(containerId: string, fluyoutId: string) {
  const flyoutElement = jQuery(fluyoutId);
  const containerElement = jQuery(containerId);
  hideClass(fluyoutId);
  flyoutElement.addClass('flyout-content');
  containerElement.addClass('flyout-container');
  containerElement.mouseenter(() => {
    showClass(fluyoutId);
  });
  containerElement.mouseleave(() => {
    hideClass(fluyoutId);
  });
}