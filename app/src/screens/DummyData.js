import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const DummyData = () => {
  const navigation = useNavigation();
  const [selectedItem, setSelectedItem] = useState();
  const array = [
    '5 minutes',
    '1 day',
    '5 day',
    '1 month',
    '3 months',
    '35 weeks',
  ];
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          marginHorizontal: 25,
          marginTop: 20,
          borderRadius: 10,
          backgroundColor: '#ffffff99',
        }}>
        <TouchableOpacity onPress={() => setSelectedItem(item)}>
          <Text
            style={{
              fontSize: 16,
              color: selectedItem == item ? 'green' : 'black',
            }}>
            {item}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.percentageContainer}>
        <Text style={{color: 'black'}}>BTU</Text>
        <Text style={{color: '#9DDDBA'}}> +14.54 + 25.23</Text>
        <Text style={{color: 'black'}}>UEC</Text>
        <Text style={{color: '#9DDDBA'}}> +0.54 + 25.23</Text>
      </View>
      <TouchableOpacity
        style={styles.viewButton}
        onPress={() => {
          navigation.navigate('Subscription');
        }}>
        <Text style={{fontSize: 20, color: 'black'}}>View All</Text>
      </TouchableOpacity>
      <View style={styles.topGainer}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
          Top Gainer
        </Text>
        <Image
          source={require('./../../../assets/icons/top.png')}
          style={{width: 18, height: 18, marginRight: 20, marginTop: 10}}
        />
      </View>
      <FlatList data={array} numColumns={3} renderItem={renderItem} />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={array}
        ListHeaderComponent={() => {
          return (
            <View style={styles.listHeaderContainer}>
              <Text style={styles.listHeaderText}>Symbol</Text>
              <Text style={{...styles.listHeaderText, marginLeft: 50}}>
                Pre-market % chg
              </Text>
              <Text style={{...styles.listHeaderText, marginRight: 10}}>
                Pre-Market
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  percentageContainer: {
    flexDirection: 'row',
    height: 30,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    paddingTop: 10,
    marginHorizontal: 30,
  },
  viewButton: {
    width: '80%',
    marginHorizontal: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  topGainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 30,
  },
  listHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
  },
  listHeaderText: {
    fontSize: 15,
    marginLeft: 10,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default DummyData;
