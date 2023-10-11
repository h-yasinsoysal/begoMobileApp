import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const products = [
  { name: 'BEGO Semados® SC/SCX' },
  { name: 'BEGO Semados® RS/RSX' },
  { name: 'BEGO Semados® Mini' },
  { name: 'BEGO Semados® Provisional' },
  { name: 'BEGO Semados® S-Line' },
];

const productsPerPage = 2;  // Sayfa başına gösterilecek ürün sayısı

const ListProducts = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const navigateToDetail = (product) => {
    navigation.navigate('ProductDetail', { product });
  };

  const renderProductTable = () => {
    const startIndex = currentPage * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    return products.slice(startIndex, endIndex).map((product, index) => (
      <TouchableOpacity 
        key={index} 
        onPress={() => navigateToDetail(product)} 
        style={styles.productRow}
      >
        <Text style={styles.productText}>{product.name}</Text>
      </TouchableOpacity>
    ));
  }

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }

  const handleNextPage = () => {
    if ((currentPage + 1) * productsPerPage < products.length) {
      setCurrentPage(currentPage + 1);
    }
  }

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

      <ScrollView contentContainerStyle={styles.tableContainer}>
        {renderProductTable()}
      </ScrollView>

      {/* Sayfalama */}
      <View style={styles.pagination}>
        <TouchableOpacity onPress={handlePrevPage} disabled={currentPage === 0}>
          <Text style={[styles.paginationText, currentPage === 0 && styles.disabledText]}>Önceki</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNextPage} disabled={(currentPage + 1) * productsPerPage >= products.length}>
          <Text style={[styles.paginationText, (currentPage + 1) * productsPerPage >= products.length && styles.disabledText]}>Sonraki</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomBarItem}>
          <MaterialIcons name="home" size={24} color="white" />
          <Text style={styles.bottomBarText}>Anasayfa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarItem}>
          <MaterialIcons name="local-offer" size={24} color="white" />
          <Text style={styles.bottomBarText}>Kampanyalar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarItem}>
          <MaterialIcons name="person" size={24} color="white" />
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
  tableContainer: {
    paddingHorizontal: 20,
  },
  productRow: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  productText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  paginationText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledText: {
    color: 'gray',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#DDA726',
    padding: 15,
  },
  bottomBarItem: {
    alignItems: 'center',
  },
  bottomBarText: {
    color: 'white',
    marginTop: 5,
  },
});

export default ListProducts;
