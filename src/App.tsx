import ByFirstChar from "./sections/ByFirstChar";
import ByName from "./sections/ByName";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";

const RoutesData = [
  {
    name: "By First Character",
    element: ByFirstChar,
    path: "/first-char",
  },
  {
    name: "By Name",
    element: ByName,
    path: "/name",
  },
];

function App() {
  return (
    <div style={{ marginTop: 60 }} >
      <Header items={RoutesData.map(({ name, path }) => ({ name, path }))} height={40}/>
      <Routes>
        {RoutesData.map((route) => (
          <Route key={route.name} path={route.path} element={route.element()} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
