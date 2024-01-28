import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Profile from '../views/mine/profile'
import Mine from '../views/mine'
import UserAgree from '../views/mine/profile/c-pages/user-agree'
import { Icon } from '@rneui/themed'

interface IProps {
    children?: ReactNode
}
const Stack = createStackNavigator()
const MineScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={'mine'}
                component={Mine}
                options={{ headerShown: false }}
            ></Stack.Screen>
        </Stack.Navigator>
    )
}

export default memo(MineScreen)
