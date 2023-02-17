import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import Recipe from './pages/Recipe';
import NotFound from './pages/NotFound';
import CategoryPage from './pages/CategoryPage';

function App() {
    return (
        <div className="App">
            <Router basename="/react-food">
                <Header />
                <main className="container content">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/category/:name" component={CategoryPage} />
                        <Route path="/meal/:id" component={Recipe} />
                        <Route component={NotFound} />
                    </Switch>
                </main>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
