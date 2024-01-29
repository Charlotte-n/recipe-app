import React, { useEffect, useRef, useState } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { useAppSelector } from '../../store'
import { shallowEqual } from 'react-redux'
import { uploadAvatar } from '../../apis/mine'

const MyImagePicker = () => {
    //获取用户信息
    const { userInfo } = useAppSelector((state) => {
        return {
            userInfo: state.LoginRegisterSlice.userInfo,
        }
    }, shallowEqual)
    const { id, avatar } = userInfo
    //获取相机权限
    useEffect(() => {
        ;(async () => {
            // 获取相册权限
            const { status } =
                await ImagePicker.requestMediaLibraryPermissionsAsync()
            if (status !== 'granted') {
                alert('对不起，我们需要相册权限才能继续！')
            }
        })()
    }, [])
    const [image, setImage] = useState('')
    const result = useRef<any>()
    const [isInitialRender, setIsInitialRender] = useState(true)
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let res = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [3, 3],
            quality: 1,
        })
        result.current = res
        console.log(result.current)
        if (!result.current.canceled) {
            setImage((prevState: any) => {
                return result.current.assets[0].uri as string
            })
        }
    }
    //上传头像
    const uploadImage = async () => {
        console.log('我是image', image)
        if (!image) {
            alert('请先选择图片')
            return
        }
        const formData: any = new FormData()
        formData.append('avatar', {
            uri: image,
            name: 'avatar.jpeg',
            type: 'image/jpeg',
        })
        //上传图片
        await uploadAvatar(formData, id)
    }
    useEffect(() => {
        if (!isInitialRender) {
            // 进行其他操作...
            uploadImage()
                .then((res) => {
                    console.log('获取成功')
                })
                .catch((error) => {
                    console.log(error)
                })
        } else {
            setIsInitialRender(false)
        }
    }, [image])

    return (
        <View>
            {avatar ? (
                <TouchableOpacity onPress={() => pickImage()}>
                    <Image
                        className="rounded-full"
                        source={{ uri: avatar }}
                        style={{ width: 100, height: 100 }}
                    />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={() => pickImage()}>
                    <Image
                        className="rounded-full"
                        source={require('../../../assets/images/bg_login_header.png')}
                        style={{ width: 100, height: 100 }}
                    ></Image>
                </TouchableOpacity>
            )}
        </View>
    )
}

export default MyImagePicker
