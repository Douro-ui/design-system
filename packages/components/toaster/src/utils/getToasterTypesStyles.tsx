import { useTheme } from '@douro-ui/react';
import {
  SuccessToaster,
  InfoToaster,
  WarningToaster,
  ErrorToaster,
} from '../toasterTypes';

interface ToasterStyles {
  color: string;
  backgroundColor: string;
  ToasterComponent: typeof SuccessToaster;
}

const toasterTypes = {
  success: SuccessToaster,
  info: InfoToaster,
  warning: WarningToaster,
  error: ErrorToaster,
};

export const getToasterTypesStyles = (
  typeToaster: keyof typeof toasterTypes,
): ToasterStyles => {
  const theme = useTheme();

  const toasterColors = {
    success: theme.colors.brand.white,
    error: theme.colors.brand.white,
    warning: theme.colors.brand.white,
    info: theme.colors.brand.white,
  };
  const toasterBackgroundColors = {
    success: theme.colors.extended.green.shade50,
    error: theme.colors.extended.red.shade50,
    warning: theme.colors.extended.yellow.shade50,
    info: theme.colors.extended.blue.shade50,
  };
  const ToasterComponent = toasterTypes[typeToaster] || SuccessToaster;
  const toasterColor = toasterColors[typeToaster] || theme.colors.brand.white;
  const backgroundColor =
    toasterBackgroundColors[typeToaster] || theme.colors.extended.green.shade50;

  return {
    color: toasterColor,
    backgroundColor: backgroundColor,
    ToasterComponent,
  };
};
