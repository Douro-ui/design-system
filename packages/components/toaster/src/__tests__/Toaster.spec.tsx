import { useState } from 'react';
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '../../../../../tests/test-utils';
import Toaster from '../Toaster';
import Button from '@douro-ui/button';
import { ToasterStack } from '../ToasterStack';
import { ToasterProps } from '../toaster.types';

jest.useFakeTimers();

describe('<Toaster />', () => {
  it('should renders with success type and correct position', () => {
    render(
      <Toaster typeToaster="success" position="bottom-center">
        Success Message
      </Toaster>,
    );

    expect(screen.getByText('Success Message')).toBeInTheDocument();
    const toaster = screen.getByTestId('toaster');
    expect(toaster).toHaveStyle(
      'bottom: 1rem; left: 50%; transform: translateX(-50%);',
    );
  });
  it('should disappear after the specified duration', async () => {
    waitFor(() => {
      render(
        <Toaster typeToaster="error" position="top-right" duration={1000}>
          Temporary message
        </Toaster>,
      );
    });

    expect(screen.getByText('Temporary message')).toBeInTheDocument();

    jest.advanceTimersByTime(1000);

    await waitFor(async () => {
      expect(screen.queryByText('Temporary message')).not.toBeInTheDocument();
    });

    jest.useRealTimers();
  });
  it('should disappear when CloseButton is clicked', async () => {
    const ToasterTest = () => {
      return (
        <div>
          <Toaster
            typeToaster="warning"
            position="top-right"
            showCloseButton={true}
          >
            Warning Message
          </Toaster>
        </div>
      );
    };

    render(<ToasterTest />);
    expect(screen.getByText('Warning Message')).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText('Close toaster'));
    await waitFor(() => {
      expect(screen.queryByText('Warning Message')).not.toBeInTheDocument();
    });
  });
  it('should shows toaster when button is clicked', () => {
    const ToasterTest = () => {
      const [showToaster, setShowToaster] = useState(false);

      return (
        <div>
          <Button onClick={() => setShowToaster(true)}>Show Toaster</Button>
          {showToaster && (
            <Toaster typeToaster="info" position="top-center">
              Click triggered
            </Toaster>
          )}
        </div>
      );
    };
    render(<ToasterTest />);
    expect(screen.queryByText('Click triggered')).not.toBeInTheDocument();
    fireEvent.click(screen.getByText('Show Toaster'));
    expect(screen.getByText('Click triggered')).toBeInTheDocument();
  });
});
describe('<ToasterStack />', () => {
  it('should stack multiple toasters correctly with one button click', () => {
    const ToasterStackTest = () => {
      const [toasters, setToasters] = useState<ToasterProps[]>([]);

      const addToaster = () => {
        const newToaster: ToasterProps = {
          id: `${Date.now()}`,
          typeToaster: 'info',
          isInStack: true,
          position: 'top-right',
          duration: 5000,
          children: `Toaster ${toasters.length + 1}`,
        };
        setToasters((prevToasters: ToasterProps[]) => [
          ...prevToasters,
          newToaster,
        ]);
      };

      const removeToaster = (id: string) => {
        setToasters((prevToasters: ToasterProps[]) =>
          prevToasters.filter((toaster: ToasterProps) => toaster.id !== id),
        );
      };

      return (
        <div>
          <Button onClick={addToaster}>Add Toaster</Button>
          <ToasterStack toasters={toasters} removeToaster={removeToaster} />
        </div>
      );
    };

    render(<ToasterStackTest />);

    fireEvent.click(screen.getByText('Add Toaster'));
    expect(screen.getByText('Toaster 1')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Add Toaster'));
    expect(screen.getByText('Toaster 2')).toBeInTheDocument();

    const firstToaster = screen.getByText('Toaster 1').closest('div');
    const secondToaster = screen.getByText('Toaster 2').closest('div');

    expect(firstToaster).toHaveStyle('top: 1rem; right: 1rem;');
    expect(secondToaster).toHaveStyle('top: 1rem; right: 1rem;');
  });
});
