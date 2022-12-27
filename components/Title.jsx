/** @format */

import { View } from 'moti'
import React from 'react'
import CustomText from './CustomText'

const Title = ({ title }) => {
  return (
    <View>
      <CustomText style={{ fontSize: 30 }}>{title}</CustomText>
    </View>
  )
}

export default Title
