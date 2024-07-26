import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { ReactElement, ReactNode } from 'react';
import { ThemeProvider } from '@douro-ui/react';

export const wrapper = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
): RenderResult => {
  return render(ui, { wrapper, ...options });
};

export * from '@testing-library/react';
export { customRender as render };
