import Cart from "./components/Cart"
import Dashboard from "./components/Dashboard"
import Navbarr from "./components/Navbarr"
import Products from "./components/Products"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from "react-redux"
import store from "./store/store"
const App = () => {






  return (
    <div>

      <BrowserRouter>
        <Provider store={store}>
          <Navbarr />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/D" element={<Dashboard />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Provider>
      </BrowserRouter>

    </div>
  )
}

export default App