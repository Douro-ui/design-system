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
    render(<ModalWithButton onClose={() => {}} />);

    fireEvent.click(screen.getByText('Open modal'));

    expect(screen.getByText('Lorem ipsum dolor sit amet.')).toBeInTheDocument();
  });

  it('renders header when headerTitle is provided', () => {
    render(<ModalWithButton headerTitle="Modal Header" onClose={() => {}} />);

    fireEvent.click(screen.getByText('Open modal'));

    expect(screen.getByText('Modal Header')).toBeInTheDocument();
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
    render(<ModalWithButton onClose={() => {}} />);

    fireEvent.click(screen.getByText('Open modal'));

    expect(screen.getByText('Lorem ipsum dolor sit amet.')).toBeInTheDocument();

    fireEvent.keyDown(window, { key: 'Escape', code: 'Escape', charCode: 27 });

    expect(
      screen.queryByText('Lorem ipsum dolor sit amet.'),
    ).not.toBeInTheDocument();
  });
});
