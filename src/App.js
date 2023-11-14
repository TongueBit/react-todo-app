import './App.css';
import TodoApp from "./TodoApp/todoApp";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Dashboard from "./Components/Dashboard/dashboard";
import PageNotFound from "./Components/PageNotFound/pageNotFound";


function App() {

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<TodoApp/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/*" element={<PageNotFound/>} />
            </Routes>
        </Router>
    );
}

export default App;
