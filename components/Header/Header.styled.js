import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

// eslint-disable-next-line import/prefer-default-export
export const HeaderWrapper = styled.View`
  height: 70px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  border-bottom-width: 0.5px;
  border-bottom-color: #787878;
`;

export const StyledIcon = styled(Icon)`
  color: #282828;
  font-size: 25px;
  padding: 10px;
`;

export const Text = styled.Text`
  color: #181818;
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
`;
