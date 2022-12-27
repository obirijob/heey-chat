/** @format */

import React, { useState } from 'react'
import { View, Text } from 'moti'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  faPhone,
  faGear,
  faCameraRetro,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import colors from '../constants/colors'
import CustomText from './CustomText'
import { Pressable } from 'react-native'

const Menu = ({ chooseRoute }) => {
  const [selected, setSelected] = useState('messages')

  const [routes, setRoutes] = useState([
    { route: 'status', icon: faCameraRetro, title: 'Status' },
    { route: 'calls', icon: faPhone, new: 4, title: 'Calls' },
    { route: 'messages', icon: faComment, title: 'Chats' },
    { route: 'settings', icon: faGear, title: 'Settings' },
  ])
  return (
    <View
      style={{
        margin: 8,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      }}
    >
      {routes.map((r, i) => (
        <Pressable
          key={`nav-${i}`}
          onPress={() => {
            setSelected(r.route)
            chooseRoute({ title: r.title, route: r.route })
          }}
        >
          <View
            animate={
              selected === r.route
                ? { backgroundColor: colors.LIGHT_BLUE }
                : { backgroundColor: colors.DARK_BLUE }
            }
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 45,
              height: 45,
              borderRadius: 25,
              position: 'relative',
            }}
          >
            {r.new && (
              <View
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 20,
                  backgroundColor: colors.RED,
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'absolute',
                  top: -2,
                  right: -2,
                }}
              >
                <CustomText style={{ color: colors.WHITE, fontSize: 10 }}>
                  {r.new}
                </CustomText>
              </View>
            )}
            <FontAwesomeIcon
              icon={r.icon}
              color={colors.WHITE}
              size={20}
              style={{ opacity: selected === r.route ? 1 : 0.6 }}
            />
          </View>
        </Pressable>
      ))}
    </View>
  )
}

export default Menu
