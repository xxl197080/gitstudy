import React from 'react'
import {Select, notification} from 'antd'

const Option = Select.Option;

export default function () {
  function onChange(value) {
    console.log('onChange', value)
    notification.open({
      message: 'Notification Title',
      description: 123,
      style: {
        width: 600,
        marginLeft: -1000,
      },
    });
  }
  let value = -1;
  value = value === -1 ? '' : value
  function onFocus(value) {
    console.log('onFocus', value)
  }
  
  function onBlur(value) {
    console.log('onBlur', value)
  }
  
  function onSearch(value) {
    console.log('onSearch', value)
  }
  const options = [
    {text: "国语", value: 0},
    {text: "粤语", value: 1},
    {text: "闽南语", value: 2},
    {text: "日语", value: 3},
    {text: "韩语", value: 4},
    {text: "英语", value: 5},
  ]
  return (
    <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    value={value}
    // onFocus={onFocus}
    // onBlur={onBlur}
    // onSearch={onSearch}
    filterOption={(input, option) =>
      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    {
      options.map(val => {
        return <Option value= {val.value}>{val.text}</Option>
      })
    }
  </Select>
  )
}
