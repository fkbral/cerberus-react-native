import styled from "styled-components/native";

const nome = "fulano";
const texto = "olá " + nome;
const texto2 = `olá ${nome}`;
const color = "green";

type AnchorButton = {
  navigateToExternalLink: () => void;
};

export const AnchorTouchableOpacity = styled.TouchableOpacity<AnchorButton>`
  background-color: ${({ theme }) => theme.colors.background};
  /* background-color: ${color}; */
  margin-bottom: 10px;
  border-radius: 4px;
  height: 42px;

  justify-content: center;
  align-items: center;
`;

export const AnchorText = styled.Text`
  font-size: 16px;
  color: #fff;
`;
