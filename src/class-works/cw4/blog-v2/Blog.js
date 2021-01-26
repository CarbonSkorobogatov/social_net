import React from 'react';
import './blog-v2.css';
import { Container, Header, Menu  } from 'semantic-ui-react';
import { BrowserRouter as Router, NavLink, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Users from "./containers/Users";
import About from "./containers/About";
import UserDetails from "./containers/UserDetails";
import NotFound from "./containers/NotFound";
import Posts from './containers/Posts';
import PostDetail from './containers/PostDetail';


export default function BlogV2 () {
  return (
    <Container>
      <Router>
        <Header>
          <NavLink to='/'>Blog v2</NavLink>
        </Header>
        <Menu>
          <NavLink to='/users' className='item'>Users</NavLink>
          <NavLink to='/posts' className='item'>Posts</NavLink>
          <NavLink to='/about' className='item'>About</NavLink>
        </Menu>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>

          <Route path='/users' exact>
            <Users />
          </Route>
          <Route path='/users/:userId'>
            <UserDetails />
          </Route>

          <Route path='/about' exact>
            <About />
          </Route>

          <Route path='/posts' exact>
            <Posts />
          </Route>

          <Route path='/posts/:postId'>
            <PostDetail />
          </Route>

          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </Container>
  )
}
