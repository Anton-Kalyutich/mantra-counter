import { FlatList } from "react-native";
import { Avatar, ListItem } from 'react-native-elements';

const DirectoryScreen = (props) => {
    
    const renderDirectoryItem = ({ item: practice }) => {
        return (
            <ListItem>
                <Avatar source={practice.image} rounded />
                <ListItem.Content>
                    <ListItem.Title>{practice.name}</ListItem.Title>
                    <ListItem.Subtitle>{practice.description}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        )
    }

    return (
        <FlatList
            data={props.practices}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    )
}

export default DirectoryScreen;