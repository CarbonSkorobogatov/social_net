import React from 'react'; 
import { List, Container } from 'semantic-ui-react'; 
import { Link } from 'react-router-dom';
import useData from '../hooks/useData';
import LoadingOverlay from "../../../cw2/life-cycle-example/components/LoadingOverlay";

function Posts() {
    const [posts, isLoading] = useData('/posts', []);

    return (
        <Container>
        <LoadingOverlay active={isLoading} />
        {posts.map(post => (
            <List divided relaxed>
                <List.Item>
                <List.Icon  name='right triangle'/>
                <List.Content>
                    <List.Header as='a'>
                        <Link to={`/posts/${post.id}`}>
                            {post.title}
                        </Link>
                    </List.Header>
                    <List.Description as='a'>{post.body}</List.Description>
                </List.Content>
                </List.Item>
            </List>
        ))
        }
        </Container>
    )
}

export default Posts;