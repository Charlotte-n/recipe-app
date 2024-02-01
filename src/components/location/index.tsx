import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { View, Text } from 'react-native'
import * as Location from 'expo-location'
interface IProps {
    children?: ReactNode
}

const MyLocation: FC<IProps> = () => {
    const [location, setLocation] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    useEffect(() => {
        ;(async () => {
            let { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied')
                return
            }

            let location: any = await Location.getCurrentPositionAsync({})
            setLocation(location)
        })()
    }, [])

    let text = 'Waiting..'
    if (errorMsg) {
        text = errorMsg
    } else if (location) {
        console.log()
        text = JSON.stringify(location)
    }
    return (
        <View>
            <Text>{text}</Text>
        </View>
    )
}

export default memo(MyLocation)
