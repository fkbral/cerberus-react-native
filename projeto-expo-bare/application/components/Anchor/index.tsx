import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import * as S from "./styles";

type AnchorProps = TouchableOpacityProps & {
  navigation: any;
};

export const Anchor = ({ navigation, children, ...rest }: AnchorProps) => {
  // return (
  //   <TouchableOpacity style={styles.link} {...rest}>
  //     <Text style={styles.linkText}>{children}</Text>
  //   </TouchableOpacity>
  // );

  return (
    <S.AnchorTouchableOpacity {...rest}>
      <S.AnchorText>{children}</S.AnchorText>
    </S.AnchorTouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    backgroundColor: "steelblue",
    marginBottom: 10,
    borderRadius: 4,
    height: 42,

    justifyContent: "center",
    alignItems: "center",
  },
  linkText: {
    fontSize: 16,
    color: "#fff",
  },
});
