/** @format */

import React from 'react'
import { View } from 'moti'

const AnimatedView = ({ children }) => {
  return (
    <View from={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {children}
    </View>
  )
}

export default AnimatedView
