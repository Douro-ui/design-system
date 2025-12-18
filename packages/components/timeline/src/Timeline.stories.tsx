import type { Meta, ReactRenderer, StoryObj } from '@storybook/react-vite';
import TimelineGroup from './TimelineGroup';
import { TimelineGroupProps } from './timeline.types';
import { ThemeProvider } from '@douro-ui/react';
import { PartialStoryFn } from 'storybook/internal/types';

const optionsArray = [
  {
    date: new Date('2024-05-20'),
    mainContent: (
      <>
        <div style={{ fontWeight: 700 }}>Office Inauguration</div>
        <div>Started journey with new office</div>
      </>
    ),
    miniContent: (
      <>
        <div>
          {new Date('2024-05-20').toLocaleDateString('en-GB', {
            day: '2-digit',
          })}
        </div>
        <div>
          {new Date('2024-05-20').toLocaleDateString('en-GB', {
            month: 'long',
          })}
        </div>
        <div>
          {new Date('2024-05-20').toLocaleDateString('en-GB', {
            year: 'numeric',
          })}
        </div>
      </>
    ),
  },
  {
    date: new Date('2024-06-20'),
    mainContent: (
      <>
        <div style={{ fontWeight: 700 }}>Office Inauguration</div>
        <div>Started journey with new office</div>
      </>
    ),
    miniContent: (
      <>
        <div>
          {new Date('2024-06-20').toLocaleDateString('en-GB', {
            day: '2-digit',
          })}
        </div>
        <div>
          {new Date('2024-06-20').toLocaleDateString('en-GB', {
            month: 'long',
          })}
        </div>
        <div>
          {new Date('2024-06-20').toLocaleDateString('en-GB', {
            year: 'numeric',
          })}
        </div>
      </>
    ),
  },
  {
    date: new Date('2024-01-20'),
    mainContent: (
      <>
        <div style={{ fontWeight: 700 }}>Office Inauguration</div>
        <div>Started journey with new office</div>
      </>
    ),
    miniContent: (
      <>
        <div>
          {new Date('2024-01-20').toLocaleDateString('en-GB', {
            day: '2-digit',
          })}
        </div>
        <div>
          {new Date('2024-01-20').toLocaleDateString('en-GB', {
            month: 'long',
          })}
        </div>
        <div>
          {new Date('2024-01-20').toLocaleDateString('en-GB', {
            year: 'numeric',
          })}
        </div>
      </>
    ),
  },
  {
    date: new Date('2024-11-20'),
    mainContent: (
      <>
        <div style={{ fontWeight: 700 }}>Office Inauguration</div>
        <div>Started journey with new office</div>
      </>
    ),
    miniContent: (
      <>
        <div>
          {new Date('2024-11-20').toLocaleDateString('en-GB', {
            day: '2-digit',
          })}
        </div>
        <div>
          {new Date('2024-11-20').toLocaleDateString('en-GB', {
            month: 'long',
          })}
        </div>
        <div>
          {new Date('2024-11-20').toLocaleDateString('en-GB', {
            year: 'numeric',
          })}
        </div>
      </>
    ),
  },
  {
    date: new Date('2024-07-20'),
    mainContent: (
      <>
        <div style={{ fontWeight: 700 }}>Office Inauguration</div>
        <div>Started journey with new office</div>
      </>
    ),
    miniContent: (
      <>
        <div>
          {new Date('2024-07-20').toLocaleDateString('en-GB', {
            day: '2-digit',
          })}
        </div>
        <div>
          {new Date('2024-07-20').toLocaleDateString('en-GB', {
            month: 'long',
          })}
        </div>
        <div>
          {new Date('2024-07-20').toLocaleDateString('en-GB', {
            year: 'numeric',
          })}
        </div>
      </>
    ),
  },
  {
    date: new Date('2024-10-20'),
    mainContent: (
      <>
        <div style={{ fontWeight: 700 }}>Office Inauguration</div>
        <div>Started journey with new office</div>
      </>
    ),
    miniContent: (
      <>
        <div>
          {new Date('2024-10-20').toLocaleDateString('en-GB', {
            day: '2-digit',
          })}
        </div>
        <div>
          {new Date('2024-10-20').toLocaleDateString('en-GB', {
            month: 'long',
          })}
        </div>
        <div>
          {new Date('2024-10-20').toLocaleDateString('en-GB', {
            year: 'numeric',
          })}
        </div>
      </>
    ),
  },
  {
    date: new Date('2024-12-20'),
    mainContent: (
      <>
        <div style={{ fontWeight: 700 }}>Office Inauguration</div>
        <div>Started journey with new office</div>
      </>
    ),
    miniContent: (
      <>
        <div>
          {new Date('2024-12-20').toLocaleDateString('en-GB', {
            day: '2-digit',
          })}
        </div>
        <div>
          {new Date('2024-12-20').toLocaleDateString('en-GB', {
            month: 'long',
          })}
        </div>
        <div>
          {new Date('2024-12-20').toLocaleDateString('en-GB', {
            year: 'numeric',
          })}
        </div>
      </>
    ),
  },
  {
    date: new Date('2024-02-20'),
    mainContent: (
      <>
        <div style={{ fontWeight: 700 }}>Office Inauguration</div>
        <div>Started journey with new office</div>
      </>
    ),
    miniContent: (
      <>
        <div>
          {new Date('2024-02-20').toLocaleDateString('en-GB', {
            day: '2-digit',
          })}
        </div>
        <div>
          {new Date('2024-02-20').toLocaleDateString('en-GB', {
            month: 'long',
          })}
        </div>
        <div>
          {new Date('2024-02-20').toLocaleDateString('en-GB', {
            year: 'numeric',
          })}
        </div>
      </>
    ),
  },
  {
    date: new Date('2024-05-24'),
    mainContent: (
      <>
        <div style={{ fontWeight: 700 }}>Office Inauguration</div>
        <div>Started journey with new office</div>
      </>
    ),
    miniContent: (
      <>
        <div>
          {new Date('2024-05-24').toLocaleDateString('en-GB', {
            day: '2-digit',
          })}
        </div>
        <div>
          {new Date('2024-05-24').toLocaleDateString('en-GB', {
            month: 'long',
          })}
        </div>
        <div>
          {new Date('2024-05-24').toLocaleDateString('en-GB', {
            year: 'numeric',
          })}
        </div>
      </>
    ),
  },
];

const meta: Meta<TimelineGroupProps> = {
  title: 'Example/TimelineGroup',
  component: TimelineGroup,
  decorators: [
    (Story: PartialStoryFn<ReactRenderer, TimelineGroupProps>) => (
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
    options: optionsArray,
    horizontally: false,
  },
  argTypes: {
    options: {
      control: 'object',
    },
    horizontally: {
      control: 'boolean',
    },
  },
} satisfies Meta<TimelineGroupProps>;

export default meta;

type Story = StoryObj<TimelineGroupProps>;

export const Primary: Story = {
  args: {
    options: optionsArray,
    horizontally: false,
  },
};
