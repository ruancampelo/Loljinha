import {StyleSheet, View} from 'react-native';
import { Text } from '@rneui/themed';

export default function Especificacao({route}){
    const {data} = route.params;

    return (
        <View style={styles.container}>
            <Text h5>{data.nome}</Text>
            {data.espec == null ? <Text>Sem dados</Text> : Object.entries(data.espec).map(([key, value]) => {
                return <Text key={key}>{key}: {value}</Text>
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1vh'
    },
});
