import React, { memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { Dimensions, Text, TouchableOpacity, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { Dialog, Icon } from '@rneui/themed'
import { log } from 'expo/build/devtools/logger'
interface IProps {
    children?: ReactNode
    sex: number
    setSex: (value: string) => void
}

const SexPicker: FC<IProps> = ({ sex, setSex }) => {
    const [isShow, setIsShow] = useState(false)
    //进行联动
    const selected = useRef(String(sex))
    return (
        <TouchableOpacity
            className="flex-row items-center border-[#F1F3F4] border-b"
            onPress={() => setIsShow(true)}
            style={{
                height: 59,
            }}
        >
            <Text
                className="flex-1"
                style={{ fontSize: 15, fontWeight: '300' }}
            >
                性别
            </Text>
            <View className="flex-row items-center">
                <Text style={{ fontSize: 15, fontWeight: '300' }}>
                    {selected.current
                        ? selected.current === '0'
                            ? '男'
                            : '女'
                        : String(sex) === '0'
                          ? '男'
                          : '女'}
                </Text>
                <Icon
                    type={'antdesign'}
                    name={'caretdown'}
                    size={10}
                    color={'#666666'}
                    style={{
                        marginLeft: 10,
                        marginRight: 15,
                    }}
                ></Icon>
            </View>
            <Dialog isVisible={isShow}>
                <Dialog.Title title={'修改性别'}></Dialog.Title>
                <TouchableOpacity
                    onPress={() => {
                        setIsShow(false)
                        selected.current = '0'
                        console.log('我当前的性别', selected.current)
                        setSex(selected.current)
                    }}
                >
                    <View>
                        <Text
                            style={{
                                height: 40,
                                fontSize: 18,
                            }}
                        >
                            男
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setIsShow(false)
                        selected.current = '1'
                        setSex(selected.current)
                    }}
                >
                    <Text
                        style={{
                            height: 40,
                            fontSize: 18,
                        }}
                    >
                        女
                    </Text>
                </TouchableOpacity>
            </Dialog>
        </TouchableOpacity>
    )
}

export default memo(SexPicker)
