import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
require('./TimeLineElement.css');

const styles = theme => ({
    comment: {
        paddingLeft:theme.spacing.unit *2,
        paddingRight:theme.spacing.unit *2,
        paddingTop:theme.spacing.unit,
        paddingBottom:theme.spacing.unit,
        width:'100%'
    },
});

class VerticalTimelineElement extends Component {
    render(){
        const {classes} = this.props;
        const {name, time, content} = this.props;
        return(
            <div>
                <img src='../imgs/avatar.jpeg' class="avatar"/>
                <div class="blogs">
                        <div class="bloglist">
                            <Paper className={classes.comment}>
                                <Typography>
                                    {name}<span>{time}</span>
                                </Typography>
                                <hr/>
                                <Typography>
                                    {content}
                                </Typography>
                            </Paper>
                        </div>
                </div>
                <div class="clear"></div>
            </div>

        );
    }
}

export default withStyles(styles)(VerticalTimelineElement);