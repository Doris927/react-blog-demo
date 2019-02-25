import React,{Component} from 'react';
import {BrowserRouter, Route, Switch,Link} from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import {About,Blog,Demo,Home} from './pages';

const styles = theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    appBar: {
        position: 'relative',
    },
    toolbarTitle: {
        flex: 1,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
            width: 900,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    cardHeader: {
        backgroundColor: theme.palette.grey[200],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing.unit * 2,
    },
    cardActions: {
        [theme.breakpoints.up('sm')]: {
            paddingBottom: theme.spacing.unit * 2,
        },
    },
    footer: {
        //marginTop: theme.spacing.unit * 8,
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing.unit * 5,
        padding: `${theme.spacing.unit * 6}px 0`,
    },
});

const footers = [
    {
        title: 'Company',
        description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
        title: 'Features',
        description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
    },
    {
        title: 'Resources',
        description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    },
    {
        title: 'Legal',
        description: ['Privacy policy', 'Terms of use'],
    },
];


class App extends Component{
    render(){
        const {classes} = this.props;
        return(
            <BrowserRouter>
                <div>
                    <AppBar position="static" color="default" className={classes.appBar}>
                        <Toolbar>
                            <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                                Tammy
                            </Typography>
                            <Button><Link to="/">Home</Link></Button>
                            <Button><Link to="/blog">Blog</Link></Button>
                            <Button><Link to="/demo">Demo</Link></Button>
                            <Button><Link to="/about">About</Link></Button>
                        </Toolbar>
                    </AppBar>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/demo" component={Demo}/>
                    <Route exact path="/blog" component={Blog}/>
                    {/* Footer */}
                    <footer className={classes.footer}>
                        <Typography variant="h6" align="center" gutterBottom>
                            Bulit by Tammy
                        </Typography>
                        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                            tammytangg@gmail.com
                        </Typography>
                    </footer>
                    {/* End footer */}
                </div>
            </BrowserRouter>
        );
    }
}

export default withStyles(styles)(App);