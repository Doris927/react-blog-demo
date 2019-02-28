import React, {Component} from 'react';

import { withStyles } from '@material-ui/core/styles';
import red from "@material-ui/core/colors/red";
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
    commentBox:{
        listStyle:'none',
        padding: '9px 0 0 0px',
        lineHeight: '18px',
        borderLeft: '1px solid #d9d9d9',
        color:'#999'
},
    nodeIcon:{
        height:'10px',
        width:'10px',
        background:'#98FB98',
        ':before':{
            content: '',
            position: 'absolute',
            top:'15px',
            left:'-12px',
            width: '18px',
            height: '18px',
            border: '2px solid #98FB98',
            borderRadius: '10px',
            background: '#98FB98'
}
    },
    commentContent:{
        top: '18px',
        left: '-6px'
    }
});

class CommentItem extends Component{
    constructor(){
        super(...arguments);
    }
    render(){
        const {time,content} = this.props;
        const {classes} = this.props;
        return(
            <li className={classes.commentBox}>
                <b className={classes.nodeIcon}>t</b>
                <span className={classes.commentContent}>{content}</span>
            </li>
        );

    }
}

export default withStyles(styles)(CommentItem);