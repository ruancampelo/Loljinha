import {StyleSheet, Image,View} from 'react-native';
import { Text} from '@rneui/themed';


function Detalhes({ route, navigation }) {

    const {data} = route.params;
    console.log(data);  
    return (
        <View styles={styles.container}> 
            <Text h3>{data.nome}</Text>
            <Image style={styles.img} source={{uri: data.img}}/>
            <Text>{data.Description}</Text>
        </View>
    )
}
export default Detalhes;

const styles = StyleSheet.create({
    img: {
        width: 450,
        height: 500,
    },
});
