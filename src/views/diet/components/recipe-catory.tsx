import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Text, useWindowDimensions, View } from 'react-native'
import ScrollableTabView, {
    DefaultTabBar,
    //@ts-ignore
} from 'react-native-scrollable-tab-view'
interface IProps {
    children?: ReactNode
}

const RecipeCategory: FC<IProps> = () => {
    return (
        <ScrollableTabView
            style={{ marginTop: 20 }}
            initialPage={1}
            renderTabBar={() => <DefaultTabBar />}
        >
            {/*@ts-ignore*/}
            <Text tabLabel="Tab #1">My</Text>
            {/*@ts-ignore*/}

            <Text tabLabel="Tab #2">favorite</Text>
            {/*@ts-ignore*/}

            <Text tabLabel="Tab #3">project</Text>
        </ScrollableTabView>
    )
}

export default memo(RecipeCategory)
