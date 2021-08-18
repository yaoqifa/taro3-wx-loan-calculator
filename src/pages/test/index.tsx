import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class Test extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='test'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
