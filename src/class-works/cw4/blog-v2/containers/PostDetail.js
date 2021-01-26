import React from 'react';
import useData from '../hooks/useData';
import { Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom';
import { Container, Header, Comment } from "semantic-ui-react";
import LoadingOverlay from "../../../cw2/life-cycle-example/components/LoadingOverlay";
import '../../../../App.css'

function PostDetail() {
    const { postId } = useParams();
    const [post, isPostLoading] = useData(`/posts/${postId}`, null);
    const [comments, isCommetsLoaded] = useData(`/posts/${postId}/comments`, null);


    console.log(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    console.log(post);
    return (
        <Container>
            <LoadingOverlay active={isPostLoading} />
            { post &&
                <div className={"Post"}>
                <Header as="h1">{post.title}</Header>
                <hr/>
                <p>{post.body}</p>

                <hr/>
                </div>
            }
            
                <Comment>
                    <Header as="h3">Comments</Header>
                    {comments &&
                    <div>
                     {comments.map(comment => 
                     <div className="Comments_item">
                          <Comment.Content>
                            <Comment.Metadata>
                            <Header as="h5">{comment.name}</Header>
                            </Comment.Metadata>
                            <Comment.Text>{comment.body}</Comment.Text>
                            <Comment.Actions>
                            <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                        </div>
                        )}
                  
                    </div>
                    }
                </Comment>
                
        </Container>
    )
}

export default PostDetail;
