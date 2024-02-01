import React, { memo, useEffect, useRef, useState } from 'react'
import type { FC } from 'react'
import {
    TouchableOpacity,
    View,
    Text,
    Dimensions,
    StatusBar,
    ScrollView,
    Image,
} from 'react-native'
import { Camera, CameraType } from 'expo-camera'
import { Button, Icon } from '@rneui/themed'
import theme from '../../styles/theme/color'
import SafeAreaView from 'react-native-safe-area-view'
import { useNavigation } from '@react-navigation/native'
import MyImagePicker from '../image-picker'
import uploadImg, { getSearchImage } from '../../utils/uploadImg'
import { manipulateAsync, SaveFormat } from 'expo-image-manipulator'
interface IProps {
    children?: any
}

const MyCamera: FC<IProps> = ({ children }) => {
    const navigation = useNavigation()
    const [selectedImage, setSelectedImage] = useState('')
    const [type, setType] = useState(CameraType.back)
    const [permission, requestPermission] = Camera.useCameraPermissions()
    const [hasPermission, setHasPermission] = useState(false)
    const [sizeImage, setSizeImage] = useState('')
    const camera = useRef<any>()

    // useEffect(() => {
    //     ;(async () => {
    //         const { status }: any = await requestPermission()
    //         setHasPermission(status === 'granted')
    //     })()
    // }, [])
    // if (hasPermission === null) {
    //     return <View />
    // }
    // if (!hasPermission) {
    //     return <Text>No access to camera</Text>
    // }
    //照相
    const takePicture = async () => {
        if (camera.current) {
            const photo = await camera.current.takePictureAsync()
            setSelectedImage(photo.uri)
            console.log(selectedImage)
        }
    }
    const upload = async () => {
        try {
            const compressedImage = await manipulateAsync(
                selectedImage,
                [{ resize: { width: 200 } }],
                { compress: 0.8, format: SaveFormat.JPEG },
            )
            setSizeImage(compressedImage.uri)
        } catch (error) {
            console.error('Error compressing image', error)
            setSelectedImage(selectedImage)
        }
    }
    useEffect(() => {
        if (sizeImage) {
            getSearchImage(sizeImage).then()
            setSelectedImage('')
        }
    }, [sizeImage])

    return (
        <SafeAreaView style={{ height: Dimensions.get('screen').height }}>
            <StatusBar></StatusBar>
            {selectedImage ? (
                <View>
                    <Image
                        source={{ uri: selectedImage }}
                        style={{
                            width: '100%',
                            height: 500,
                        }}
                    ></Image>
                    <View className="flex-row justify-center mt-[20]">
                        <Button
                            title={'取消'}
                            onPress={() => setSelectedImage('')}
                            buttonStyle={{
                                backgroundColor: theme.colors.deep01Primary,
                                width: 100,
                                borderRadius: 20,
                            }}
                            containerStyle={{
                                marginRight: 20,
                            }}
                        ></Button>
                        <Button
                            title={'确定'}
                            onPress={() => upload()}
                            buttonStyle={{
                                backgroundColor: theme.colors.deep01Primary,
                                width: 100,
                                borderRadius: 20,
                            }}
                        ></Button>
                    </View>
                </View>
            ) : (
                <ScrollView>
                    <Camera
                        ref={camera}
                        type={type}
                        style={{
                            height: Dimensions.get('screen').height / 1.5,
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={{
                                position: 'absolute',
                                left: 0,
                            }}
                        >
                            <Icon
                                name={'left'}
                                type={'antdesign'}
                                size={30}
                            ></Icon>
                        </TouchableOpacity>
                    </Camera>
                    <View
                        className="pl-[20] pr-[20] pt-[30] bg-white"
                        style={{
                            height: Dimensions.get('screen').height / 3.5,
                        }}
                    >
                        <Text className="text-center" style={{ fontSize: 17 }}>
                            餐前拍一拍
                        </Text>
                        <View className="flex-row items-center mt-[30]">
                            <TouchableOpacity>
                                <MyImagePicker getImage={uploadImg}>
                                    {{
                                        content: (
                                            <Image
                                                source={require('../../../assets/images/picture.png')}
                                                style={{
                                                    width: 40,
                                                    height: 40,
                                                }}
                                            ></Image>
                                        ),
                                    }}
                                </MyImagePicker>
                            </TouchableOpacity>

                            <View className="flex-1 ml-[90]">
                                <TouchableOpacity onPress={() => takePicture()}>
                                    <Image
                                        source={require('../../../assets/images/takepicture.png')}
                                        style={{
                                            width: 60,
                                            height: 60,
                                        }}
                                    ></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            )}
        </SafeAreaView>
    )
}

export default memo(MyCamera)
