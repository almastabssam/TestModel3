import React, {useState, useRef} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";
import FavoriteList from "../component/FavoriteList";
const subscriptionPlans = [
  {
    id: '1',
    plan: 'Normal Plan',
    title: 'Basic',
    price: '$10',
    Payment: '1 month',
    Watchlist: '5 items',
    changeplan: 'NO',
    papymentPeriod: '1 month',
  },
  {
    id: '2',
    plan: 'Popular Plan',
    title: 'Standert',
    price: '$20',
    Payment: '3 month',
    Watchlist: '10 items',
    changeplan: 'Yes',
    papymentPeriod: '1 month',
  },
  {
    id: '3',
    plan: 'Standard Plan',
    title: 'Premium',
    price: '$30',
    Payment: '6 month',
    Watchlist: '15 items',
    changeplan: 'NO',
    papymentPeriod: '1 month',
  },
];
const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const modalizeRef = useRef(null);


  const renderItem = ({item, index}) => {
    const isSelected = selectedPlan && selectedPlan.id === item.id;

    return (
      <View style={{padding: 2}}>
          <RBSheet
              ref={modalizeRef}
              height={450}
              openDuration={250}
              customStyles={{
                  container: {
                      borderRadius: 20,
                  }
              }}
          >
              <FavoriteList />
          </RBSheet>
        <TouchableOpacity
          style={{
            ...styles.selectContainer,
            borderColor: isSelected ? '#7fffd4' : '#f2f2f2',
          }}
          onPress={() => setSelectedPlan(item)}>
          <View style={{backgroundColor: 'white', borderRadius: 8}}>
            {isSelected && (
              <Text
                style={{
                  ...styles.selectedText,
                  color: isSelected ? '#000' : '#000',
                }}>
                {item.plan}
              </Text>
            )}
          </View>

          <View style={styles.standerdText}>
            <Text
              style={{
                color: isSelected ? '#000' : '#000',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              {item.title}
            </Text>
            <Text
              style={{
                color: isSelected ? '#000' : '#333',
                fontSize: 25,
                color: '#7fffd4',
                fontWeight: 'bold',
              }}>
              {item.price}
            </Text>
          </View>

          <View style={styles.paymentContainer}>
            <Text style={{color: 'gray'}}> Payment Period</Text>
            <Text
              style={{
                color: isSelected ? '#000' : '#333',
                paddingTop: 15,
                fontWeight: 'bold',
              }}>
              {item.Payment}
            </Text>
          </View>
          <View style={styles.paymentContainer}>
            <Text style={{color: 'gray'}}>Watchlist</Text>
            <Text
              style={{
                color: isSelected ? '#000' : '#333',
                paddingTop: 15,
                fontWeight: 'bold',
              }}>
              {item.Watchlist}
            </Text>
          </View>

          <View style={styles.paymentContainer}>
            <Text style={{color: 'gray'}}> Change the plan</Text>
            <Text
              style={{
                color: isSelected ? '#000' : '#333',
                paddingTop: 15,
                fontWeight: 'bold',
              }}>
              {item.changeplan}
            </Text>
          </View>

          <View style={styles.paymentPeriod}>
            <Text style={{color: 'gray'}}> Papyment Period</Text>
            <Text
              style={{
                color: isSelected ? '#000' : '#333',
                paddingTop: 15,
                fontWeight: 'bold',
              }}>
              {item.Payment}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{flex: 1, padding: 10, shadowColor: 'black'}}>
      <View style={{flex: 1, alignItems: 'center', marginBottom: 55}}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: 'bold',
            color: 'black',
            marginBottom: 5,
          }}>
          Choose your Plan
        </Text>
        <Text style={styles.chooseText}>
          We have compared the plans tomake it easier
        </Text>
        <Text style={styles.chooseText}>for you to choose</Text>
      </View>
      <FlatList
        data={subscriptionPlans}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedPlan}
        horizontal
      />
      <TouchableOpacity
        style={{
          ...styles.subscriptionButton,
          backgroundColor: selectedPlan ? '#000080' : '#ccc',
        }}
        disabled={!selectedPlan}
        onPress={() => {
          console.log(`You selected ${selectedPlan.title}`);
            modalizeRef.current.open();
        }}>
        <Text style={{color: '#fff', fontSize: 18}}>Subscribe</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  selectContainer: {
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 5,
  },
  selectedText: {
    fontSize: 15,
    backgroundColor: '#7fffd4',
    marginLeft: 20,
    color: 'white',
    marginRight: 20,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    padding: 8,
  },
  standerdText: {
    padding: 10,
    shadowColor: 'black',
    backgroundColor: 'white',
    marginBottom: 3,
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  paymentContainer: {
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 3,
    alignItems: 'center',
  },
  paymentPeriod: {
    padding: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  chooseText: {
    fontSize: 15,
    color: 'gray',
    marginLeft: 10,
    marginRight: 10,
  },
  subscriptionButton: {
    padding: 16,
    marginTop: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default Subscription;
