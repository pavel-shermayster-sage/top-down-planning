"use client";
import Box from "@mui/material/Box";
import MUSlider from "@mui/material/Slider";
const marks = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5].map((value) => ({
  value,
  label: value % 2 === 0 ? "" : `${value}%`,
}));

function valuetext(value: number) {
  return `${value}%`;
}
export function Slider({
  id,
  min = 0,
  max = 10,
}: {
  id: string;
  min?: number;
  max?: number;
}) {
  return (
    <Box sx={{ width: 300 }}>
      <MUSlider
        aria-label="Always visible"
        defaultValue={0}
        getAriaValueText={valuetext}
        step={1}
        marks={marks}
        min={-5}
        max={5}
        valueLabelDisplay="on"
      />
    </Box>
  );
}
