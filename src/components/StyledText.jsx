import React from "react";  
import { Text, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  text : { 
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
  }, 
  bold: { 
    fontWeight: theme.fontWeights.bold,
  },
  blue: { 
    color: theme.colors.primary,
  }, 
  big: { 
    fontSize: theme.fontSizes.subheading,
  }, 
  small: {
    fontSize: theme.fontSizes.small,
  },
  textAlignCenter: {
    textAlign: 'center',
  },
});

export default function StyledText ({ align, children, color, fontSize, fontWeight, style, ...restOfprops }) {
  const textStyle = [
    styles.text,
    color ==='primary' && styles.colorPrimary,
    color ==='secondary' && styles.colorSecondary,
    fontSize ==='subheading' && styles.subheading,
    fontWeight ==='bold' && styles.bold,
    align ==='center' && styles.textAlignCenter,
    style,
  ];
  return <Text style={textStyle} {...restOfprops}>{children}</Text>;
}


