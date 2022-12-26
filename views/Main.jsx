/** @format */

import React, { useState } from 'react'
import { AnimatePresence, View, SafeAreaView } from 'moti'
import { Dimensions } from 'react-native'

import Menu from '../components/Menu'
import Title from '../components/Title'
import colors from '../constants/colors'

export default function Main() {
  const [title, setTitle] = useState('Chats')
  const { width, height } = Dimensions.get('screen')
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
          <Title title={title} />
        </SafeAreaView>
        <SafeAreaView>
          <Menu chooseRoute={r => setTitle(r)} />
        </SafeAreaView>
      </View>
    </AnimatePresence>
  )
}
