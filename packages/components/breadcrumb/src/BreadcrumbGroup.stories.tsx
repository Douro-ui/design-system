import { Meta, StoryObj, StoryFn } from '@storybook/react';
import BreadcrumbGroup from './BreadcrumbGroup';
import Breadcrumb from './Breadcrumb';
import { ThemeProvider } from '@douro-ui/react';
import { ReactElement } from 'react';

const meta: Meta<typeof BreadcrumbGroup> = {
  title: 'Example/BreadcrumbGroup',
  component: BreadcrumbGroup,
  decorators: [
    (Story: StoryFn): ReactElement => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BreadcrumbGroup>;

const BreadcrumbGroupWithHooks = (): ReactElement => {
  return (
    <BreadcrumbGroup>
      <Breadcrumb>Home</Breadcrumb>
      <Breadcrumb>Category</Breadcrumb>
      <Breadcrumb>Product</Breadcrumb>
    </BreadcrumbGroup>
  );
};

export const Primary: Story = {
  render: () => <BreadcrumbGroupWithHooks />,
};
