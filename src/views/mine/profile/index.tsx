import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import {
    Dimensions,
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import { profileData } from '../../../data/mine'
import * as ImagePicker from 'expo-image-picker'
interface IProps {
    children?: ReactNode
}

const Profile: FC<IProps> = () => {
    const height = Dimensions.get('window').height
    const Item = (props: any) => {
        const { left, right } = props
        return (
            <View className="flex-row pt-[30] pb-[30] border-b border-[#F1F3F4] border-b-2">
                <Text className="flex-1" style={{ fontSize: 17 }}>
                    {left}
                </Text>
                {typeof right === 'string' || 'number' ? (
                    <Text style={{ fontSize: 15 }}>{right}</Text>
                ) : (
                    right
                )}
            </View>
        )
    }
    //
    const [image, setImage] = useState('')
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })

        console.log(result)

        if (!result.canceled) {
            setImage(result.assets[0].uri)
        }
    }

    return (
        <View
            style={{ height: height }}
            className="bg-white pt-[4] pl-[40] pr-[40]"
        >
            <View className="flex-row items-center pt-[30] pb-[30] border-b border-[#F1F3F4] border-b-2">
                <Text className="flex-1" style={{ fontSize: 17 }}>
                    头像
                </Text>
                <TouchableOpacity onPress={pickImage}>
                    <Image
                        className="rounded-full"
                        style={{ width: 80, height: 80 }}
                        source={require('../../../../assets/images/bg_login_header.png')}
                    ></Image>
                </TouchableOpacity>
            </View>
            <FlatList
                data={profileData}
                renderItem={({ item }) => (
                    <Item left={item.left} right={item.right}></Item>
                )}
            ></FlatList>
        </View>
    )
}

export default memo(Profile)
