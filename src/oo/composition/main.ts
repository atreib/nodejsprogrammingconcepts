/**
 * Here, we don't have acess to our MyWindow class methods
 * Through our StudioHouse class, we're using our MyWindow
 */

import { StudioHouse } from './example';

const home = new StudioHouse();

try {
  home.openBedroomWindow();
  home.openAllWindows();
} catch (err) { console.log((err as Error).message); }
