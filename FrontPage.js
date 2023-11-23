import { styles } from './styles';
import * as React from 'react';
import { Icon, Text, withTheme } from 'react-native-paper';
import { Pressable, View } from 'react-native';

function FrontPage({ navigation }) {
    return (
        <>
            <View style={styles.container}>
                <View style={[styles.row, { justifyContent: "center" }]}>
                    <Text style={[styles.title, styles.quicksand]}>Simple Password Manager</Text>
                </View>
                <View style={[styles.row, { justifyContent: "space-evenly", marginTop: 15 }]}>
                    <View style={{ flexDirection: "column" }}>
                        <Pressable style={[styles.square, { justifyContent: "center", alignItems: 'center' }]}
                            onPress={() => navigation.navigate('Details')}>
                            <Icon color="black" source="plus" size={55}  />
                        </Pressable>
                        <Text style={{ justifyContent: "center", alignItems: 'center', textAlign: "center", fontSize: 12 }}>NEW</Text>
                    </View>
                    <View style={{ flexDirection: "column" }}>
                        <Pressable style={[styles.square, { justifyContent: "center", alignItems: 'center' }]}
                            onPress={() => navigation.navigate('Search')}>
                            <Icon color="black" source="magnify" size={55}  />
                        </Pressable>
                        <Text style={{ justifyContent: "center", alignItems: 'center', textAlign: "center", fontSize: 12 }}>SEARCH</Text>
                    </View>
                    <View style={{ flexDirection: "column" }}>
                        <Pressable style={[styles.square, { justifyContent: "center", alignItems: 'center' }]}
                            onPress={() => navigation.navigate('Details')}>
                            <Icon color="black" source="cog" size={55}  />
                        </Pressable>
                        <Text style={{ justifyContent: "center", alignItems: 'center', textAlign: "center", fontSize: 12 }}>SETTINGS</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

export default withTheme(FrontPage);