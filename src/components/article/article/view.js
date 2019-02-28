import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactMarkdown from 'markdown-to-jsx';
import Paper from '@material-ui/core/Paper';
import * as Status from './status';
import * as actions from './actions'

class Article extends Component{
    constructor(){
        super(...arguments);
    }

    componentDidMount(){
        const articleId = this.props.match.params.id;
        console.log(articleId);
        this.props.onLoadPage(articleId);
    }

    render(){
        const {status} = this.props;
        switch (status){
            case Status.LOADING:
                return <div>Article Loading...</div>;
            case Status.SUCCESS:
                const{number} = this.props.article;
                const{body} = this.props.article;
                return(
                    <Paper>
                        <ReactMarkdown>{body}</ReactMarkdown>
                    </Paper>
                );
            case Status.FAILURE:
                return <div>Load Failure!</div>;
            default:{
                throw new Error('unexpected status ' + status);
            }
        }

    }
}

const mapStateTopProps = (state) => {
    const article = state.article;
    //console.log(state);

    return {
        article: article.data,
        status: article.status
    };
}

const mapDispatchToProps = (dispatch) => {
    console.log(dispatch);
    return {
        onLoadPage: (id) => {
            dispatch(actions.fetchArticle(id));
        }
    }
};

export default connect(mapStateTopProps,mapDispatchToProps)(Article);