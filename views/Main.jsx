/** @format */

import React, { useState } from 'react'
import { AnimatePresence, View, SafeAreaView } from 'moti'
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

  return (
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
        <View style={{ marginHorizontal: 20 }}>
          <AnimatePresence exitBeforeEnter>
            {component.route === 'messages' && <Messages key={'c1'} />}
            {component.route === 'calls' && <Calls key={'c2'} />}
            {component.route === 'settings' && <Settings key={'c3'} />}
            {component.route === 'status' && <Status key={'c4'} />}
          </AnimatePresence>
        </View>
      </SafeAreaView>
      <SafeAreaView>
        <Menu chooseRoute={r => setComponent(r)} />
      </SafeAreaView>
    </View>
  )
}
