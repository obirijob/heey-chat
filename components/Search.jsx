/** @format */

import React from 'react'
import { View, Text } from 'moti'
import colors from '../constants/colors'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import CustomTextInput from './CustomTextInput'

const Search = ({ placeholder }) => {
  return (
    <View
      style={{
        margin: 5,
        backgroundColor: colors.DARK_BLUE + '13',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: 'row',
      }}
    >
      <FontAwesomeIcon icon={faSearch} style={{ marginRight: 8 }} />
      <CustomTextInput placeholder={placeholder} value={''} />
    </View>
  )
}

export default Search
