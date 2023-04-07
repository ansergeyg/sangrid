export function buildGrid(cellSize, cellCount, sepDist) {
  let grid = [];
  let dx = 0;
  let dy = 0;
  let sepx = 0;
  let sepy = 0

  for (let i = 0; i < cellCount; i++) {
    grid[i] = [];
    for (let j = 0; j < cellCount; j++) {
      grid[i][j] = {x: sepx + dx, y: sepy + dy, c: 0};
      dy += cellSize;
      sepy += sepDist;
    }
    dx += cellSize;
    sepx += sepDist;
    sepy = 0;
    dy = 0;
  }

  return grid;
}

export function drawGrid(ctx, grid, cellSize, cellCount) {
  for (let i = 0; i < cellCount; i++) {
    for (let j = 0; j < cellCount; j++) {
      drawCell(ctx, grid[i][j].x, grid[i][j].y, cellSize);
    }
  }
}

function drawCell(ctx, x, y, cellSize) {
  ctx.fillStyle = "black";
  ctx.fillRect(x , y, cellSize, cellSize);
  ctx.fillStyle = "white";
  ctx.fillRect(x + 1, y + 1, cellSize - 2, cellSize - 2);
}

