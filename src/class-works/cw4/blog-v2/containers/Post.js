import React from 'react';
import { useParams, Redirect, Link } from 'react-router-dom';
import { Container, Header, Image } from "semantic-ui-react";
import useData from "../hooks/useData";
import LoadingOverlay from "../../../cw2/life-cycle-example/components/LoadingOverlay";

function Post() {
    const { postId, userId } = useParams();
    const [post, isLoading] = useData(`/posts/${postId}`, null);


    return (
        <Container>
              <LoadingOverlay active={isLoading} />
        {post &&
            <div>
                <Header as="h1">
                <Link to={`/posts/${postId}`}>{post.title}</Link>    
                </Header>
                <p>{post.body}</p>



            </div>

        }
        </Container>
    )
}

export default Post;
