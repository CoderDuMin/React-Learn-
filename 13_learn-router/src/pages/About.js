import React, { PureComponent } from 'react'
import {NavLink,Route,Switch} from 'react-router-dom'
import { renderRoutes,matchRoutes} from 'react-router-config'

export function AboutContact(props){
  return (
    <h3>联系我们哦</h3>
  )
}
export function AboutMain(props){
  return (
    <h3>这里是About主页</h3>
  )
}
export function AboutCulture(props){
  return (
    <h3>这里是About文化</h3>
  )
}
export function AboutJoinUs(props){
  return (
    <h3>欢迎投递简历到1254@126.com</h3>
  )
}
export default class About extends PureComponent {
  render() {
    const tt = matchRoutes(this.props.route.routes,'/about')
    console.log(tt);
    return (
      <div>
        <h2>About</h2>
        {/* 使用嵌套路由 */}
        <NavLink exact to='/about' activeStyle={{color:'red',fontSize:'20px'}}>企业详情</NavLink>
        <NavLink exact to={'/about/culture'} activeStyle={{color:'red',fontSize:'20px'}}>企业文化</NavLink>
        <NavLink exact to={'/about/contact'} activeStyle={{color:'red ',fontSize:'20px'}}>联系我们</NavLink>
        <button onClick={e=>this.handleJoin()}>加入我们</button>

        {/* <Switch>
            <Route exact path='/about' component={AboutMain} />
            <Route path={'/about/culture'} component={AboutCulture} />
            <Route path={'/about/contact'} component={AboutContact} />
            <Route path={'/about/join'} component={AboutJoinUs} />
          </Switch> */}

          {
            renderRoutes(this.props.route.routes)
          }
      </div>
    )
  }
  handleJoin(){
    this.props.history.push('/about/join')
  }
}
