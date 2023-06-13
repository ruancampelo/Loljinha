import { View,FlatList, ActivityIndicator, Image } from 'react-native';
import React, {useEffect, useState} from 'react';
import { Text, Card, Button, Icon } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detalhes from './Detalhes'

function Produtos({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  
  const getData = async () => {
    try {
      const response = await fetch('http://localhost:3000/produtos');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Card>
              <Card.Title>{item.nome}</Card.Title>
              <Card.Divider />
              <Card.Image
                style={{ padding: 0 }}
                source={{
                  uri: item.img
                }}
              />
              <Button
                title="Comprar"
                onPress={() => navigation.navigate('Detalhes', { data: item})}/>
            </Card>
          )}
        />
      )}
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Produtos" component={Produtos} />
          <Stack.Screen name="Detalhes" component={Detalhes} />
        </Stack.Navigator>
    );
}




