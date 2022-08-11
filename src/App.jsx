import { Routes, Route } from "react-router-dom";
import Main from './pages/main';
import 'antd/dist/antd.min.css';
import './assets/styles.css';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}/>
      </Routes>
    </>
  );
}
