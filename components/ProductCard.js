import { View, StyleSheet, Image, Pressable, Text,   } from "react-native"

export default function ProductCard({prodImage, prodTitle, prodDesc, prodPrice, prodStock, prodCategory}) {
    return (
        <View style={styles.productCard}>
          <View style={styles.productCardTop}>
            <Image source={{uri : prodImage}} style={styles.productCardImg}/>
            <Text>{prodTitle}</Text>
            <Text style={styles.productCardDesc}>{prodDesc}</Text>
          </View>
          <View style={styles.productCardBottom}>
            <View style={styles.productCardBottomLeft}>
              <Text>${prodPrice}</Text>
              <Text>Stock: {prodStock}</Text>
            </View>
            <View style={styles.productCardBottomRight}>
              <Text style={styles.productCardCategoryText}>{prodCategory}</Text>
              <Pressable style={styles.productCardAdd}>
                <Text style={styles.productCardAddText}>+</Text>
              </Pressable>
            </View>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
  productCard: {
      alignItems: 'center',
      width: '50%',
      height: '300px'
    },
    productCardImg: {
      height: '100px',
      width: '100px'
    },
    productCardTop: {
      alignItems: 'center'
    },
    productCardDesc: {
      textAlign: 'center',
      fontSize: '10px',
      color: '#111010d4'
    },
    productCardBottom: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: '10px',
      height: 110,
      width: '90%',
    },
    productCardBottomLeft: {
      justifyContent: 'center'
    },
    productCardBottomRight: {
      alignItems: 'flex-end',
      justifyContent: 'space-between'
    },
    productCardAdd: {
      backgroundColor: 'black',
      height: 60,
      width: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
    },
    productCardAddText: {
      color: 'white',
      fontSize: 40
    },
})