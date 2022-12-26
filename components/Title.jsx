/** @format */

import { View } from 'moti'
import React from 'react'
import CustomText from './CustomText'

const Title = ({ title }) => {
  return (
    <View>
      <CustomText>{title}</CustomText>
    </View>
  )
}

export default Title
