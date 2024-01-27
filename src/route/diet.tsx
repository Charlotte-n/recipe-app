import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Text, View } from 'nativewind/dist/preflight'

interface IProps {
    children?: ReactNode
}

const DietScreen: FC<IProps> = () => {
    return (
        <View>
            <Text>饮食</Text>
        </View>
    )
}

export default memo(DietScreen)
