import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const SubProduct = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <View style={styles.searchBar}>
          <MaterialIcons name="search" size={26} color="black" />
          <TextInput
            placeholder="Marka, ürün veya kategori ara"
            style={styles.searchInput}
          />
        </View>
      </View>

      {/* Category List */}
      <View style={styles.categoryContainer}>
        {["İmplant Sistemleri", "Protex/Üst Yapı Sistemleri", "Kılavuzlu Cerrahi", "NaturesQue Rejenerasyon Ürün Grubu"].map((category, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.categoryBox} 
            onPress={() => {
              if (category === 'İmplant Sistemleri') {
                navigation.navigate('ListProducts');
              }
            }}
          >
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomBarItem}>
          <MaterialIcons name="home" size={24} color="#DDA726" />
          <Text style={styles.bottomBarText}>Anasayfa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarItem}>
          <MaterialIcons name="local-offer" size={24} color="#DDA726" />
          <Text style={styles.bottomBarText}>Kampanyalar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarItem}>
          <MaterialIcons name="person" size={24} color="#DDA726" />
          <Text style={styles.bottomBarText}>Hesabım</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  searchBarContainer: {
    paddingHorizontal: 20,
  },
  searchBar: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
    fontSize: 19,
  },
  categoryContainer: {
    paddingHorizontal: 20,
    flex: 1,
    paddingTop: 60,
  },
  categoryBox: {
    width: '100%',
    height: 60,
    backgroundColor: '#DDA726',
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 0.5,
    backgroundColor: '#EFEFEF',
    padding: 10,
  },
  bottomBarItem: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  bottomBarText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 400,
  },
});

export default SubProduct;
