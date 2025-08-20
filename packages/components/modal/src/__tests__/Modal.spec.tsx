import { useState } from 'react';
import { fireEvent, render, screen } from '../../../../../tests/test-utils';
import Modal from '../Modal';
import Button, { ButtonType } from '@douro-ui/button';
import { ModalProps, ShirtSize } from '../modal.types';
import { ModalHeader } from '../modalTypes/ModalHeader';

const ModalWithButton = ({ onClose, ...props }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
    setIsOpen(false);
  };

  return (
    <>
      <Button typeBtn={ButtonType.Secondary} onClick={() => setIsOpen(true)}>
        Open modal
      </Button>
      <Modal
        data-testid="modal-id"
        isOpen={isOpen}
        childrenBody="Lorem ipsum dolor sit amet."
        onClose={handleClose}
        {...props}
      />
    </>
  );
};

describe('<Modal />', () => {
  it('renders correctly', () => {
    render(<ModalWithButton onClose={() => {}} size={ShirtSize.lg} />);

    fireEvent.click(screen.getByText('Open modal'));

    expect(screen.getByText('Lorem ipsum dolor sit amet.')).toBeInTheDocument();
    expect(screen.getByTestId('modal-id')).toHaveStyle('width: 80vw');
  });

  it('renders header when headerTitle is provided', () => {
    render(
      <ModalWithButton
        headerTitle="Modal Header"
        onClose={() => {}}
        size={ShirtSize.sm}
      />,
    );

    fireEvent.click(screen.getByText('Open modal'));

    expect(screen.getByText('Modal Header')).toBeInTheDocument();
    expect(screen.getByTestId('modal-id')).toHaveStyle('width: 40vw');
  });

  it('does not render footer when childrenFooter is not provided', () => {
    render(
      <ModalWithButton onClose={() => {}} headerTitle="No Footer Modal" />,
    );

    fireEvent.click(screen.getByText('Open modal'));

    expect(document.querySelector('.modal-footer')).not.toBeInTheDocument();
  });

  it('renders footer', () => {
    render(
      <ModalWithButton
        childrenFooter={<Button>Confirm</Button>}
        onClose={() => {}}
      />,
    );

    fireEvent.click(screen.getByText('Open modal'));

    expect(screen.getByText('Confirm')).toBeInTheDocument();
    expect(document.querySelector('.modal-footer')).toBeInTheDocument();
  });

  it('does not close modal when clicking inside modal content (stopPropagation)', () => {
    render(<ModalWithButton onClose={jest.fn()} headerTitle="Test Header" />);

    fireEvent.click(screen.getByText('Open modal'));

    const modalContent = screen.getByTestId('modal-content');
    fireEvent.click(modalContent);

    expect(screen.getByText('Test Header')).toBeInTheDocument();
  });

  it('closes the modal when clicking outside the modal (overlay click)', () => {
    const onCloseMock = jest.fn();

    render(<ModalWithButton onClose={onCloseMock} size={ShirtSize.md} />);

    fireEvent.click(screen.getByText('Open modal'));

    const overlay = screen.getByTestId('modal-overlay');
    fireEvent.mouseDown(overlay);
    fireEvent.mouseUp(overlay);
    fireEvent.click(overlay);

    expect(onCloseMock).toHaveBeenCalled();
  });

  it('closes the modal when the Escape key is pressed', () => {
    render(<ModalWithButton onClose={() => {}} size={ShirtSize.md} />);

    fireEvent.click(screen.getByText('Open modal'));

    const bodyElement = screen.getByText('Lorem ipsum dolor sit amet.');

    expect(bodyElement).toBeInTheDocument();
    expect(screen.getByTestId('modal-id')).toHaveStyle('width: 60vw');

    fireEvent.keyDown(window, { key: 'Escape', code: 'Escape', charCode: 27 });

    expect(bodyElement).not.toBeInTheDocument();
  });
});

describe('<ModalHeader />', () => {
  it('calls onClose when close button is clicked', () => {
    const onCloseMock = jest.fn();

    render(
      <ModalHeader
        headerTitle="Header Text"
        onClose={onCloseMock}
        size={ShirtSize.md}
      />,
    );

    const button = screen.getByLabelText('Close modal');
    fireEvent.click(button);

    expect(onCloseMock).toHaveBeenCalled();
  });
});
