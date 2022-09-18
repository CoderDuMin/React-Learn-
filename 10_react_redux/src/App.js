
// import Home from './pages/home1'
import {Provider} from 'react-redux'
import store from './store/index'
// import About from './pages/about' 
// import Home from './pages/home2-自定义connect'

import Home from './pages/home5-redux-saga使用'
import About from './pages/about3'

function App() {
  return (
    <Provider store={store}>
      <Home />
      <br />
      <About />
    </Provider>
  );
}

export default App;
