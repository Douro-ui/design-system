import { ToggleProps } from './toggle.types';
import { ToggleThumb, ToggleTrack, ToggleLabel, ToggleContainer} from './toggle.styles';

const Toggle: React.FC<ToggleProps> = ({checked, onChange, disabled, label }) => {
  const handleToggle = () => {
    if (!disabled) {
      onChange(!checked);
    }
  }

  return (
    <ToggleContainer>
      {label && <ToggleLabel></ToggleLabel>}
      <ToggleTrack
        checked={checked}
        disabled={disabled}
        onClick={handleToggle}
        role='toggle'
        aria-checked={checked}
        aria-disabled={disabled}
        >
        <ToggleThumb checked={checked} />
      </ToggleTrack>
    </ToggleContainer>
  )
}



export default Toggle;
