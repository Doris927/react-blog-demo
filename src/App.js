import React,{Component} from 'react';
import {BrowserRouter, Route, Switch,Link} from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
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
        backgroundColor:'#009966',
        backgroundColor:'rgba(0,153,102,0.9)'
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
        marginTop: theme.spacing.unit * 3,
        borderTop: `1px solid ${theme.palette.divider}`,
        padding: `${theme.spacing.unit * 6}px 0`,
    },
    link:{
        textDecoration:'none',
        color:'white'
    },
    maincontainer:{
        background: '#444 url(imgs/background.JPG)',
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover',
        backgroundPosition: 'center center',
        width:'100%'
    },
    container:{
        backgroundColor:'#FFFFFF',
        backgroundColor:'rgba(255,255,255,0.5)'
    }
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
                <div className={classes.maincontainer}>
                    <div className={classes.container}>
                        <AppBar position="static"  className={classes.appBar}>
                            <Toolbar>
                                <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                                    Tammy
                                </Typography>
                                <Button><Link to="/" className={classes.link}>Home</Link></Button>
                                <Button><Link to="/blog" className={classes.link}>Blog</Link></Button>
                                <Button><Link to="/demo" className={classes.link}>Demo</Link></Button>
                                <Button><Link to="/about" className={classes.link}>About</Link></Button>
                            </Toolbar>
                        </AppBar>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/about" component={About}/>
                            <Route path="/demo" component={Demo}/>
                            <Route path="/blog" component={Blog}/>
                        </Switch>
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
                </div>
            </BrowserRouter>
        );
    }
}

export default withStyles(styles)(App);