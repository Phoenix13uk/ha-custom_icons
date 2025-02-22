var icons = {
  "tng_bw2":[0,0,40,40,"M 20,1 C 16.161004,5.7049953 12.758951,11.676867 10.751953,19.005859 9.3559545,24.433854 8.4359996,31.219008 8,39 h 1 c 2.883997,-5.809994 7.335146,-10.676082 12.744141,-14.205078 0.871999,-0.452 1.310094,-0.724609 1.746093,-0.72461 0.174,0 0.435095,0.18161 0.871094,0.72461 C 26.630326,28.051919 28.557002,31.567004 31,36 h 1 C 31.389001,29.486007 30.643717,23.529432 28.636719,17.648438 26.630721,11.586444 23.663996,5.7949952 20,1 Z m 0,9 c 9.925,0 18,5.383 18,12 0,6.617 -8.075,12 -18,12 C 10.075,34 2,28.617 2,22 2,15.383 10.075,10 20,10 M 20,9 C 9.507,9 1,14.82 1,22 1,29.18 9.507,35 20,35 30.493,35 39,29.18 39,22 39,14.82 30.493,9 20,9 Z "],
  }

async function getIcon(name) {
  if (!(name in icons)) {
    console.log(`Icon "${name}" not available`);
    return '';
  }

  var svgDef = icons[name];
  var primaryPath = svgDef[4];
  return {
    path: primaryPath,
    viewBox: svgDef[0] + " " + svgDef[1] + " " + svgDef[2] + " " + svgDef[3]
  }

}

async function getIconList() {
  return Object.entries(icons).map(([icon]) => ({
    name: icon
  }));
}

window.customIconsets = window.customIconsets || {};
window.customIconsets["custom"] = getIcon;

window.customIcons = window.customIcons || {};
window.customIcons["custom"] = { getIcon, getIconList };
