// import Taro, { FC } from '@tarojs/taro'
import React, { FC } from 'react'
import { AtInput } from 'taro-ui'
import { View, Text, Picker } from '@tarojs/components'
import './index.less'
import { loanYearsEnums } from '../../const/index'

type Props = {
  loanTotal: string;
  loanYears: string;
  loanRate: string;
  loanYearsIndex: number;
  onTrigger: (arg: ILoanTrigger) => void
}

const LoanInput: FC<Props> = ({ loanTotal, loanYearsIndex, loanYears,  loanRate, onTrigger }) => {
  const handleLoanTotal = (value) => {
    console.log(value)
  }
  const handleLoanYear = (value) => {
    console.log(value)
  }

  const handleLoanRate = (value) => {
    console.log(value)
  }

  const handleLoanYearSelect = (e) => {
    console.log(e.detail.value)
    onTrigger && onTrigger({
      loanYears: loanYearsEnums[e.detail.value],
      loanYearsIndex: e.detail.value
    })
  }

  return (
    <View className='loan-inputs'>
      <AtInput
        className='l-input'
        name='loanTotal'
        title='贷款总额'
        type='number'
        placeholder='请输入贷款总额'
        value={loanTotal}
        onChange={handleLoanTotal}
      >
        <Text>万元</Text>
      </AtInput>
      <Picker onChange={handleLoanYearSelect} range={loanYearsEnums} value={loanYearsIndex}>
        <AtInput
          className='l-input'
          name='loanYears'
          title='贷款年限'
          type='text'
          editable={false}
          placeholder='请选择贷款年限'
          value={loanYears}
          onChange={handleLoanYear}
        >
        </AtInput>
      </Picker>
      <AtInput
        className='l-input'
        name='loanRate'
        title='商贷利率'
        type='number'
        placeholder='选择商贷利率'
        value={loanRate}
        onChange={handleLoanRate}
      >
        <Text>%</Text>
      </AtInput>
      <View className='l-tip'>最新LPR：一年期3.85%，五年期4.65%</View>
    </View>
  )
}

export default LoanInput