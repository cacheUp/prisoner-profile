import React, { Component, createContext } from "react";
import { firestore } from "../firebase";
import { collectIdsAndData } from "../utilities";

export const PostsContext = createContext();

class PostsProvider extends Component {
  state = { prisonerPosts: [] };

  componentDidMount = async () => {
    this.unsubscribeFromFirestore = firestore
      .collection("posts")
      .onSnapshot(snapshot => {
        const posts = snapshot.docs.map(collectIdsAndData);
        this.setState({ posts });
      });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromFirestore();
  };

  render() {
    const { posts } = this.state;
    const { children } = this.props;
    return (
      <PostsContext.Provider value={posts}>{children}</PostsContext.Provider>
    );
  }
}
export default PostsProvider;
