import './App.css'

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Newsletter from "./components/newsletter/newsletter";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Header />
            {/* <Newsletter /> */}
            {/* <Footer /> */}
        </BrowserRouter>
    )
}
export default App;
