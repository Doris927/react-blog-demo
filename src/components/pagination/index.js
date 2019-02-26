import React, {Component} from 'react';
import {view as BlogList} from './blogList';
import {view as PageSelector} from './pageSelector';


class BlogPages extends Component{
    render(){
        return (
            <div>
                <BlogList/>
                <PageSelector/>
            </div>
        );
    }
}

export default BlogPages; 