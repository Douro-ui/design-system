import styled from '@emotion/styled';

export const ToggleContainer = styled.div`
display:flex;
align-items:center;
justify-content: center;
`
export const ToggleLabel = styled.span`
margin-right: 8px;
`

export const ToggleTrack = styled.div<{ checked: boolean; disabled: boolean }>`
  position: relative;
  width: 40px;
  height: 20px;
  background-color: ${(props) => (props.checked ? '#4caf50' : '#ccc')};
  border-radius: 20px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s;
`;

export const ToggleThumb = styled.div<{ checked: boolean }>`
  content: '';
  position: absolute;
  top: 2px;
  left: ${(props) => (props.checked ? '22px' : '2px')};
  width: 16px;
  height: 16px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.3s;
`;
