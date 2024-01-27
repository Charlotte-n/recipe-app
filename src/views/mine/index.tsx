import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import {
    View,
    Image,
    Dimensions,
    FlatList,
    Text,
    TouchableOpacity,
} from 'react-native'
import { Button, Icon } from '@rneui/themed'
import { DATA } from '../../data/mine'
import { useAppDispatch, useAppSelector } from '../../store'
import { shallowEqual } from 'react-redux'
import { clearUserInfoAction } from '../../store/slice/login-register-slice'
interface IProps {
    children?: ReactNode
    navigation: any
}

const Home: FC<IProps> = ({ navigation }) => {
    const height = Dimensions.get('window').height
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
                className="flex-row items-center pt-[30] pb-[30] border-b border-[#F1F3F4]"
                onPress={() => navigation.navigate(path)}
            >
                <Text
                    className="flex-1 "
                    style={{ fontSize: 17, fontWeight: '300' }}
                >
                    {title}
                </Text>
                <Icon name={'right'} type={'antdesign'} size={20}></Icon>
            </TouchableOpacity>
        )
    }
    //退出登录
    const checkout = () => {
        //清空用户信息
        dispatch(clearUserInfoAction())
        navigation.navigate('LoginRegisterHomeScreen')
    }
    return (
        <View
            className="bg-white pl-[40] pr-[40] pt-[50]"
            style={{ height: height }}
        >
            <View className="flex-row items-center mb-[40] ">
                <Image
                    className="rounded-full mr-[30]"
                    source={require('../../../assets/images/bg_login_header.png')}
                    style={{
                        width: 100,
                        height: 100,
                    }}
                ></Image>
                <Text style={{ fontSize: 25, fontWeight: 'normal' }}>
                    {username}
                </Text>
            </View>
            <View>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => (
                        <Item title={item.title} path={item.path} />
                    )}
                    keyExtractor={(item) => item.id}
                />
                <Button title={'退出登录'} onPress={() => checkout()}></Button>
            </View>
        </View>
    )
}

export default memo(Home)
