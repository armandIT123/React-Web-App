import Navbar from "./Navbar";
import NavbarHome from "./NavbarHome";
import ViewAll from "./ViewAll";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
import Statistics from "./Statistics";
import Home from "./Home";
import Edit from "./Edit";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/view-all">
              <ViewAll />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/statistics">
              <Statistics />
            </Route>
            <Route path="/edit">
              <Edit />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
