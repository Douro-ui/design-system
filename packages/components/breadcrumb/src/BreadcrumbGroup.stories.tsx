import { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import BreadcrumbGroup from './BreadcrumbGroup';
import { ThemeProvider } from '@douro-ui/react';
import type { BreadcrumbGroupProps } from './breadcrumb.types';
import { PartialStoryFn } from 'storybook/internal/types';
import { expect, userEvent, within } from '@storybook/test';

const meta: Meta<typeof BreadcrumbGroup> = {
  title: 'Example/BreadcrumbGroup',
  component: BreadcrumbGroup,
  decorators: [
    (Story: PartialStoryFn<ReactRenderer, BreadcrumbGroupProps>) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    breadcrumbs: ['Home', 'Product', 'Category'],
    separator: '/',
    iconMobile: '<',
  },
  argTypes: {
    breadcrumbs: {
      control: {
        type: 'object',
      },
    },
    separator: {
      control: 'object',
    },
    iconMobile: {
      control: 'object',
    },
  },
} satisfies Meta<BreadcrumbGroupProps>;

export default meta;

type Story = StoryObj<BreadcrumbGroupProps>;

export const SimpleBreadcrumb: Story = {
  args: {
    breadcrumbs: ['Home', 'Product', 'Category'],
    separator: '>',
  },
};

export const BiggerBreadcrumb: Story = {
  args: {
    breadcrumbs: [
      'Home1',
      'Product1',
      'Category1',
      'Home2',
      'Product2',
      'Category2',
      'Home3',
      'Product3',
      'Category3',
      'Home4',
      'Product4',
      'Category4',
      'Home5',
      'Product5',
      'Category5',
      'Home6',
      'Product6',
      'Category6',
      'Home7',
      'Product7',
      'Category7',
      'Home8',
      'Product8',
      'Category8',
      'Home9',
      'Product9',
      'Category9',
      'Home10',
      'Product10',
      'Category10',
      'Home11',
      'Product11',
      'Category11',
      'Home12',
      'Product12',
      'Category12',
      'Home13',
      'Product13',
      'Category13',
      'Home14',
      'Product14',
      'Category14',
      'Home15',
      'Product15',
      'Category15',
      'Home16',
      'Product16',
      'Category16',
      'Home17',
      'Product17',
      'Category17',
    ],
    separator: '/',
    iconMobile: '<',
  },
};

export const BiggerTextBreadcrumb: Story = {
  args: {
    breadcrumbs: [
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Lorem ipsum dolor sit amet',
    ],
    separator: '/',
  },
};

SimpleBreadcrumb.play = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);
  const breadcrumb = canvas.getByLabelText('breadcrumb');

  expect(breadcrumb).toHaveTextContent('Home>Product>Category');
  expect(breadcrumb).toHaveStyle('pointer-events: auto');
  expect(breadcrumb).toHaveStyle('align-items: center');
  expect(breadcrumb).toHaveStyle('justify-content: normal');
  expect(breadcrumb).toHaveStyle('position: static');
  expect(breadcrumb).toHaveStyle('cursor: auto');
  expect(breadcrumb).toHaveStyle('display: flex');
  expect(breadcrumb).toHaveStyle('margin-right: 0px');
  expect(breadcrumb).toHaveStyle('width: 202.047px');
  expect(breadcrumb).toHaveStyle('max-width: none');
  expect(breadcrumb).toHaveStyle('margin-right: 0px');
  expect(breadcrumb).toHaveStyle('max-width: none');

  const product = canvas.getByText('Product');
  const home = canvas.getByText('Home');
  userEvent.click(product);
  expect(breadcrumb).toHaveTextContent('Home>Product');
  userEvent.click(home);
  expect(home).toHaveTextContent('Home');
};

BiggerBreadcrumb.play = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);
  const breadcrumb = canvas.getByLabelText('breadcrumb');

  expect(breadcrumb).toHaveTextContent(
    'Home1/Product1/Category1/Home2/Product2/Category2/Home3/Product3/Category3/Home4/Product4/Category4/Home5/Product5/Category5/Home6/Product6/Category6/Home7/Product7/Category7/Home8/Product8/Category8/Home9/Product9/Category9/Home10/Product10/Category10/Home11/Product11/Category11/Home12/Product12/Category12/Home13/Product13/Category13/Home14/Product14/Category14/Home15/Product15/Category15/Home16/Product16/Category16/Home17/Product17/Category17',
  );
  expect(breadcrumb).toHaveStyle('pointer-events: auto');
  expect(breadcrumb).toHaveStyle('align-items: center');
  expect(breadcrumb).toHaveStyle('justify-content: normal');
  expect(breadcrumb).toHaveStyle('position: static');
  expect(breadcrumb).toHaveStyle('cursor: auto');
  expect(breadcrumb).toHaveStyle('display: flex');
  expect(breadcrumb).toHaveStyle('margin-right: 0px');
  expect(breadcrumb).toHaveStyle('width: 4133.61px');
  expect(breadcrumb).toHaveStyle('max-width: none');
  expect(breadcrumb).toHaveStyle('margin-right: 0px');
  expect(breadcrumb).toHaveStyle('max-width: none');

  const product = canvas.getByText('Product1');
  const home = canvas.getByText('Home1');
  userEvent.click(product);
  expect(breadcrumb).toHaveTextContent(
    'Home1/Product1/Category1/Home2/Product2/Category2/Home3/Product3/Category3/Home4/Product4/Category4/Home5/Product5/Category5/Home6/Product6/Category6/Home7/Product7/Category7/Home8/Product8/Category8/Home9/Product9/Category9/Home10/Product10/Category10/Home11/Product11/Category11/Home12/Product12/Category12/Home13/Product13/Category13/Home14/Product14/Category14/Home15/Product15/Category15/Home16/Product16/Category16/Home17/Product17/Category17',
  );
  userEvent.click(home);
  expect(home).toHaveTextContent('Home');
};

BiggerTextBreadcrumb.play = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);
  const breadcrumb = canvas.getByLabelText('breadcrumb');

  expect(breadcrumb).toHaveTextContent(
    'Lorem ipsum dolor sit amet/Lorem ipsum dolor sit amet, consectetur adipiscing.../Lorem ipsum dolor sit ame',
  );
  expect(breadcrumb).toHaveStyle('pointer-events: auto');
  expect(breadcrumb).toHaveStyle('align-items: center');
  expect(breadcrumb).toHaveStyle('justify-content: normal');
  expect(breadcrumb).toHaveStyle('position: static');
  expect(breadcrumb).toHaveStyle('cursor: auto');
  expect(breadcrumb).toHaveStyle('display: flex');
  expect(breadcrumb).toHaveStyle('margin-right: 0px');
  expect(breadcrumb).toHaveStyle('width: 748.656px');
  expect(breadcrumb).toHaveStyle('max-width: none');
  expect(breadcrumb).toHaveStyle('margin-right: 0px');
  expect(breadcrumb).toHaveStyle('max-width: none');

  const product = canvas.getByText(
    'Lorem ipsum dolor sit amet, consectetur adipiscing...',
  );
  const home = canvas.getAllByText('Lorem ipsum dolor sit amet')[0];
  userEvent.click(product);
  expect(breadcrumb).toHaveTextContent(
    'Lorem ipsum dolor sit amet/Lorem ipsum dolor sit amet, consectetur adipiscing.../Lorem ipsum dolor sit amet',
  );
  userEvent.click(home);
  expect(home).toHaveTextContent('Lorem ipsum dolor sit amet');
};
