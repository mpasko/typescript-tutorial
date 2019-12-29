import { hideClass, showClass } from './common';

export function createSeriesOfAttachables(capacity: number, kind: string, additionalStyle: string) {
  for (let i = 1; i <= capacity; ++i) {
    attachFlyout(`#attach${kind}-${i}`, `#flyout${kind}-${i}`, additionalStyle);
  }
}

export function attachFlyout(containerId: string, fluyoutId: string, additionalStyle: string) {
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