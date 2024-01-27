import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Text, View } from 'nativewind/dist/preflight'

interface IProps {
    children?: ReactNode
}

const HealthMealScreen: FC<IProps> = () => {
    return (
        <View>
            <Text>健康饮食</Text>
        </View>
    )
}

export default memo(HealthMealScreen)
