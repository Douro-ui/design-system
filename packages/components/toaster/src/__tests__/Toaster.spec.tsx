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
import { ToasterProvider, useToaster } from '../ToasterProvider';

jest.useFakeTimers();

describe('<Toaster />', () => {
  it('should renders with default type and correct position', () => {
    render(<Toaster position="bottom-center">Success Message</Toaster>);

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

  it('should close toaster when clicked if dismissible is true', async () => {
    const ToasterTest = () => {
      return (
        <div>
          <Toaster typeToaster="info" position="top-center" dismissible={true}>
            Click to dismiss
          </Toaster>
        </div>
      );
    };

    render(<ToasterTest />);

    expect(screen.getByText('Click to dismiss')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('toaster'));

    await waitFor(() => {
      expect(screen.queryByText('Click to dismiss')).not.toBeInTheDocument();
    });
  });

  it('should not close toaster when clicked if dismissible is false', async () => {
    const ToasterTest = () => {
      return (
        <div>
          <Toaster typeToaster="info" position="top-center" dismissible={false}>
            Cannot dismiss
          </Toaster>
        </div>
      );
    };

    render(<ToasterTest />);

    expect(screen.getByText('Cannot dismiss')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('toaster'));

    expect(screen.getByText('Cannot dismiss')).toBeInTheDocument();
  });

  it('should render ProgressBar when showProgressBar is true and duration is greater than 0', () => {
    render(
      <Toaster
        typeToaster="info"
        position="top-center"
        duration={5000}
        showProgressBar={true}
      >
        Progress Toaster
      </Toaster>,
    );

    expect(screen.getByText('Progress Toaster')).toBeInTheDocument();
    const progressBar = screen.getByTestId('progress-bar');
    expect(progressBar).toBeInTheDocument();
  });

  it('should not render ProgressBar when showProgressBar is false', () => {
    render(
      <Toaster
        typeToaster="info"
        position="top-center"
        duration={5000}
        showProgressBar={false}
      >
        Progress Toaster
      </Toaster>,
    );

    const progressBar = screen.queryByTestId('progress-bar');
    expect(progressBar).not.toBeInTheDocument();
  });

  it('should not render ProgressBar when duration is 0', () => {
    render(
      <Toaster
        typeToaster="info"
        position="top-center"
        duration={0}
        showProgressBar={true}
      >
        Progress Toaster
      </Toaster>,
    );

    const progressBar = screen.queryByTestId('progress-bar');
    expect(progressBar).not.toBeInTheDocument();
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
          showCloseButton: true,
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

    const firstToaster = screen
      .getByText('Toaster 1')
      .closest('[data-testid="toaster"]');
    const secondToaster = screen
      .getByText('Toaster 2')
      .closest('[data-testid="toaster"]');

    expect(firstToaster).toHaveStyle('top: 1rem; right: 1rem;');
    expect(secondToaster).toHaveStyle('top: 1rem; right: 1rem;');

    const toaster1 = screen
      .getByText('Toaster 1')
      .closest('[data-testid="toaster"]');

    const closeButton1 = toaster1!.querySelector(
      'button[aria-label="Close toaster"]',
    );
    if (closeButton1) {
      fireEvent.click(closeButton1);
    }
    expect(screen.queryByText('Toaster 1')).not.toBeInTheDocument();
    expect(screen.getByText('Toaster 2')).toBeInTheDocument();
  });
});

const TestComponent = () => {
  const { addToaster } = useToaster();

  const handleAddToaster = () => {
    const toaster: ToasterProps = {
      id: `${Date.now()}`,
      typeToaster: 'info',
      position: 'top-right',
      duration: 5000,
      children: 'Test Toaster',
      showCloseButton: true,
    };
    addToaster(toaster);
  };

  return (
    <div>
      <button onClick={handleAddToaster}>Add Toaster</button>
    </div>
  );
};

describe('<ToasterProvider />', () => {
  it('should add a toaster and display it', () => {
    render(
      <ToasterProvider>
        <TestComponent />
      </ToasterProvider>,
    );

    fireEvent.click(screen.getByText('Add Toaster'));

    expect(screen.getByText('Test Toaster')).toBeInTheDocument();
  });

  it('should not exceed maximum of 3 toasters', () => {
    render(
      <ToasterProvider>
        <TestComponent />
      </ToasterProvider>,
    );

    for (let i = 0; i < 4; i++) {
      fireEvent.click(screen.getByText('Add Toaster'));
    }

    const toasters = screen.getAllByText('Test Toaster');
    expect(toasters.length).toBe(3);
  });

  it('should remove a toaster when the close button is clicked', () => {
    render(
      <ToasterProvider>
        <TestComponent />
      </ToasterProvider>,
    );

    fireEvent.click(screen.getByText('Add Toaster'));

    const toaster = screen
      .getByText('Test Toaster')
      .closest('[data-testid="toaster"]');
    expect(toaster).toBeInTheDocument();

    const closeButton = toaster!.querySelector(
      'button[aria-label="Close toaster"]',
    );
    if (closeButton) {
      fireEvent.click(closeButton);
    }

    expect(screen.queryByText('Test Toaster')).not.toBeInTheDocument();
  });
});
