import React from 'react';
import { GridItem } from './GridItem';

export const Grid = () => {
  const gridStyle = {
    backgroundColor: "#f0f2f0",
    width: "80%",
    height: "80%",
    display: "grid",  
    gridTemplateColumns: "repeat(40, 1fr)",
    gridTemplateRows: "repeat(40, 1fr)",
    gap: "1px",
  };

  // Create an array of arrays containing 100x100 GridItems
  const gridItems = Array.from({ length: 40 }, (_, row) => {
    return Array.from({ length: 40 }, (_, col) => {
      return <GridItem key={`${row}-${col}`} row={row} col={col} />;
    });
  });

  return <div style={gridStyle}>{gridItems}</div>;
};