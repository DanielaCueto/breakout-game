"use strict";




function drawBlocks() {
  for (let block of blocks) {
    drawRectangle(context, block.x, block.y, block.w, block.h, "#000");
  }
}

function createBlocks(numberOfBlocks) {
  let blocks = [];
  const numberOfBlocksPerRow = Math.floor(
    (canvasW - 2 * outerMargin) / (blockWidth + blockMarginX)
  );
  let totalRowWidth =
    Math.min(numberOfBlocksPerRow, numberOfBlocks) *
      (blockWidth + blockMarginX) -
    blockMarginX;

  let remainingRowSpace = canvasW - 2 * outerMargin - totalRowWidth;
  let xOfFirstBlock = outerMargin + remainingRowSpace / 2;
  console.log({
    numberOfBlocksPerRow,
    totalRowWidth,
    remainingRowSpace,
    xOfFirstBlock,
  });
  let x = xOfFirstBlock;
  let y = outerMargin;
  let numBlocksCurrentRow = 0;
  for (let i = 0; i < numberOfBlocks; i++) {
    let block = {
      x: x,
      y: y,
      w: blockWidth,
      h: blockHeight,
    };
    blocks.push(block);
    numBlocksCurrentRow++;
    if (numBlocksCurrentRow >= numberOfBlocksPerRow) {
      const blocksRemaining = numberOfBlocks - i - 1;
      // Comprobamos si la nueva linea va a ser incompleta
      if (blocksRemaining < numberOfBlocksPerRow) {
        totalRowWidth =
          blocksRemaining * (blockWidth + blockMarginX) - blockMarginX;
        remainingRowSpace = canvasW - 2 * outerMargin - totalRowWidth;
        xOfFirstBlock = outerMargin + remainingRowSpace / 2;
      }
      //queremos forzar una nueva linea
      numBlocksCurrentRow = 0;
      y += blockHeight + blockMarginY;
      x = xOfFirstBlock;
    } else {
      x += blockWidth + blockMarginX;
    }
  }
  return blocks;
}
