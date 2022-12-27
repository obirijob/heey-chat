/** @format */

import { faBell, faComments } from '@fortawesome/free-solid-svg-icons'
import { ScrollView } from 'moti'
import React, { useState, useEffect } from 'react'
import AnimatedView from '../components/AnimatedView'
import MessagesSection from '../components/MessagesSection'
import Search from '../components/Search'

const Messages = () => {
  // const [archived, setArchived] = useState([])
  const [pinned, setPinned] = useState([])
  const [others, setOthers] = useState([])

  useEffect(() => {
    loadMessageData()
  }, [])

  const fetchG = require('../data/getFetch')
  async function loadMessages(type = '') {
    const dt = await fetchG(`/messages/${type}`)
    return dt
  }

  async function loadMessageData() {
    const pinned_m = await loadMessages('pinned')
    setPinned(p => (p = pinned_m))
    const others_m = await loadMessages('')
    setOthers(o => (o = others_m))
  }

  return (
    <AnimatedView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ height: '100%' }}
      >
        <Search placeholder={'Search...'} />
        {pinned && (
          <MessagesSection title={'Pinned'} icon={faBell} messages={pinned} />
        )}
        {others && (
          <MessagesSection
            title={'All Messages'}
            icon={faComments}
            messages={others}
          />
        )}
      </ScrollView>
    </AnimatedView>
  )
}

export default Messages
