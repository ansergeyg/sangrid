export function buildGrid(cellSize, cellCount, sep) {
  let x = 10;
  let y = 10;
  let grid = []
  for (let i = 1; i <= cellCount; i++) {
    grid[i] = [];
    for (let j = 1; j <= cellCount; j++) {
      grid[i][j] = {x: x, y: y, c: 0, show: {up: true, right: true, down: true, left: true}};
      y += cellSize + sep;
    }
    x += cellSize + sep;
    y = 10;
  }

  return grid;
}

export function drawGrid(grid, ctx, cellSize, cellCount) {
  for (let i = 1; i <= cellCount; i++) {
    for (let j = 1; j <= cellCount; j++) {
        drawCell(ctx, grid[i][j], cellSize, 2, 'black', 'white');        
    }
  }
}

export function drawCell(ctx, cell, cellSize, borderWidth, borderColor, backgroundColor) {
  ctx.lineWidth = borderWidth;
  drawUpBorder(ctx, cell, cellSize, borderColor);
  drawRightBorder(ctx, cell, cellSize, borderColor);
  drawLeftBorder(ctx, cell, cellSize, borderColor);
  drawDownBorder(ctx, cell, cellSize, borderColor);
  fillCell(ctx, cell, cellSize, borderWidth, backgroundColor);
}

function drawUpBorder(ctx, cell, cellSize, borderColor) {
  if (cell.show.up) {
    ctx.beginPath();
    ctx.moveTo(cell.x, cell.y);
    ctx.lineTo(cell.x + cellSize, cell.y);
    ctx.strokeStyle = borderColor;
    ctx.stroke();
  }
}

function drawRightBorder(ctx, cell, cellSize, borderColor) {
  if (cell.show.right) {
    ctx.beginPath();
    ctx.moveTo(cell.x + cellSize, cell.y);
    ctx.lineTo(cell.x + cellSize, cell.y + cellSize);
    ctx.strokeStyle = borderColor;
    ctx.stroke();
  }
}

function drawDownBorder(ctx, cell, cellSize, borderColor) {
  if (cell.show.down) {
    ctx.beginPath();
    ctx.moveTo(cell.x + cellSize, cell.y + cellSize);
    ctx.lineTo(cell.x, cell.y + cellSize);
    ctx.strokeStyle = borderColor;
    ctx.stroke();
  }
}

function drawLeftBorder(ctx, cell, cellSize, borderColor) {
  if (cell.show.left) {
    ctx.beginPath();
    ctx.moveTo(cell.x, cell.y + cellSize);
    ctx.lineTo(cell.x, cell.y);
    ctx.strokeStyle = borderColor;
    ctx.stroke();
  }
}

function fillCell(ctx, cell, cellSize, borderWidth, backgroundColor) {
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(cell.x + borderWidth / 2, cell.y + borderWidth / 2, cellSize - borderWidth, cellSize - borderWidth);
  // ctx.fillRect(x + w/2, y + w/2, d + w/2, d - w);
  // ctx.fillRect(x + w / 2, y + w / 2, d - 2 * w / 2, d - 2 * w / 2);
}
