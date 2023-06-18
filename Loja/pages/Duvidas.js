import Rating from '@mui/material/Rating';
import * as React from 'react';
import {View} from 'react-native';
import { Text } from '@rneui/themed';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

export default function Comentarios({route}) {

    const {data} = route.params;
    
    return (
        <View>
            {data.duvidas.map((item, index) => {
                return (
                    <List  key={index} sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        <ListItem alignItems="flex-start">
                            <ListItemText
                            primary={item.user}
                            secondary={
                                <React.Fragment>
                                {item.duvida}
                                </React.Fragment>
                            }
                        /> <Text>{item.data}</Text>
                        </ListItem>
                        <ListItem alignItems="flex-start" sx={{bgcolor: '#E0E0E0'}}>
                            <ListItemText
                            primary='Vendedor respondeu: '
                            secondary={
                                <React.Fragment>
                                {item.resposta}
                                </React.Fragment>
                            }
                        />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </List>
                )
            })}
        </View>
    )

}