import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const TEXT_ITEMS = [
    '2020 Q1',
    '2020 Q2',
    '2020 Q2',
    '2020 Q2',
    '2020 Q2',
    '2020 Q2',
];

const FavoriteList = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const handleItemPress = item => {
        if (selectedItems.includes(item)) {
            setSelectedItems(
                selectedItems.filter(selectedItem => selectedItem !== item),
            );
        } else {
            setSelectedItems([...selectedItems, item]);
        }
    };

    const renderItem = ({item, index}) => {
        const isSelected = selectedItems.includes(item);
        return (
            <TouchableOpacity onPress={() => handleItemPress(item)}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding :10,
                        justifyContent: 'space-between',
                    }}>
                    <Text
                        style={{
                            fontSize: 16,
                            color: 'black',
                            fontWeight: 'normal',
                        }}>
                        {item}
                    </Text>
                    {index === 0 && (
                        <Image
                            source={require('../../../assets/icons/tick.png')}
                            style={{width: 10, height: 10}}
                        />
                    )}
                </View>
            </TouchableOpacity>
        );
    };

    const handleSavePress = () => {
        console.log('Selected items:', selectedItems);
    };
    return (
        <View style={{padding: 20}}>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 18, color: 'black'}}>Annual:</Text>
                <Text style={{fontSize: 15, color: 'blue', marginLeft: 10, marginBottom: 10}}>
                    FY: 2021:
                </Text>
                <Image
                    source={require('../../../assets/icons/down.png')}
                    style={{
                        height: 14,
                        width: 14,
                        marginLeft: 5,
                        marginTop: 2,
                        tintColor: '#000080',
                    }}
                />
            </View>
            <View style={{flexDirection: 'row', marginBottom: 10}}>
                <Text style={{fontSize: 18, color: 'black'}}>Quarterly:</Text>
                <Text style={{fontSize: 15, color: 'blue', marginLeft: 5}}>
                    2021 Q4
                </Text>
                <Image
                    source={require('../../../assets/icons/up.png')}
                    style={{
                        height: 14,
                        width: 14,
                        marginLeft: 5,
                        marginTop: 2,
                        tintColor: 'blue',
                    }}
                />
            </View>
            <FlatList
                data={TEXT_ITEMS}
                renderItem={renderItem}
                keyExtractor={item => item}
            />
            <TouchableOpacity
                style={{
                    backgroundColor: '#000080',
                    padding: 16,
                    borderRadius: 8,
                    alignItems: 'center',
                    marginTop: 16,
                }}
                onPress={handleSavePress}>
                <Text style={{color: 'white', fontSize: 16}}>Save</Text>
            </TouchableOpacity>
        </View>
    );
};

export default FavoriteList;
