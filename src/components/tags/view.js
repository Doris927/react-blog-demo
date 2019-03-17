import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import {connect} from "react-redux";
import * as Status from "./status";
import * as tagsActions from "./actions";

const btnStyle={
    display: 'inline-block',
    padding: '5px 10px',
    margin:'5px 5px',
    marginRight:'5px',
    fontFamily: 'Menlo, "Helvetica Neue", Helvetica, Arial, "Microsoft YaHei", sans-serif',
    fontSize: '18px',
    lineHeight: '25px',
    textAlign:'center',
    border:'0px'

}

const titleStyles={
    background:'#00aa76',
    height:'2rem',
    backgroundColor:'rgba(0,170,118,0.9)',
    color:'white',
    fontSize:'1.2rem',
    lineHeight:'2rem',
    textAlign:'center'
}

const contenStyles={
    background:'#ffffff',
    height:'10rem',
    backgroundColor:'rgba(255,255,255,0.9)'
}



class Tags extends Component{

    componentDidMount() {
        //const defaultPage = 'page1';
        this.props.onLoad();
    }

    render(){
        const {status} = this.props;
        switch (status){
            case Status.LOADING:
                return <div>Loading...</div>;
            case Status.SUCCESS:
                const{tags} = this.props;
                return(
                    <div>
                        <div>
                            <div style={{...titleStyles}}>
                                TAG
                            </div>
                            <div style={{...contenStyles}}>
                                {
                                    tags.map((item) => (
                                        <button key={item.id} style={{...btnStyle,background:'#'+item.color}}>{item.name}</button>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
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
    const tags = state.tags;
    //console.log(state);

    return {
        tags: tags.data,
        status: tags.status
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => {
           dispatch(tagsActions.fetchTags());
        }
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(Tags);