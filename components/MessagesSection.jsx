/** @format */

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMicrophone, faPhotoFilm } from '@fortawesome/free-solid-svg-icons'
import { Image, View } from 'moti'
import React from 'react'
import moment from 'moment'

import colors from '../constants/colors'
import constants from '../data/constants'
import AnimatedView from './AnimatedView'
import CustomText from './CustomText'
import { Pressable } from 'react-native'

const MessagesSection = ({ icon, title, messages }) => {
  return (
    <AnimatedView>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
          opacity: 0.5,
        }}
      >
        <FontAwesomeIcon icon={icon} />
        <CustomText
          style={{
            opacity: 6,
            marginHorizontal: 10,
            fontSize: 16,
            // fontFamily: 'mb',
          }}
        >
          {title}
        </CustomText>
      </View>

      <View>
        {messages.map((m, i) => (
          <Pressable key={`message::${i}`}>
            <View
              style={{
                flexDirection: 'row',
                //   backgroundColor: colors.RED,
                marginVertical: 10,
              }}
            >
              <View style={{ position: 'relative' }}>
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 50,
                    marginRight: 10,
                    backgroundColor: `${colors.DARK_BLUE}66`,
                  }}
                  source={{ url: `${constants.server_url}${m.user.pic}` }}
                />
                {m.online && (
                  <View
                    style={{
                      width: 14,
                      height: 14,
                      borderRadius: 14,
                      backgroundColor: colors.GREEN,
                      borderWidth: 2,
                      borderColor: colors.WHITE,
                      position: 'absolute',
                      bottom: 0,
                      right: 12,
                    }}
                  />
                )}
              </View>
              <View
                style={{
                  flex: 1,
                  //   alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}
              >
                <View style={{ flexDirection: 'row' }}>
                  <CustomText style={{ flex: 1, fontFamily: 'msb' }}>
                    {m.user.name}
                  </CustomText>
                  <CustomText style={{}}>
                    {moment(m.latest.date).fromNow(true)}
                  </CustomText>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <CustomText style={{ flex: 1 }}>
                    {m.latest.type === 'text' ? (
                      <CustomText
                        style={
                          m.new
                            ? { fontFamily: 'msb', opacity: 1, fontSize: 12 }
                            : { opacity: 0.4 }
                        }
                      >
                        {m.latest.content}
                      </CustomText>
                    ) : (
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'center',
                          opacity: m.new ? 1 : 0.6,
                        }}
                      >
                        <FontAwesomeIcon
                          icon={
                            m.latest.type === 'voice'
                              ? faMicrophone
                              : faPhotoFilm
                          }
                          size={12}
                          style={{ marginRight: 5 }}
                        />
                        <CustomText style={m.new ? {} : {}}>
                          {m.latest.type === 'voice'
                            ? 'Audio message...'
                            : 'File...'}
                        </CustomText>
                      </View>
                    )}
                  </CustomText>
                  {m.new && (
                    <View
                      style={{
                        backgroundColor: colors.RED,
                        width: 20,
                        height: 20,
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <CustomText style={{ color: colors.WHITE }}>
                        {m.new}
                      </CustomText>
                    </View>
                  )}
                </View>
              </View>
            </View>
          </Pressable>
        ))}
      </View>
    </AnimatedView>
  )
}

export default MessagesSection
