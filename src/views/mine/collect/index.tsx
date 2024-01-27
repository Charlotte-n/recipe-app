import React, {memo} from 'react'
import type {FC, ReactNode} from 'react'
import {Text, View} from "react-native";

interface IProps {
    children?: ReactNode
}

const Collect: FC<IProps> = () => {
    return <View>
      <Text>我的收藏</Text>
    </View>
}

export default memo(Collect)
