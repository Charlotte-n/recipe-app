import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { Text, View } from 'react-native'
import SexPicker from './sex-picker'
import DatePicker from './date-picker'
import HighPicker from './high-picker'
import { Button } from '@rneui/themed'
import SlidePicker from 'react-native-slidepicker'

interface IProps {
    children?: ReactNode
}

const BodyContent: FC<IProps> = () => {
    const [isShow, setIsShow] = useState(false)
    const dataSource = [
        [
            { label: 'type A', value: 0 },
            { label: 'type B', value: 1 },
            { label: 'type C', value: 2 },
            { label: 'type D', value: 3 },
        ],
        [
            { label: 'red', value: 0 },
            { label: 'yellow', value: 1 },
            { label: 'blue', value: 2 },
            { label: 'green', value: 3 },
            { label: 'gray', value: 4 },
        ],
        [
            { label: 33, value: 33 },
            { label: 34, value: 34 },
            { label: 35, value: 35 },
            { label: 36, value: 36 },
            { label: 37, value: 37 },
            { label: 38, value: 38 },
            { label: 39, value: 39 },
            { label: 40, value: 40 },
            { label: 41, value: 41 },
            { label: 42, value: 42 },
            { label: 43, value: 43 },
            { label: 44, value: 44 },
        ],
    ]
    return (
        <View>
            <SexPicker></SexPicker>
            <DatePicker></DatePicker>
            <Button title={'显示'} onPress={() => setIsShow(true)}></Button>
            <HighPicker isShow={isShow}></HighPicker>
            <Button title={'123'}></Button>
            <SlidePicker.Parallel
                visible={isShow}
                wheels={3}
                dataSource={dataSource}
                values={[]}
                onCancelClick={() => console.log('cancel')}
                onConfirmClick={(res: any) => console.log(res)}
            />
        </View>
    )
}

export default memo(BodyContent)
