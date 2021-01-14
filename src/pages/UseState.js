import React,{useState, useEffect} from 'react'

const UseState = () => {
  const [count, setCount] = useState(0);
  let [obj, setObj] = useState({name: '张三', age: 18});
  console.log(useState(0))
  let [a, b] = [3, 4]
  console.log(a, b)
  useEffect(() => {
    console.log(count)
    document.title = count
  }, [count])
  return(
    <div>
      <p>{count}</p>
      <button onClick={() => {setCount(count +1)}}>ADD</button>
      <p>name: {obj.name}</p>
      <p>age: {obj.age}</p>
      {/* 使用 useState 设置的值如果是对象（引用类型)，必须替换修改，不能在原有的对象上修改 */}
      <button onClick={() => {setObj(Object.assign(obj, {name: '李四'}))}}>edit name</button>
      <button onClick={() => {setObj({name: '王五', age: 19})}}>replace name</button>
      <button onClick={()=> {setCount(6)}}>修改网页标题为6</button>
    </div>
  )
}

export default UseState
