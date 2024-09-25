import { fireEvent, render, screen } from '../../../../../tests/test-utils';
import Dropdown from '../Dropdown';
import { DropdownProps } from '../dropdown.types';

const DefaultDropdown = (props: Partial<DropdownProps>) => {
  return (
    <Dropdown
      options={[
        { id: '1', name: 'Cavendish Banana' },
        { id: '2', name: 'Red Banana' },
        { id: '3', name: 'Plantain Banana' },
        { id: '4', name: 'Burro Banana', disabled: true },
      ]}
      label={'Select a Banana'}
      placeholder={'Select an option'}
      {...props}
    />
  );
};

describe('<Dropdown />', () => {
  it('renders the label and placeholder', () => {
    render(<DefaultDropdown />);

    expect(screen.getByText('Select a Banana')).toBeInTheDocument();
    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });

  it('opens and closes the dropdown when clicked', () => {
    render(<DefaultDropdown />);

    const trigger = screen.getByText('Select an option');
    fireEvent.click(trigger);

    expect(screen.getByText('Cavendish Banana')).toBeVisible();
    expect(screen.getByText('Red Banana')).toBeVisible();
    expect(screen.getByText('Plantain Banana')).toBeVisible();
    expect(screen.getByText('Burro Banana')).toBeVisible();

    fireEvent.mouseDown(document.body);
    expect(screen.queryByText('Cavendish Banana')).not.toBeVisible();
  });

  it('disables the entire dropdown when disabled prop is true', () => {
    render(<DefaultDropdown disabled={true} />);

    const trigger = screen.getByText('Select an option');
    fireEvent.click(trigger);

    expect(screen.queryByText('Plantain Banana')).not.toBeVisible();
  });

  it('closes the dropdown when clicking outside of the component', () => {
    render(<DefaultDropdown />);

    const trigger = screen.getByText('Select an option');
    fireEvent.click(trigger);

    fireEvent.mouseDown(document);

    expect(screen.queryByText('Cavendish Banana')).not.toBeVisible();
  });

  it('calls the onSelect handler with the correct item when an option is selected', () => {
    const handleSelect = jest.fn();

    render(<DefaultDropdown onSelect={handleSelect} />);

    fireEvent.click(screen.getByText('Select an option'));

    fireEvent.click(screen.getByText('Cavendish Banana'));

    expect(handleSelect).toHaveBeenCalledWith('1');
  });

  it('renders with the correct item selected when selectedId is provided', () => {
    render(<DefaultDropdown selectedId="2" />);

    const redBananaElements = screen.queryAllByText('Red Banana');

    expect(redBananaElements[0]).toHaveTextContent('Red Banana');
  });
});
