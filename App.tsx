import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import TabBar from './src/route/tab-bar'
import LoginRegisterHomeScreen from './src/route/login'
import { Icon } from '@rneui/themed'
import { MineOtherScreen } from './src/data/app-path'
import { Provider } from 'react-redux'
import store, { persistor } from './src/store'
import { Text } from 'react-native'
import { PersistGate } from 'redux-persist/es/integration/react'
import theme from "./src/styles/theme/color";

export default function App() {
    const Stack = createStackNavigator()
    useEffect(() => {}, [])
    return (
        <Provider store={store}>
            <PersistGate
                persistor={persistor}
                loading={<Text>Loading...</Text>}
            >
                <NavigationContainer>
                    <Stack.Navigator
                        initialRouteName={'LoginRegisterHomeScreen'}
                    >
                        <Stack.Screen
                            name={'LoginRegisterHomeScreen'}
                            component={LoginRegisterHomeScreen}
                            options={{
                                headerShown:false
                            }}
                        ></Stack.Screen>
                        <Stack.Screen
                            name={'tabs'}
                            component={TabBar}
                            options={{
                                headerShown: false, // 隐藏StackNavigator的导航栏
                            }}
                        ></Stack.Screen>
                        {/*个人中心页面:一个页面中跳转到其他的详情页面*/}
                        {MineOtherScreen.map((item, index) => {
                            return (
                                <Stack.Screen
                                    key={item.name}
                                    name={item.name}
                                    component={item.component}
                                    options={{
                                        headerShadowVisible: false,
                                        headerTitle: item.headerTitle,
                                        headerTitleAlign: 'center',
                                        headerBackImage: () => (
                                            <Icon
                                                name={'left'}
                                                type={'antdesign'}
                                            ></Icon>
                                        ),
                                    }}
                                ></Stack.Screen>
                            )
                        })}
                    </Stack.Navigator>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    )
}
