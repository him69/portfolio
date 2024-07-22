import './component/App.css';
import Greating from './component/Greating';
import GreatingClass from './component/GreatingClass';
import Counter from './component/Counter';
import List from './component/Items';
import Logger from './component/Logger';
import DataFacher from './component/DataFetcher';
import Timer from './component/Timer';
import WindowWidth from './component/WindoWidth';
import Login from './component/ConditionRendaring';
import FormSub from './component/formSub';
import SaveVal from './component/LocalStorgeVal';
import { AuthProvider } from './component/AuthContext';
import UseAuthForLogin from './component/useAuthForLogin';
import { CartProvider } from './component/CartContext';
import DisplayList from './component/UseCart';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './home/page';
import About from './component/About';
import Link from 'next/link';
import Box from './component/Box';
function App() {
  const name = 'sukoon'
  const initialSec = 15;
  const items = ['hello', 'sukoon', 'how', 'are', 'you']
  return (
    // <ThemeProvider> for testing of context
    // <AuthProvider>
    // <CartProvider>
    //   <div className="App">
    //     <FormSub />
    //     <Timer initialSec={initialSec} />
    //     <Greating name={name} />
    //     <GreatingClass />
    //     <Counter />
    //     <List items={items} />
    //     <Logger />
    //     <DataFacher />
    //     <WindowWidth />
    //     <Login />
    //     <SaveVal />
    //     <UseAuthForLogin/>
    //     <UsingContext />
    //     <DisplayList />
    //   </div>
    // </CartProvider>
    // </AuthProvider>
    // </ThemeProvider>
    // <CartProvider>
    //   <div className="App">
    //     <h1>Shopping Cart</h1>
    //     <DisplayList />
    //   </div>
    // </CartProvider>
    <>
    <FormSub />
    <Box/>
    </>
  );
}

export default App;
