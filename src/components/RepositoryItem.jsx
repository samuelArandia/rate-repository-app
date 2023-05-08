import React from "react";
import { View, Image, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import RepositoryStats from "./RepositoryStats";
import theme from "../theme";


const RepositoryItemsHeader = ({ ownerAvatarUrl, fullName, description, language}) => (
  <View style={{flexDirection: 'row', paddingBottom: 2}}>
    <View style={{ paddingRight: 10 }}>
      <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
    </View>
    <View style={{ flex: 1 }}>
      <StyledText fontWeight='bold'>{fullName}</StyledText>
      <StyledText >Description: {description}</StyledText>
      <StyledText style={styles.language}>Language: {language}</StyledText>
    </View>
  </View>
);


const RepositoryItem = (props ) => (
  <View key={props.id} style={styles.container}>
    <RepositoryItemsHeader {...props} />
    <RepositoryStats {...props} />
  </View>
);

export default RepositoryItem;


const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 15,
  },
  language: {
    padding: 5,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 5,
    marginVertical: 5,
    overflow: 'hidden',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginBottom: 10,
  },

});
