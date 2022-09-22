import React,{useState} from 'react'

export default function ComplexHook() {
  const [hobbys, setHobbys] = useState(['篮球','足球'])
  const [friends, setFriends] = useState([
    {id:1,name:'王小明',age:16},
    {id:2,name:'王二明',age:17},
    {id:3,name:'王三明',age:19},
    {id:4,name:'王大明',age:25},
  ])

  const addFriend = ()=>{
    let newFriends = [...friends]
    newFriends.push({id:5,name:'小芳',age:26})
    setFriends(newFriends)
  }
  const addAgeWithIndex = (index) => {
    let newFriends = [...friends]
    newFriends[index].age += 1
    setFriends(newFriends)
  }

  return (
    <div>
      <h2>爱好列表</h2>
      <button onClick={e=>setHobbys([...hobbys,'橄榄球'])}>新增爱好</button>
      <ul>
        {
          hobbys.map((item,index)=>{
            return (
              <li key={index}>爱好{index}:{item}</li>
            )
          })
        }
      </ul>
      <h2>朋友列表</h2>
      <button onClick={e=>addFriend()}>新增朋友</button>
      <ul>
        {
          friends.map((item,index)=>{
            return (
              <li key={item.id}>
                姓名:{item.name} 年龄:{item.age}
                <button onClick={e=> addAgeWithIndex(index)}>年龄加一</button>
              </li>
            )
          })
        }
      </ul>

    </div>
  )
}
