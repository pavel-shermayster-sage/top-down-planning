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
export function Slider({ ...rest }: any) {
  return (
    <Box sx={{ width: 300 }}>
      <MUSlider
        aria-label=""
        defaultValue={0}
        getAriaValueText={valuetext}
        step={1}
        marks={marks}
        min={-5}
        max={5}
        valueLabelDisplay="auto"
        {...rest}
      />
    </Box>
  );
}
