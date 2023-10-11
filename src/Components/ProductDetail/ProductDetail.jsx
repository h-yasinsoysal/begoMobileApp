import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet, Button, Dimensions, Modal, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Table, Row, TableWrapper, Cell } from 'react-native-table-component';


const windowWidth = Dimensions.get('window').width;
const numColumns = windowWidth >= 600 ? 2 : 1;

const products = [
  { code: '58260', name: 'BEGO SEMADOS® IMPLANT SCX 3.25 L8.5 TiPure Plus', price: 148.99 },
  { code: '58261', name: 'BEGO SEMADOS® IMPLANT SCX 3.25 L10 TiPure Plus', price: 148.99 },
  { code: '58866', name: 'BEGO SEMADOS® IMPLANT RSXPro 3.75 L8.5', price: 148.99 },
  { code: '58867', name: 'BEGO SEMADOS® IMPLANT RSXPro 3.75 L10', price: 148.99 },
  { code: '58868', name: 'BEGO SEMADOS® IMPLANT RSXPro 3.75 L11,5', price: 148.99 },
];

const productsPerPage = 10;

const ProductDetail = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const navigateToDetail = (product) => {
    navigation.navigate('ProductDetail', { product });
  };

  const renderProductTable = () => {
    const startIndex = currentPage * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToDisplay = products.slice(startIndex, endIndex);

    return (
      <ScrollView contentContainerStyle={styles.tableContainer}>
        <Table borderStyle={{ borderColor: 'transparent' }}>
          <Row
            data={['Ürün Kodu', 'Ürün Adı', 'Fiyat', 'İşlem']}
            style={styles.head}
            textStyle={styles.tableHeaderText}
          />
          {productsToDisplay.map((product) => (
            <TableWrapper key={product.code} style={styles.productRow}>
              <Cell data={product.code} textStyle={styles.productCode} />
              <Cell data={product.name} textStyle={styles.productName} />
              <Cell data={`${product.price.toFixed(2)} ₺`} textStyle={styles.productPrice} />
              <Cell
                data={
                  <TouchableOpacity onPress={() => {
                openModal(); handleAddToCart(product);
              }}>
                    <View style={styles.btn}>
                      <Text style={styles.btnText}>Ekle</Text>
                    </View>
                  </TouchableOpacity>
                }
                textStyle={styles.text}
              />
            </TableWrapper>
          ))}
        </Table>
      </ScrollView>
    );
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if ((currentPage + 1) * productsPerPage < products.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleAddToCart = (product) => {
    // Sepete ekleme işlemini burada gerçekleştirin.
    // Örneğin, bir işlevi çağırabilirsiniz.
  };

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const handleSend = () => {
    // E-posta ve telefon numarası bilgilerini kullanarak gönderme işlemi yapabilirsiniz.
    // Örneğin, bu bilgileri bir API'ye gönderebilir veya başka bir işlem yapabilirsiniz.
    // Başarılı bir şekilde gönderildiğinde bir uyarı vermek için Alert kullanabilirsiniz.
    Alert.alert('Başarılı', 'Bilgiler başarıyla gönderildi', [{ text: 'Tamam', onPress: closeModal }]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <View style={styles.searchBar}>
          <MaterialIcons name="search" size={26} color="black" />
          <TextInput
            placeholder="Marka, ürün veya kategori ara"
            style={styles.searchInput}
          />
        </View>
      </View>

      {renderProductTable()}

      <View style={styles.pagination}>
        <TouchableOpacity onPress={handlePrevPage} disabled={currentPage === 0}>
          <Text style={[styles.paginationText, currentPage === 0 && styles.disabledText]}>Önceki</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNextPage} disabled={(currentPage + 1) * productsPerPage >= products.length}>
          <Text style={[styles.paginationText, (currentPage + 1) * productsPerPage >= products.length && styles.disabledText]}>Sonraki</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              placeholder="E-posta adresi"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
            />
            <TextInput
              placeholder="Telefon numarası"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              style={styles.input}
            />
            <Button title="Gönder" onPress={handleSend} />
            <Button title="Kapat" onPress={closeModal} />
          </View>
        </View>
      </Modal>

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
};

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
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
 
  tableHeaderText: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color:'#222222'
  },

  productCode: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingHorizontal: 18,
  },
  productName: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingHorizontal: 5,
  },
  productPrice: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingHorizontal: 5,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  modalContent: {
    backgroundColor: 'white',
    width: 300,
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },

  // Styles for the table
  head: { height: 40, backgroundColor: '#DDA726', borderRadius: 5 },
  text: { margin: 6 },
  productRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', paddingVertical: 5 },
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB', borderRadius: 2, paddingHorizontal: 5 },
  btnText: { textAlign: 'center', color: '#fff' },
});

export default ProductDetail;