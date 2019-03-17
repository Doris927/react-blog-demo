import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import {Route, Switch,Link} from 'react-router-dom';
import BlogPages from '../components/pagination'
import {view as Article} from '../components/article/article';
//import CommentList from '../components/article/comments/views/commentList';
import CommentTimeLine from '../components/article/timeline/views/CommentTimeline';
import Tags from '../components/tags/view'
import Archives from '../components/archives/view'

const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        marginTop: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    toolbarMain: {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
    },
    mainFeaturedPost: {
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing.unit * 4,
    },
    mainFeaturedPostContent: {
        padding: `${theme.spacing.unit * 6}px`,
        [theme.breakpoints.up('md')]: {
            paddingRight: 0,
        },
    },
    mainGrid: {
        marginTop: theme.spacing.unit * 3,
    },
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
    markdown: {
        padding: `${theme.spacing.unit * 3}px 0`,
    },
    sidebarAboutBox: {
        padding: theme.spacing.unit * 2,
        backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
        marginTop: theme.spacing.unit * 3,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing.unit * 8,
        padding: `${theme.spacing.unit * 6}px 0`,
    },
});

const archives = [
    'March 2020',
    'February 2020',
    'January 2020',
    'December 2019',
    'November 2019',
    'October 2019',
    'September 2019',
    'August 2019',
    'July 2019',
    'June 2019',
    'May 2019',
    'April 2019',
];

const social = ['GitHub', 'Twitter', 'Facebook'];

class Blog extends Component{
    render(){
        const {classes} = this.props;
        console.log(this.props.match.url);
        return (
            <div>
                <Grid container spacing={40} className={classes.layout}>
                    {/* Main content */}
                    <Grid item xs={12} md={8}>
                        <Route exact path={`${this.props.match.url}/`} component={BlogPages} />
                        <Route path={`${this.props.match.url}/:id`} component={Article} />
                        <Route path={`${this.props.match.url}/:id`} component={CommentTimeLine} />

                    </Grid>
                    {/* End main content */}
                    {/* Sidebar */}
                    <Grid item xs={12} md={4}>
                        <Tags/>
                        <Archives/>
                    </Grid>
                    {/* End sidebar */}

                </Grid>

            </div>
        );
    }
}

export default withStyles(styles)(Blog);
