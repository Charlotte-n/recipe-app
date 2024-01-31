import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { ScrollView } from 'nativewind/dist/preflight'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchFilter from './components/search'
import HotRecommend from '../../components/hot-recommend'
import RecipeCatory from './components/recipe-catory'
import RecipeCategory from './components/recipe-catory'
interface IProps {
    children?: ReactNode
}

const Diet: FC<IProps> = () => {
    return (
        <SafeAreaView style={{ flex: 1 }} mode={'margin'}>
            <ScrollView
                style={{ flex: 1 }}
                className="pl-[10] pr-[10] bg-white"
            >
                <View className="mt-[10]">
                    <SearchFilter type={'home'}></SearchFilter>
                </View>
                <View>{/*    分类*/}</View>
                <View>
                    <HotRecommend></HotRecommend>
                </View>
                <View>
                    <RecipeCategory></RecipeCategory>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default memo(Diet)
