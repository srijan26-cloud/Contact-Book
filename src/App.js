
import Contacts from './components/contacts/Contacts';
import Nav from './components/elements/Nav';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import './styles/App.scss';
import { provider, Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
    function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Nav />
                    <div className='container'>
                        <div
                            className='py-3'
                        >
                            <Switch>
                                <Route exact path='/' component={Contacts} />
                                <Route exact path='/AddContact' component={AddContact} />
                                <Route exact path='/EditContact/:id' component={EditContact} />
                            </Switch>
                        </div>
                    </div>
                    </div>
            </Router>
        </Provider>
  );
}

export default App;
