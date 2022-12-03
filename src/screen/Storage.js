import { ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';



const Storage = () => {
    const [InputBoxValue, setInputBoxValue] = useState("")
    const [storageDataList, setstorageDataList] = useState("")
    const addItemToLost = async () => {
        try {
            await AsyncStorage.setItem('itemList', InputBoxaVlue);
            setInputBoxValue('');

            await getItemList();

            alert("Data is Sumbited")
        } catch (error) {
            console.log(error);
        }

    }
    const getItemList = async () => {
        try {
            const Data = await AsyncStorage.getItem("itemList")

            setstorageDataList(Data)

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <SafeAreaView style={{backgroundColor: '#dcdcdc', flex:1}}>

            {/* <ImageBackground source={{
                uri: 'https://img.freepik.com/free-vector/people-hugging-each-other-with-welcoming-greeting_52683-23927.jpg?size=626&ext=jpg&ga=GA1.2.755072944.1669057181&semt=sph'
            }} style={styles.ImageBG} imageStyle={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }} >
            </ImageBackground> */}
            <ImageBackground source={{
                uri: 'https://img.freepik.com/free-vector/man-sitting-desk-unlocking-computer-computer-settings-login-flat-illustration_74855-20645.jpg?size=626&ext=jpg&ga=GA1.2.755072944.1669057181&semt=sph'
            }} style={styles.ImageBG} >
            </ImageBackground>
            <View style={{marginTop:20 }}>
                <View style={styles.MainCont}>
                    <View style={styles.InputBox}>
                        <TextInput
                            placeholder='Enter Your Name'
                            // value='InputBoxaVlue'
                            onChangeText={value => setInputBoxValue(value)}
                            style={{ fontSize: 18 }}
                        />
                    </View>
                    <TouchableOpacity style={styles.Buttum} onPress={() => addItemToLost()} >
                        <Text style={styles.AddText}>Submit</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.StorageData}>
                    <Text style={styles.StorageText}>YOUR ENTER DATA IS : {storageDataList}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Storage

const styles = StyleSheet.create({
    ImageBG: {
        width: 420,
        height: 380,

    },
    InputBox: {
        borderBottomWidth: 1,
        borderColor: 'gray',
        marginHorizontal: 20,
        borderRadius: 10,
        marginVertical: 20,
    },
    Buttum: {
        backgroundColor: 'blue',
        marginHorizontal: 20,
        alignItems: 'center',
        borderRadius: 30,
        marginTop: 20,
        padding:10
    },
    AddText: {
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold'
    },
    StorageData: {
        marginTop: 40,
        marginHorizontal: 20,
        backgroundColor: '#fff',
        borderWidth: 5,
        padding: 20,
        // height:100,
        borderColor: '#F0F0F0F0',
        borderRadius: 15
    },
    MainCont: {
        backgroundColor: '#fff',
        marginHorizontal: 10,
        borderRadius: 15,
        borderWidth: 3,
        padding: 15,
        borderColor: '#F0F0F0',
    },
    StorageText: {
        fontSize: 18,
       
    }
})