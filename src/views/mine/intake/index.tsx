import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'nativewind/dist/preflight'
import IntakeItem from './components/intake-item'

interface IProps {
    children?: ReactNode
}

const Intake: FC<IProps> = () => {
    const array = [1, 2, 3]
    return (
        <ScrollView className="bg-[#FFFFFF] pl-[20] pr-[20]">
            <Text style={{ fontSize: 20 }} className="mb-[20]">
                今日摄入
            </Text>
            {array.map((item, index) => {
                return (
                    <View key={index} className="mb-[10]">
                        <IntakeItem></IntakeItem>
                    </View>
                )
            })}
            <View>
                <Text>今日还可摄入830千卡</Text>
            </View>
            <View></View>
        </ScrollView>
    )
}

export default memo(Intake)
