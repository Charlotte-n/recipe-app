import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import {
    View,
    FlatList,
    Text,
    TouchableOpacity,
    Alert,
    Dimensions,
} from 'react-native'
import { Icon } from '@rneui/themed'
import { DATA } from '../../data/mine'
import { useAppDispatch, useAppSelector } from '../../store'
import { shallowEqual } from 'react-redux'
import { clearUserInfoAction } from '../../store/slice/login-register-slice'
import { ScrollView } from 'nativewind/dist/preflight'
import MyImagePicker from '../../components/image-picker'
interface IProps {
    children?: ReactNode
    navigation: any
}

const Home: FC<IProps> = ({ navigation }) => {
    const dispatch = useAppDispatch()
    const { userInfo } = useAppSelector((state) => {
        return {
            userInfo: state.LoginRegisterSlice.userInfo,
        }
    }, shallowEqual)
    const { username } = userInfo

    const Item = (props: any) => {
        const { title, path } = props
        return (
            <TouchableOpacity
                className="flex-row items-center pt-[20] pb-[20] border-b border-[#F1F3F4]"
                onPress={() => navigation.navigate(path)}
            >
                <Text
                    className="flex-1 "
                    style={{ fontSize: 15, fontWeight: '300' }}
                >
                    {title}
                </Text>
                <Icon
                    name={'right'}
                    type={'antdesign'}
                    size={14}
                    color={'#888888'}
                ></Icon>
            </TouchableOpacity>
        )
    }
    //退出登录
    const checkout = () => {
        Alert.alert('', '确定要退出登录吗', [
            {
                text: '取消',
                onPress: () => '',
                style: 'cancel',
            },
            {
                text: '确定',
                onPress: () => {
                    //清空用户信息
                    dispatch(clearUserInfoAction())
                    navigation.navigate('LoginRegisterHomeScreen')
                },
            },
        ])
    }
    return (
        <ScrollView
            className="bg-white pl-[40] pr-[40] pt-[20]"
            style={{ height: Dimensions.get('screen').height }}
        >
            <View className="flex-row items-center mb-[40] justify-between">
                <MyImagePicker></MyImagePicker>
                <TouchableOpacity
                    className="flex-row items-center"
                    onPress={() => navigation.navigate('profile')}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            marginRight: 50,
                            fontWeight: '300',
                            width: 100,
                        }}
                        ellipsizeMode={'tail'}
                        numberOfLines={1}
                    >
                        {username}
                    </Text>
                    <Icon
                        name={'right'}
                        type={'antdesign'}
                        size={20}
                        color={'#888888'}
                    ></Icon>
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                    scrollEnabled={false}
                    data={DATA}
                    renderItem={({ item }) => (
                        <Item title={item.title} path={item.path} />
                    )}
                    keyExtractor={(item) => item.id}
                />
                <TouchableOpacity
                    onPress={() => checkout()}
                    className="flex-row items-center pt-[20] pb-[20] border-b border-[#F1F3F4]"
                >
                    <Text
                        className="flex-1 "
                        style={{ fontSize: 15, fontWeight: '300' }}
                    >
                        退出登录
                    </Text>
                    <Icon
                        name={'right'}
                        type={'antdesign'}
                        size={14}
                        color={'#888888'}
                    ></Icon>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default memo(Home)
