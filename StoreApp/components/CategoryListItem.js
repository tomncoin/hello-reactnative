import React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import SkiiImage from '../assets/ski-boots-64.png';

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        padding: 16,
        borderRadius: 4,
        backgroundColor: "#FFF",
        shadowColor: "#000",
        shadowOpacity: 1,
        shadowRadius: 10,
        shadowOffset: {width: 0, height: 0},
        elevation: 3,   //for android
        marginBottom: 10,

    },
    categoryImage:{
        width: 64,
        height: 64
    },
    title:{
        textTransform: "uppercase",
        marginBottom: 10,
        fontWeight: "700",
    },
});

export default function CategoryListItem(props){
    const {category, onPress} = props;
    // console.log(props);
    // console.error('assets:'+category.image);
    return(
        <TouchableOpacity activeOpacity={0.5}
            onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.title}>{category.name}</Text>
                {/* <Image style={styles.categoryImage} source={{uri: 'assets:'+category.image}}></Image> */}
                <Image style={styles.categoryImage} source={{uri: 'https://cdn-icons-png.flaticon.com/512/99/99607.png'}}></Image>
            </View>
        </TouchableOpacity>
    )
}