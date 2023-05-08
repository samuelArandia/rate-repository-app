import React from "react";
import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import theme from "../theme";
import Constants from "expo-constants";
import { Link } from "react-router-native";
import { ScrollView } from "react-native";
import { useLocation } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 20,
    paddingLeft: 10,
    flexDirection: 'row',

  },
  Text: { 
    color: theme.appBar.textSecondary,
    paddingHorizontal: 10,
  },
  Scroll:{
    paddingBottom: 15,
  },
  active: {
    color: theme.appBar.textPrimary,
  }
});

const AppBarTab = ({ children, to }) => {
  const { pathname } = useLocation();
  const active = pathname === to;

  const textStyles = [
    styles.Text,
    active && styles.active,
  ]

  return (
    <Link to={to}>
      <StyledText fontWeight={active ? 'bold' : 'normal'} style={textStyles}>
        {children}
      </StyledText>
    </Link>
  );
};


const AppBar = () => {
  return (
    <View style={styles.container}>
      <View>
        <ScrollView horizontal>
          <AppBarTab to="/">
            Repositories
          </AppBarTab>
          <AppBarTab to="/signin">
            Sign In
          </AppBarTab>
        </ScrollView>
      </View>
    </View>
  );
};

export default AppBar;

