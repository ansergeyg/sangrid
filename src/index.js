import * as gridLib from './grid.js';

export function init(userConfig) {
  let defaultConfig = {
    'canvasId': 'tutorial',
    'width': 200,
    'height': 200,
    'cellCount': 30,
    'cellSize': 20,
    'sepDist': 1,
};
  const config = Object.assign(defaultConfig, userConfig);

  document.addEventListener('DOMContentLoaded', (event) => {

  const canvas = document.getElementById(config.canvasId);

    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
      let grid = gridLib.buildGrid(config.cellSize, config.cellCount, config.sepDist);
      gridLib.drawGrid(ctx, grid, config.cellSize, config.cellCount);
    }
  });  
}
