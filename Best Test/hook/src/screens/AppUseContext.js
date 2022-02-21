import React, {  createContext } from 'react';
import {View, Text, Button} from 'react-native';

export const BlogContext = createContext();

const TestContext = ({children}) => {

    const blogPosts = [{ title: "Blog Post #1" }, { title: "Blog Post #2" }]

    return(
        <BlogContext.Provider value={blogPosts}>
            {children}
        </BlogContext.Provider>
    )
}

export default TestContext;