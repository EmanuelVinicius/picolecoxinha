import firebase from 'firebase';
import * as React from 'react';
import { View, Text, Button } from 'react-native';

export function ConfigGeralScreen (props: any) {
    return (
      <View>
         <Button type="clear" title="Sair"  onPress={() => {
                firebase.auth().signOut();
                props.navigation.navigate('login')
            }} />

      </View>
    );
}
