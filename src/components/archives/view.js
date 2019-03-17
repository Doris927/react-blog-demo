import React, {Component} from 'react';
import {connect} from "react-redux";
import Typography from '@material-ui/core/Typography';
import * as archivesActions from "./actions";
import * as Status from "./status";

const titleStyles={
    background:'#00aa76',
    height:'2rem',
    backgroundColor:'rgba(0,170,118,0.9)',
    color:'white',
    fontSize:'1.2rem',
    lineHeight:'2rem',
    textAlign:'center'
}


const contentStyles={
    background:'#ffffff',
    height:'10rem',
    backgroundColor:'rgba(255,255,255,0.9)'
}

const boxStyles={
    marginTop:'3rem'
}

const itemStyles={
    padding: "0.3rem 0.3rem",
    fontSize: '18px'
}



class Archives extends Component{

    render(){
        const {status} = this.props;
        switch (status){
            case Status.LOADING:
                return (
                    <div style={{...boxStyles}}>
                        <div style={{...titleStyles}}>
                            Archives
                        </div>
                        <div style={{...contentStyles}}>
                            Loading
                        </div>
                    </div>
                );
            case Status.SUCCESS:
                const{archives} = this.props;
                return(
                    <div style={{...boxStyles}}>
                        <div style={{...titleStyles}}>
                            Archives
                        </div>
                        <div style={{...contentStyles}}>
                            {
                                archives.map((item) => (
                                    <Typography key={item.id} style={{...itemStyles}}>{item.title}</Typography>
                                ))
                            }
                        </div>
                    </div>
                );
            case Status.FAILURE:
                return (
                    <div style={{...boxStyles}}>
                        <div style={{...titleStyles}}>
                            Archives
                        </div>
                        <div style={{...contentStyles}}>
                            Load Failed
                        </div>
                    </div>
                );
            default:{
                throw new Error('unexpected status ' + status);
            }
        }
    }

    componentDidMount() {
        //const defaultPage = 'page1';
        this.props.onLoad();
    }
}

const mapStateToProps = (state) => {
    const archives = state.archives;
    //console.log(state);

    return {
        archives: archives.data,
        status: archives.status
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => {
            dispatch(archivesActions.fetchArchives());
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Archives);