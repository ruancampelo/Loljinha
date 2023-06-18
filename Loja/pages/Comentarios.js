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
            {data.comentarios.map((item, index) => {
                return (
                    <List  key={index} sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                            primary={item.user}
                            secondary={
                                <React.Fragment>
                                {item.comentario}
                                <Rating name="read-only" value={item.nota}  precision={0.5} readOnly />
                                </React.Fragment>
                            }
                        /> <Text>{item.data}</Text>
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </List>
                )
            })}
        </View>
    )

}