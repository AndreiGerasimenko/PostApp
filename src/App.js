import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { PagesContainer } from './components/PagesContainer/PagesContainer'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { CreatePostPage, MainPage, PostPage } from './pages'

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' exact>
            <PagesContainer>
              <MainPage />
            </PagesContainer>
          </Route>
          <Route path='/create-post' exact>
            <PagesContainer>
              <CreatePostPage />
            </PagesContainer>
          </Route>
          <Route path='/post/:id' exact>
            <PagesContainer>
              <PostPage />
            </PagesContainer>
          </Route>
          <Route path='/edit/:id' exact>
            <PagesContainer>
              {/* <EditPost /> */}
              <CreatePostPage />
            </PagesContainer>
          </Route>
          <Redirect to='/' />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
