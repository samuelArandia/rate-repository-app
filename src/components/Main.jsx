import React from "react";
import { View, Text} from "react-native";
import RepositoryList from "../components/RepositoryList";
import AppBar from "./AppBar";
import { Redirect, Route, Switch} from 'react-router-native';

const Main = () => {
  return (
    <View style={{ flex: 1}}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/signin" exact>
          <Text> 
            Workin on it 
          </Text>
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
}


export default Main;