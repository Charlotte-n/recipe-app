import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { Image, View, ScrollView } from 'nativewind/dist/preflight'
import theme from '../../../styles/theme/color'
import { Button, ThemeProvider } from '@rneui/themed'
import { MainTheme } from '../../../styles/theme/ui-theme'
import { useAppSelector } from '../../../store'
import { shallowEqual } from 'react-redux'
import { StackActions } from '@react-navigation/native'
import { Dimensions ,StatusBar} from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'

interface IProps {
    children?: ReactNode
    navigation: any
}

const LoginHome: FC<IProps> = ({ navigation }) => {
    const { userInfo } = useAppSelector((state) => {
        return {
            userInfo: state.LoginRegisterSlice.userInfo,
        }
    }, shallowEqual)

    return (
        <SafeAreaView className="flex-1">
            <StatusBar backgroundColor={theme.colors.primary}></StatusBar>
            <View
                style={{
                    width: '100%',
                    height: Dimensions.get('screen').height /1.5,
                }}
            >
                <Image
                    source={require('../../../../assets/images/bg_welcome_header.png')}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode={'cover'}
                ></Image>
            </View>
            <View
                style={{
                    backgroundColor: theme.colors.primary,
                    height: Dimensions.get('screen').height ,
                    alignItems: 'center',
                }}
            >
                <ThemeProvider theme={MainTheme}>
                    <Button
                        title={'登录'}
                        buttonStyle={{
                            backgroundColor: theme.colors.deep01Primary,
                            borderRadius: 30,
                            paddingVertical: 10,
                        }}
                        containerStyle={{
                            width: 250,
                            borderRadius: 30,
                            marginVertical: 20,
                        }}
                        titleStyle={{
                            fontSize: 20,
                        }}
                        onPress={() =>
                            navigation.dispatch(StackActions.replace('Login'))
                        }
                    ></Button>
                    <Button
                        title={'注册'}
                        buttonStyle={{
                            backgroundColor: 'white',
                            borderRadius: 30,
                            paddingVertical: 10,
                        }}
                        containerStyle={{
                            width: 250,
                            borderRadius: 30,
                            marginTop: 10,
                        }}
                        titleStyle={{
                            color: theme.colors.deep01Primary,
                            fontSize: 20,
                        }}
                        onPress={() =>
                            navigation.dispatch(
                                StackActions.replace('Register'),
                            )
                        }
                    ></Button>
                </ThemeProvider>
            </View>
        </SafeAreaView>
    )
}

export default memo(LoginHome)
