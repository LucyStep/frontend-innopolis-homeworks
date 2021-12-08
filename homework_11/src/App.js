import './App.css';
import MainPage from "./pages/MainPage/MainPage";
import UserPage from "./pages/UserPage/UserPage";
import Header from "./components/Header/Header";

import {Routes, Route, Outlet} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path={'users'} element={<Layout/>}>
        <Route index element={<MainPage/>}/>
        <Route path={':id'} element={<UserPage/>}/>
      </Route>
    </Routes>
  )
}

function Layout() {
  return (
    <div className="App">
      <Header/>
      <main className={'content'}>
        <Outlet/>
      </main>
    </div>
  )
}

export default App;