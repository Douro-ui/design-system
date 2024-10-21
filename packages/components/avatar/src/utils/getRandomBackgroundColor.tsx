import { Theme } from '@douro-ui/react';

export const getRandomColor = (
  theme: Theme,
): { default: string; hover: string; active: string } => {
  const colorOptions = [
    theme.colors.extended.blue,
    theme.colors.extended.yellow,
    theme.colors.extended.green,
    theme.colors.extended.orange,
    theme.colors.extended.red,
    theme.colors.extended.purple,
  ];

  const randomIndex = Math.floor(Math.random() * colorOptions.length);
  const selectedColor = colorOptions[randomIndex];

  return {
    default: selectedColor.shade90,
    hover: selectedColor.shade80,
    active: selectedColor.shade70,
  };
};
