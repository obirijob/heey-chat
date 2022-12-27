/** @format */

import React from 'react'
import { AnimatePresence, View } from 'moti'

const AnimatedView = ({ children }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <View from={{ opacity: 0 }} animate={{ opacity: 1 }} to={{ opacity: 0 }}>
        {children}
      </View>
    </AnimatePresence>
  )
}

export default AnimatedView
