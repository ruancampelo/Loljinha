import {StyleSheet, Image, View, Button} from 'react-native';
import { Text } from '@rneui/themed';


function Detalhes({ route, navigation }) {
    const {data} = route.params;

    return (
        <View style={styles.container}> 
            <Text h4>{data.nome}</Text>
            <Image style={styles.img} source={{uri: data.img}}/>
            <Text>{data.Description}</Text>
            <View style={styles.button}>
                <Button title='Especificações' onPress={() => navigation.navigate('Especificacao', { data: data})}></Button>
                <Button title='Vendedor' onPress={() => navigation.navigate('Vendedor', { data: data})}></Button>
                <Button title='Comentarios' onPress={() => navigation.navigate('Comentarios', { data: data})}></Button>
                <Button title='Duvidas' onPress={() => navigation.navigate('Duvidas', { data: data})}></Button>
            </View>
            
        </View>
    )
}
export default Detalhes;

const styles = StyleSheet.create({
    img: {
        width: 350,
        height: 400,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
    }
});
