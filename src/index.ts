import { createSeriesOfSwitches, prepareSwitches } from './switches';
import { createSeriesOfAttachables } from './attachable';

createSeriesOfSwitches(4, '#turn-ts-on', '#turn-js-on', '.typescript', '.javascript');
prepareSwitches('#turn-ts-on', '#turn-js-on', '.typescript', '.javascript');
prepareSwitches('#show-good', '#show-bad', '.good', '.bad');

createSeriesOfAttachables(3, '', 'flyout-error');
createSeriesOfAttachables(5, '-hint', 'flyout-intelisense');