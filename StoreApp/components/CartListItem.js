import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

export default function (props){
    const {product} = props;

    return(
        <View style={styles.shadow}>
            <View style={styles.container}>
                <Image style={styles.img} source={{uri: product.images[0].url}}></Image>
                <View style={styles.info}>
                    <Text style={styles.name}>{product.name}</Text>
                    <View style={styles.priceRow}>
                        <Text style={styles.price}>{product.price}</Text>
                            <TouchableOpacity onPress={()=>this.context.addToCart(product)}>
                                <Text style={styles.cartText}>Add to Cart</Text>
                            </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    shadow:{
        shadowColor:"#000",
        shadowOpacity:0.1,
        shadowRadius: 8,
        shadowOffset: {width:0, height:0},
        elevation: 3,
        backgroundColor: "#0000",
    },
    container:{
        borderRadius: 4,
        marginBottom: 10,
        backgroundColor: "#fff",
        overflow: "hidden",
    },
    info: {
        padding: 8,
    },
    name:{
        fontSize: 16,
        marginBottom: 8,
    },
    priceRow:{
        flexDirection: "row",
        alignItems: "center",
    },
    price:{
        fontSize: 16,
        marginBottom: 8,
        flex: 1,
    },
    img:{
        height: 150,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
    },
    cartText:{
        textTransform: "uppercase",
        fontSize: 16,
        color: "blue",
    },
});