import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Text, View } from 'nativewind/dist/preflight'
import { createStackNavigator } from '@react-navigation/stack'
import Diet from '../views/diet'
import Search from '../views/diet/search'

interface IProps {
    children?: ReactNode
}

const Stack = createStackNavigator()
const DietScreen: FC<IProps> = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={'dietHomeScreen'}
                component={Diet}
                options={{
                    headerShown: false,
                }}
            ></Stack.Screen>
        </Stack.Navigator>
    )
}

export default memo(DietScreen)
