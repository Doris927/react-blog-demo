import React, {Component} from 'react';
import {connect} from 'react-redux';
import BlogItem from './blogItem';
import * as Status from '../status'
import {withStyles} from "@material-ui/core/styles/index";

const styles = theme => ({
    blogList:{
        marginLeft:0,
        padding:0,
    }
});

class BlogList extends Component{
    constructor(){
        super(...arguments);
    }

    render(){
        const {status} = this.props;
        const {classes} = this.props;
        switch (status){
            case Status.LOADING:
                return <div>Loading...</div>;
            case Status.SUCCESS:
                const{blogs} = this.props;
                console.log(blogs);
                return(
                    <ul className={classes.blogList}>
                        {blogs.map(
                            (item) => (
                                <BlogItem key={item.id} {...item}></BlogItem>
                            ))
                        }
                    </ul>
                );
            case Status.FAILURE:
                return <div>Failure</div>;
            default:{
                throw new Error('unexpected status ' + status);
            }
        }

    }


}

const mapStateToProps = (state) => {
    const blogs = state.blogList;
    console.log("blog status:"+blogs.status);

    return {
        blogs: blogs.data,
        status: blogs.status
    };
}

export default withStyles(styles)(connect(mapStateToProps)(BlogList));