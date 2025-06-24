import Game from "./pages/Game";
import {Route, Routes} from "react-router-dom";
import Layout from "./pages/common/Layout";

export default function App(){

  const Index = () => {
    return (
        <>
          <h2>Hello React</h2>
        </>
    )
  }

  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Index/>} />
        <Route path="/game" element={<Game/>} />
      </Route>
    </Routes>
  )
}