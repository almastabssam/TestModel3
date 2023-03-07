import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import DummyData from '../DummyData';
import {faker} from '@faker-js/faker';

const Asci = () => {
  const [companiesData, setComapniesData] = useState([]);
  const getDummyData = () => {
    let count = 0;
    let temp1 = [];
    while (count < 20) {
      count++;
      let temp = {
        avatar: faker.image.fashion(),
        companyName: faker.name.lastName(),
        des: 'description',
        percentage: (Math.random() * 100).toFixed(2) + '%',
        value: Math.random().toFixed(4),
      };
      temp1.push(temp);
    }
    setComapniesData(temp1);
  };

  useEffect(() => {
    getDummyData();
  }, []);

  return (
    <View style={{backgroundColor: 'white'}}>
      <FlatList
        data={companiesData}
        ListHeaderComponent={() => <DummyData />}
        keyExtractor={(__, index) => index + ''}
        renderItem={({item, index}) => <CompanyItem data={item} />}
      />
    </View>
  );
};

const CompanyItem = ({data}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={{flexDirection: 'row'}}>
        <Image source={{uri: data.avatar}} style={styles.image} />
        <View style={{flexDirection: 'column', paddingLeft: 10}}>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
            {data.companyName}
          </Text>
          <Text style={{color: 'black'}}>{data.des}</Text>
        </View>
        <Text style={{color: 'green', paddingLeft: 30}}>
          + {data.percentage}
        </Text>
        <Text style={{paddingLeft: 60, color: 'black'}}>{data.value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '80%',
    height: 80,
    marginHorizontal: 30,
    marginTop: 20,
    backgroundColor: 'white',
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 30,
  },
});

export default Asci;
