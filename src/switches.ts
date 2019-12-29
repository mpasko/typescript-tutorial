import { hideClass, showClass } from './common';

export function prepareSwitches(onBtn: string, offBtn: string, onClass: string, offClass: string) {
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

export function createSeriesOfSwitches(count: number, onName: string, offName: string, onClass: string, offClass: string) {
  for (let i=1; i<=count; ++i) {
    prepareSwitches(`${onName}-${i}`, `${offName}-${i}`, `${onClass}-${i}`, `${offClass}-${i}`);
  }
}