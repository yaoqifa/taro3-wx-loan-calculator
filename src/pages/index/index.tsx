import React, { useState, FC } from 'react'
import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './index.less'
import TopTab from '../../components/topTab'
import LoanInput from '../../components/loanInput/index'
import { loanYearsEnums } from '../../const/index'
import { EqualInterest } from '../../utils/helper'

const Index: FC = () => {
  const [curIndex, setCurIndex] = useState<number>(0)
  const [loanYearsIndex, setLoanYearsIndex] = useState<number>(29)
  const [loanTotal, setLoantotal] = useState<string>('100')
  const [loanYears, setLoanYears] = useState<string>(loanYearsEnums[loanYearsIndex])
  const [loanRate, setLoanRate] = useState<string>('4.65')

  const handleClickTab = (index) => {
    if (curIndex === index) return
    setCurIndex(index)
  }

  const handleLoanInputTrigger = (obj: ILoanTrigger = {}) => {
    if (obj.loanYears !== undefined && obj.loanYearsIndex !== undefined) {
      setLoanYears(obj.loanYears)
      setLoanYearsIndex(obj.loanYearsIndex)
    }
    if (obj.loanTotal !== undefined) {
      setLoantotal(obj.loanTotal)
    }
    if (obj.loanRate !== undefined) {
      setLoanRate(obj.loanRate)
    }
  }

  const handleStartCalc = () => {
    const result = EqualInterest({
      loanTotal: +loanTotal,
      loanYears: loanYearsIndex + 1,
      loanRate: +loanRate
    });
    console.log(result)
  }

  return (
    <View className='calculator-detail'>
      <TopTab curIndex={curIndex} onTrigger={handleClickTab}></TopTab>
      <LoanInput
        loanTotal={loanTotal}
        loanYears={loanYears}
        loanRate={loanRate}
        loanYearsIndex={loanYearsIndex}
        onTrigger={handleLoanInputTrigger}
      />
      <AtButton type='primary' className='start-calc-btn' onClick={handleStartCalc}>开始计算</AtButton>
    </View>
  )
}

export default Index