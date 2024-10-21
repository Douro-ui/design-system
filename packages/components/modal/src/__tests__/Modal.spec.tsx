import { useState } from 'react';
import { fireEvent, render, screen } from '../../../../../tests/test-utils';
import Modal from '../Modal';
import Button from '@douro-ui/button';
import { ModalProps } from '../modal.types';

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
      <Button typeBtn="secondary" size="md" onClick={() => setIsOpen(true)}>
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
    render(<ModalWithButton onClose={() => {}} size="lg" />);

    fireEvent.click(screen.getByText('Open modal'));

    expect(screen.getByText('Lorem ipsum dolor sit amet.')).toBeInTheDocument();
    expect(screen.getByTestId('modal-id')).toHaveStyle('width: 80vw');
  });

  it('renders header when headerTitle is provided', () => {
    render(
      <ModalWithButton
        headerTitle="Modal Header"
        onClose={() => {}}
        size="sm"
      />,
    );

    fireEvent.click(screen.getByText('Open modal'));

    expect(screen.getByText('Modal Header')).toBeInTheDocument();
    expect(screen.getByTestId('modal-id')).toHaveStyle('width: 40vw');
  });

  it('renders footer', () => {
    render(
      <ModalWithButton
        childrenFooter={
          <Button typeBtn="primary" size="md">
            Confirm
          </Button>
        }
        onClose={() => {}}
      />,
    );

    fireEvent.click(screen.getByText('Open modal'));

    expect(screen.getByText('Confirm')).toBeInTheDocument();
  });

  it('closes the modal when the Escape key is pressed', () => {
    render(<ModalWithButton onClose={() => {}} size="md" />);

    fireEvent.click(screen.getByText('Open modal'));

    const bodyElement = screen.getByText('Lorem ipsum dolor sit amet.');

    expect(bodyElement).toBeInTheDocument();
    expect(screen.getByTestId('modal-id')).toHaveStyle('width: 60vw');

    fireEvent.keyDown(window, { key: 'Escape', code: 'Escape', charCode: 27 });

    expect(bodyElement).not.toBeInTheDocument();
  });

  it('renders custom icon when headerIcon is provided', () => {
    render(
      <ModalWithButton
        headerTitle="Modal Header"
        onClose={() => {}}
        size="sm"
        headerIcon="icon.svg"
      />,
    );

    fireEvent.click(screen.getByText('Open modal'));

    expect(screen.getByText('Modal Header')).toBeInTheDocument();

    const iconElement = screen.getByAltText('Close Icon');
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveAttribute('src', 'icon.svg');
  });
});
