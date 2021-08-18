import React, { useState, useEffect, FC } from 'react'
import { View } from '@tarojs/components'
import './index.less'
import TopTab from '../../components/topTab'

const Index: FC = () => {
  const [curIndex, setCurIndex] = useState<number>(0)

  const handleClickTab = (index) => {
    if (curIndex === index) return
    setCurIndex(index)
  }

  return (
    <View className='calculator-detail'>
      <TopTab curIndex={curIndex} onTrigger={handleClickTab}></TopTab>
    </View>
  )
}

export default Index