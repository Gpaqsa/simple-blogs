import {Route, Routes} from "react-router";
import Home from "./pages/Home.jsx";
import BlogList from "./components/BlogList.jsx";
import UserList from "./components/UserList.jsx";

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/posts" element={<BlogList/>}/>
                <Route path="/posts/:id" element={<BlogList/>}/>

                <Route path="/users" element={<UserList/>}/>
                <Route path="/users/:id" element={<UserList/>}/>
            </Routes>
        </>
    );
}

export default App;
