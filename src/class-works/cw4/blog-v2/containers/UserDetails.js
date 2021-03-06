import React from 'react';
import { Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom';
import { Card, Container, Grid, Header, Icon, Image, List } from "semantic-ui-react";
import useData from "../hooks/useData";
import LoadingOverlay from "../../../cw2/life-cycle-example/components/LoadingOverlay";
import Album from "./Album";
import Post from './Post';


function UserDetails() {
  const { userId } = useParams();
  const { path, url } = useRouteMatch();  // /users/:userId, /users/1

  const [user, isLoading] = useData(`/users/${userId}`, null);
  const [albums] = useData(`/users/${userId}/albums`, []);
  const [posts] = useData(`/users/${userId}/posts`, [])

  return (
    <Container>
      <LoadingOverlay active={isLoading} />
      {user &&
      <Grid>
        <Grid.Column width={6}>
          <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false}/>
            <Card.Content>
              <Card.Header>{user.name}</Card.Header>
              <Card.Meta>
                <span className='date'>{user.email}</span>
              </Card.Meta>
              <Card.Description>
                {user.address.city}, {user.address.street} {user.address.zipcode}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              {user.company.name}
            </Card.Content>
            <Card.Content extra>
              <Icon name='file'/>
              {posts.length} Posts 

              <List>
                {posts.map(post => <List.Item>
                  <Link to={`${url}/post/${post.id}`}>{post.title}</Link>
                </List.Item> )}
              </List>
              <hr/>
              <Icon name='camera'/>
              {albums.length} Albums
              <List>
                {albums.map(album => <List.Item>
                  <Link to={`${url}/albums/${album.id}`}>{album.title}</Link>
                </List.Item> )}
              </List>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column width={10}>
          <Switch>
            <Route exact path={path}>
              <Header as='h3'>Select an album or post</Header>
            </Route>
            <Route path={`${path}/albums/:albumId`}>
              <Album />
            </Route>

            <Route path={`${path}/post/:postId`}>
              <Post />
            </Route>

            <Route path='*'>
              <Header as='h3'>Select an album or post</Header>
            </Route>
          </Switch>
        </Grid.Column>
      </Grid>
      }
    </Container>
  );
}

export default UserDetails;
