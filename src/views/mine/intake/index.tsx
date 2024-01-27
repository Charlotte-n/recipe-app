import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Text, View } from 'react-native'

interface IProps {
    children?: ReactNode
}

const Intake: FC<IProps> = () => {
    return (
        <View>
            <Text>我的摄入</Text>
        </View>
    )
}

export default memo(Intake)
