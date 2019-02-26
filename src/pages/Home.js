import React, {Component} from 'react';

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
        [theme.breakpoints.up(1000 + theme.spacing.unit * 3 * 2)]: {
            width: 1000,
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
        marginTop: theme.spacing.unit * 8,
        borderTop: `1px solid ${theme.palette.divider}`,
        padding: `${theme.spacing.unit * 6}px 0`,
    },
    avatarImg:{
        background: '#444 url(imgs/me.JPG)',
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover',
        backgroundPosition: 'center center',
        width:'150px',
        height:'150px',
        borderRadius:'50%',
        marigin:theme.spacing.unit * 2
    },
    introduction:{
        marginTop:theme.spacing.unit * 2,
        marginBottom:theme.spacing.unit * 2
    }
});



class Home extends Component{
    render(){
        const {classes} = this.props;
        return (
            <div className={classes.layout}>
                <div className={classes.heroContent}>
                    <div align="center" className={classes.avatarContainer}>
                        <div className={classes.avatarImg}></div>
                    </div>
                    <div className={classes.introduction}>
                        <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
                            Tang Chenmin
                        </Typography>
                        <Typography variant="h6" align="center" color="textSecondary" component="p">
                            A beginner&apos;s built with default Material-UI components with little customization.
                        </Typography>
                    </div>

                </div>
                <Grid container spacing={40} alignItems="flex-end">
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardHeader
                                title="Blog"
                                titleTypographyProps={{ align: 'center' }}
                                className={classes.cardHeader}
                            />
                            <CardContent>
                                <Typography variant="subtitle1" align="center">
                                    test
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.cardActions}>
                                <Button fullWidth color="primary">
                                    test
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardHeader
                                title="Demo"
                                titleTypographyProps={{ align: 'center' }}
                                className={classes.cardHeader}
                            />
                            <CardContent>
                                <Typography variant="subtitle1" align="center">
                                    test
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.cardActions}>
                                <Button fullWidth color="primary">
                                    test
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardHeader
                                title="Blog"
                                titleTypographyProps={{ align: 'center' }}
                                className={classes.cardHeader}
                            />
                            <CardContent>
                                <Typography variant="subtitle1" align="center">
                                    test
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.cardActions}>
                                <Button fullWidth color="primary">
                                    test
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </div>

        );
    }
}

export default withStyles(styles)(Home);

