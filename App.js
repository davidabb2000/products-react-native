import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, FlatList, Pressable, Text, Modal } from 'react-native';
import { useState } from 'react';
import ProductCard from './components/ProductCard';

export default function App() {
  const [productModal, setProductModal] = useState(false)
  const changeProductModal = () => setProductModal(!productModal)


  const categories = ['Cereales y derivados', 'Carnes']
  const [productList, setProductList] = useState([
    {
    image: 'https://cdn-icons-png.flaticon.com/256/3098/3098301.png',
    title: 'Pan Ocha',
    desc: 'Pan de tipo Ocha con una harina refinada 1A de la mas alta calidad traido de donde traen las mejores harinas refinadas del mundo',
    price: 40000,
    stock: 20,
    category: categories[0]
    },
  ])

  const [productImage, setProductImage] = useState('')
  const [productTitle, setProductTitle] = useState('')
  const [productDesc, setProductDesc] = useState('')
  const [productPrice, setProductPrice] = useState()
  const [productStock, setProductStock] = useState('')
  const [productCategory, setProductCategory] = useState('')

  const changeForm = () => {
    const newProduct = {
      image: 'https://cdn-icons-png.flaticon.com/256/3098/3098301.png',
      title: productTitle,
      desc: productDesc,
      price: productPrice,
      stock: productStock,
      category: productCategory
    }
    setProductList(prevList => [...prevList, newProduct])

    setProductTitle('')
    setProductDesc('')
    setProductPrice('')
    setProductStock('')
    setProductCategory('')
    changeProductModal(false)
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput style={styles.headerInput} placeholder='Buscar'/>
        <Pressable style={styles.productFormButton} onPress={changeProductModal}><Text style={styles.productFormButtonText}>+</Text></Pressable>
      </View>

      <View style={styles.products}>
        <FlatList
          data={productList}
          numColumns={2}
          renderItem={({item}) => 
          <ProductCard
            prodImage={item.image}
            prodTitle={item.title}
            prodDesc={item.desc}
            prodPrice={item.price}
            prodStock={item.stock}
            prodCategory={item.category}/>
          }
        >
        </FlatList>
      </View>

      <Modal
      visible={productModal}
      animationType='slide'
      >
          <View style={styles.productHeader}>
            <Text style={styles.productHeaderText}>Agregar Productos</Text>
            <Pressable style={styles.productHeaderButton} onPress={changeProductModal}><Text style={styles.productHeaderButtonText}>x</Text></Pressable>
          </View>

          <View style={styles.productForm}>
            <Text style={styles.productForm}>Nombre del producto</Text>
            <TextInput style={styles.productFormInput}
              onChangeText={setProductTitle}
              value={productTitle}
              />

            <Text style={styles.productForm}>Descripcion</Text>
            <TextInput style={styles.productFormInput}
              onChangeText={setProductDesc}
              value={productDesc}
            />

            <Text style={styles.productForm}>Precio</Text>
            <TextInput style={styles.productFormInput}
              onChangeText={setProductPrice}
              value={productPrice}
            />

            <Text style={styles.productForm}>Stock</Text>
            <TextInput style={styles.productFormInput}
              onChangeText={setProductStock}
              value={productStock}
            />

            <Text style={styles.productForm}>Categoria</Text>
            <TextInput style={styles.productFormInput}
              onChangeText={setProductCategory}
              value={productCategory}
            />

            <Pressable style={styles.productFormSend} onPress={changeForm}>
              <Text style={styles.productFormSendText}
                selectable={false}
                >Agregar</Text>
            </Pressable>
          </View>
      </Modal>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: '60px',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    
  },
    headerInput: {
      width: '60%',
      height: '40px',
      borderRadius: '10px',
      backgroundColor: 'white',
      textAlign: 'center',
      marginRight: 20
    },
    productFormButton: {
      backgroundColor: 'white',
      height: 40,
      width: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
    },
    products: {
      flex: 1,
      flexDirection: 'row'
    },
    productHeader: {
      flexDirection: 'row',
      height: 60,
      alignItems: 'center',
      justifyContent: 'space-between',
      
    },
    productHeaderText: {
      left: 10,
      fontSize: 20,
    },
    productHeaderButton: {
      backgroundColor: 'black',
      height: 50,
      width: 50,
      borderRadius: 10,
      right: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    productHeaderButtonText: {
      color: 'white',
      fontSize: 30
    },
    productForm: {
      marginTop: 20,
      marginLeft: '2%',
    },
    productFormInput: {
      borderColor: '#636262',
      borderWidth: 1,
      width: '95%',
      height: 30
    },
    productFormSend: {
      backgroundColor: 'black',
      width: '95%',
      left: 7,
      top: 170,
      height: 40,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    productFormSendText: {
      color: 'white'
    }
});