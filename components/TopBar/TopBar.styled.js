import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

// eslint-disable-next-line import/prefer-default-export
export const TopBarWrapper = styled.View`
  height: 65px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  border-bottom-width: 0.5px;
  border-bottom-color: #787878;
`;

export const StyledIcon = styled(Icon)`
  color: #787878;
  font-size: 25px;
  padding: 10px;
`;
