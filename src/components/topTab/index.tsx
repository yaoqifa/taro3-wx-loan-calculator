// import Taro, { FC } from '@tarojs/taro'
import React, { useState, useEffect, FC } from 'react'
import classnames from "classnames"
import { View } from '@tarojs/components'
import './index.less'
import { TopTabEnums } from '../../const/index'

type Props = {
  curIndex: number;
  onTrigger: (index: number) => void
}

const Detail: FC<Props> = ({ curIndex = 0, onTrigger }) => {

  return (
    <View className='tab-wrap'>
      {TopTabEnums.map((item, index) => (
        <View
          key={index}
          onClick={() => onTrigger(index)}
          className={classnames({
            'tab': true,
            'active': curIndex === index
          })}
        >
            {item}
        </View>
      ))}
    </View>
  )
}

export default Detail