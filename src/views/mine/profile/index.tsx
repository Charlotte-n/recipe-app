import React, { memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native'
import ProfileFlatList from './component/content-item'
import MyImagePicker from '../../../components/image-picker'
import MyBottomSheet from '../../../components/bottom-sheet'
import { ScrollView } from 'nativewind/dist/preflight'
import { useAppSelector } from '../../../store'
import { shallowEqual } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
interface IProps {
    children?: ReactNode
}

const Profile: FC<IProps> = () => {
    const navigation: any = useNavigation()
    const { userInfo } = useAppSelector((state) => {
        return {
            userInfo: state.LoginRegisterSlice.userInfo,
        }
    }, shallowEqual)
    const [Id, setId] = useState('')
    const height = Dimensions.get('screen').height
    const [isVisible, setIsVisible] = useState(true)
    //动态渲染不同的ui
    const feedBack = (id: string) => {
        switch (id) {
            case '0':
                return (
                    <MyBottomSheet id={id} isVisible={isVisible}>
                        {{
                            content: '修改用户名',
                            cancel: () => setIsVisible(false),
                            placeholderContent: userInfo.username,
                        }}
                    </MyBottomSheet>
                )
            case '1':
                return (
                    // 增加判断是否要解除绑定手机号
                    <MyBottomSheet id={id} isVisible={isVisible}>
                        {{
                            content: '绑定手机号',
                            cancel: () => setIsVisible(false),
                            placeholderContent: '请填写手机号',
                        }}
                    </MyBottomSheet>
                )
            case '2':
                return (
                    <MyBottomSheet id={id} isVisible={isVisible}>
                        {{
                            content: '绑定邮箱',
                            cancel: () => setIsVisible(false),
                            placeholderContent: '请填写邮箱',
                        }}
                    </MyBottomSheet>
                )
        }
    }
    useEffect(() => {
        console.log(Id)
    }, [Id])
    return (
        <ScrollView
            style={{ height: height }}
            className="bg-white pt-[4] pl-[40] pr-[40]"
        >
            <View className="flex-row items-center pt-[20] pb-[20]  border-[#F1F3F4] border-b">
                <Text
                    className="flex-1"
                    style={{ fontSize: 15, fontWeight: '300' }}
                >
                    头像
                </Text>
                <MyImagePicker></MyImagePicker>
            </View>
            <ProfileFlatList getId={setId}>
                {{ set: () => setIsVisible(true) }}
            </ProfileFlatList>
            {Id && feedBack(Id)}
        </ScrollView>
    )
}

export default memo(Profile)
