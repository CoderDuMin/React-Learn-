import React, { createContext, PureComponent } from 'react'
import CounterClass from './01_体验hooks/01_counter_class'
import CounterHook from './01_体验hooks/02_counter_hook'
import CounterHook2 from './01_体验hooks/03_counter_hook'
import MultipleHook from './02_useState使用/01_多个状态的使用'
import ComplexHook from './02_useState使用/02_复杂状态使用'
import PageTitleWithCounter from './03_useEffect使用/01_class实现标题的修改'
import HookTitleWithCounter from './03_useEffect使用/02_useEffect的hook实现title的修改'
import EffectHookCancelDemo from './03_useEffect使用/03_useEffect模拟订阅和取消订阅'
import MultiEffectHookDemo from './03_useEffect使用/04_多useEffect一起使用'

import HookWithContext from './04_useContext使用/01_useContext使用'

import Home from './05_useReducer使用/home'
import Profile from './05_useReducer使用/Profile'

import CallbackHookDemo01 from './06_useCallback使用/01_useCallBack不能进行的性能优化'
import CallbackHookDemo02 from './06_useCallback使用/02_useCallback能进行的性能优化'

import UseMemoHookDemo01 from './07_useMemo使用/01_useMemo复杂计算的应用'
import UseMemoHookDemo02 from './07_useMemo使用/02_usseMemo传入子组件应用类型'

import UseRefHookDemo01 from './08_useRef使用/01_useRef引用DOM'
import UseRefHookDemo02 from './08_useRef使用/02_useRef引用其他数据'
import ForwardRefDemo from './09_useImperativeHandle/01_回顾forwardRef的用法'
import UseImperativeHandleDemo from './09_useImperativeHandle/02_useImperativeHandle用法'
import UseLayoutEffectDemo01 from './10_useLayoutEffect使用/01_useEffect的count修改'
import UseLayoutEffectDemo02 from './10_useLayoutEffect使用/02_useLayoutEffect的count修改'

export const UserContext = createContext()
export const FoodContext = createContext()
export default class App extends PureComponent {
  render() {
    return (
      <div>
        {/* <CounterClass /> */}
        {/* <CounterHook /> */}
        {/* <CounterHook2 /> */}
        {/* <MultipleHook/> */}
        {/* <ComplexHook /> */}
        {/* <PageTitleWithCounter /> */}
        {/* <HookTitleWithCounter /> */}
        {/* <EffectHookCancelDemo /> */}
        {/* <MultiEffectHookDemo /> */}
        {/* useContext */}
        {/* <UserContext.Provider value={{name:'xxx',age:16,height:1.88}}>
          <FoodContext.Provider value={{likeFood:'汉堡',hateFood:'肥肉'}}>
            <HookWithContext />
          </FoodContext.Provider>
        </UserContext.Provider> */}

        {/* useReducer */}
        {/* <Home/>
        <Profile/> */}

        {/* useCallBack */}
        {/* <CallbackHookDemo01 />
        <CallbackHookDemo02 /> */}

        {/* useMemo */}
        {/* <UseMemoHookDemo01 />
        <UseMemoHookDemo02 /> */}

        {/* useRef */}
        {/* <UseRefHookDemo01 />
        <UseRefHookDemo02 /> */}

        {/* useImperativeHandle */}
        {/* <ForwardRefDemo />
        <UseImperativeHandleDemo /> */}

        {/* useLayoutEffect */}
        <UseLayoutEffectDemo01 />
        <UseLayoutEffectDemo02 />
      </div>
    )
  }
}
