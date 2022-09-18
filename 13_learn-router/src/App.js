import React, { PureComponent } from 'react'

import { NavLink,Route,BrowserRouter,Switch} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import NoMatch from './pages/NoMatch'
import Profile from './pages/Profile'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavLink exact to='/' activeStyle={{color:'orange',fontSize:'24px'}}>首页</NavLink>
          <NavLink to={'/about'} activeStyle={{color:'orange',fontSize:'24px'}}>关于</NavLink>
          <NavLink to={'/profile'} activeStyle={{color:'orange',fontSize:'24px'}}>我的</NavLink>

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
            <Route  component={NoMatch} />
          </Switch>
          

        </BrowserRouter>
      </div>
    )
  }
}
