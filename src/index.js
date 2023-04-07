import * as gridLib from './grid.js';

export function init(userConfig) {
  let defaultConfig = {size: 111};
  const config = Object.assign(defaultConfig, userConfig);

  document.addEventListener('DOMContentLoaded', (event) => {

    const canvas = document.getElementById(config.canvasId);

    if (canvas.getContext) {
      console.log(config);
      const ctx = canvas.getContext("2d");
      let grid = gridLib.buildGrid(config.cellSize, config.cellCount, config.sepDist);
      gridLib.drawGrid(ctx, grid, config.cellSize, config.cellCount);
    }
  });  
}
