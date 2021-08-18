// import Taro, { FC } from '@tarojs/taro'
import React, { useState, useEffect, FC } from 'react'
import { View, Text } from '@tarojs/components'
import './index.less'

const Detail: FC = () => {
  const [total, setTotal] = useState<number>(300)

  useEffect(() => {
    setTotal(400)
  }, [])

  return (
    <View className='calculator-detail'>
      <Text>detail</Text>
      <Text>{total}</Text>
    </View>
  )
}

export default Detail