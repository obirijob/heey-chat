/** @format */

import React, { useState } from 'react'
import { AnimatePresence, View, SafeAreaView, MotiView } from 'moti'
import { Dimensions } from 'react-native'

import Menu from '../components/Menu'
import Title from '../components/Title'
import colors from '../constants/colors'

import Messages from './Messages'
import Status from './Status'
import Calls from './Calls'
import Settings from './Settings'

export default function Main() {
  const [component, setComponent] = useState({
    title: 'Chats',
    route: 'messages',
  })
  const { width, height } = Dimensions.get('screen')

  const view_maps = {
    messages: <Messages />,
    status: <Status />,
    calls: <Calls />,
    settings: <Settings />,
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <View
        style={{
          backgroundColor: colors.DARK_BLUE,
          width,
          height,
        }}
      >
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: colors.WHITE,
            margin: 7,
            borderRadius: 45,
          }}
        >
          <Title title={component.title} />
          {view_maps[component.route]}
        </SafeAreaView>
        <SafeAreaView>
          <Menu chooseRoute={r => setComponent(r)} />
        </SafeAreaView>
      </View>
    </AnimatePresence>
  )
}
