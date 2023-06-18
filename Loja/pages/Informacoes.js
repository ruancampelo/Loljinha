import {StyleSheet, View, Text} from 'react-native';

export default function Informacoes(){
    return (
        <View style={styles.container}>
            <Text>Versao: 0.0.1</Text>
            <Text>Aplicativo de loja online</Text>
            <Text>Tecnologias usadas: react, javascript, react-native, react-elements,react navigation</Text>
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
