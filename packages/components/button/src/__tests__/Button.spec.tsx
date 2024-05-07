import { render, screen } from "@testing-library/react"
import Button from '../Button';

describe('<Button />', () => {
    it('should render properly', () => {
        render(<Button label="Foo" />);
        
        expect(screen.getByText("Foo")).toBeInTheDocument();
    });
});
