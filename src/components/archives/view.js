import React, {Component} from 'react';
import {connect} from "react-redux";
import Typography from '@material-ui/core/Typography';
import * as archivesActions from "./actions";
import * as Status from "./status";
import {actions as blogListActions} from "../pagination/blogList";

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


const itemStyles={
    padding: "0.3rem 0.3rem",
    fontSize: '18px'
}



class Archives extends Component{

    constructor() {
        super(...arguments);
    }

    setArchive(archive){
        console.log("archive number:"+archive)
        this.props.setArchive(archive);
    }

    render(){
        const {status} = this.props;
        switch (status){
            case Status.LOADING:
                return (
                    <div>
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
                    <div>
                        <div style={{...titleStyles}}>
                            Archives
                        </div>
                        <div style={{...contentStyles}}>
                            {
                                archives.map((item) => (
                                    <Typography key={item.number} style={{...itemStyles}} onClick={this.setArchive.bind(this,item.number)}>{item.title}</Typography>
                                ))
                            }
                        </div>
                    </div>
                );
            case Status.FAILURE:
                return (
                    <div>
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
        this.props.onLoad();
    }
}

const mapStateToProps = (state) => {
    const {data, status} = state.archives
    const {archive} = state.pageInfo;

    return {
        archives: data,
        status: status,
        archive: archive
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => {
            dispatch(archivesActions.fetchArchives());
            dispatch(blogListActions.fetchBlog(1, null));
        },
        setArchive:(archive) => {
            dispatch(archivesActions.setArchive(archive))
            dispatch(blogListActions.fetchBlog(1, archive));
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Archives);