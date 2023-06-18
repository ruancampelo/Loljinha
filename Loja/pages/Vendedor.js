import Rating from '@mui/material/Rating';
import {StyleSheet, View} from 'react-native';
import { Text } from '@rneui/themed';

export default function Especificacao({route}){

    const {data} = route.params;

    return (
        <View style={styles.container}>
            <Text>Nome: {data.vendedor.nome}</Text>
            <Text>Telefone: {data.vendedor.telefone}</Text>
            <Text>E-mail: {data.vendedor.email}</Text>
            <Rating name="read-only" value={data.vendedor.nota}  precision={0.5} readOnly /> <Text>{data.vendedor.nota}/5</Text>
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