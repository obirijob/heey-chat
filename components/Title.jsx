/** @format */

import { View } from 'moti'
import React from 'react'
import colors from '../constants/colors'
import CustomText from './CustomText'

const Title = ({ title }) => {
  return (
    <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
      <CustomText
        style={{
          fontSize: 35,
          fontFamily: 'msb',
          color: colors.DARK_BLUE,
          opacity: 0.8,
        }}
      >
        {title}
      </CustomText>
    </View>
  )
}

export default Title
