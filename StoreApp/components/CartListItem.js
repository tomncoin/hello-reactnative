import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function (props){
    const {product} = props;

    return(
        <View style={styles.shadow}>
            <View style={styles.container}>
                <View>
                    <Image style={styles.img} source={{uri: product.images[0].url}}></Image>
                </View>
                <View style={styles.titleSection}>
                    <View>
                        <Text>Title</Text>
                        <Text>Sub Title</Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:40,}}>
                        {/* <Text style={styles.caption}>-</Text> */}
                        <Icon name={"ios-remove"} size={24} style={{color:"orange"}}></Icon>
                        <Text style={styles.caption}>{product.quantity}</Text>
                        <Icon name={"ios-add"} size={24} style={{color:"orange"}}></Icon>
                        {/* <Text style={styles.caption}>+</Text> */}
                    </View>
                </View>
                <View>
                    <Text style={styles.price}>${product.price}</Text>
                    <View style={styles.priceRow}>
                    <TouchableOpacity>
                        <Icon name={"ios-trash"}
                        size={24} style={{color:"red"}}
                        ></Icon>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    shadow:{
        marginTop:20,
        
    shadowColor:"#000",
    shadowOpacity:0.1,
    shadowRadius: 8,
    shadowOffset: {width:0, height:0},
    elevation: 3,
    backgroundColor: "#0000",

    },
    container:{
        flexDirection: "row",
        alignItems: "center",
        flex:1,
        
        borderRadius: 4,
        backgroundColor: "#fff",
        overflow: "hidden",
        padding:10,
    },
    info: {
        marginLeft: 16,
        flex:1
    },

    titleSection:{
        marginLeft: 16,
        flex:1
        // justifyContent: 'space-between',
    },
    
    caption:{
        paddingHorizontal:10,
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
        fontSize: 20,
        marginTop: 8,
        flex: 1,
        color: "orange",

    },
    img:{
        width:124,
        height: 121,
        borderRadius:10,
        backgroundColor:"#808080",
    },
    cartText:{
        textTransform: "uppercase",
        fontSize: 16,
        color: "blue",
    },
});