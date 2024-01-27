import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Text, View } from 'react-native'

interface IProps {
    children?: ReactNode
}

const Body: FC<IProps> = () => {
    return (
        <View>
            <Text>身体数据</Text>
        </View>
    )
}

export default memo(Body)
