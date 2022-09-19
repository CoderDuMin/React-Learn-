import React, { PureComponent } from 'react'

import { NavLink,Route,Switch, withRouter} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import NoMatch from './pages/NoMatch'
import ProductList from './pages/ProductList'
import Profile from './pages/Profile'

import './App.css'
import Detail from './pages/Detail'
 class App extends PureComponent {
  render() {
    const id = 'yihamin'
    return (
      <div>
          <NavLink exact to='/' activeClassName='app-active'>首页</NavLink>
          <NavLink to={'/about'}  activeClassName='app-active'>关于</NavLink>
          <NavLink to={'/profile'} activeClassName='app-active'>我的</NavLink>
          <NavLink to={`/detail/${id}`} activeClassName='app-active'>详情</NavLink>
          <button onClick={e => this.jumpCart()}>购物车</button>

          {/* <Route exact path='/' component={Home} />
          <Route path={'/about'} component={About} />
          <Route path={'/profile'} component={Profile} />
          <Route  component={NoMatch} /> */}

          {/* 
          // 2.使用switch
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path={'/about'} component={About} />
            <Route path={'/profile'} component={Profile} />
            <Route  component={NoMatch} />
          </Switch> */}

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path={'/about'} component={About} />
            <Route path={'/profile'} component={Profile} />
            <Route path={'/product'} component={ProductList} />
            <Route exact path={'/detail/:id'} component={Detail} />
            <Route  component={NoMatch} />
          </Switch>
          
      </div>
    )
  }
  jumpCart(){
    this.props.history.push('/product')
  }
}
export default withRouter(App)
