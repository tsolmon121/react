import{
    BrowserRouter as Router,
    Switch,
    Route,
    
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function MovieApp() {
   return <Router>
    <Switch>
        
        <Route path="/m/:id"><Detail/>
        </Route>
        <Route path="/"><Home/></Route>
    </Switch>
   </Router>;
}
export default MovieApp;