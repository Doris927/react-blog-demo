import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';

const tags = [
    {
        tag:'All',
        style:{
            background:'#ffffff',
            color:'black'
        }
    },
    {
        tag:'Hobby',
        style:{
            background:'#92a4ef',
            color:'black'
        }
    },
    {
        tag:'Life',
        style:{
            background:'#fc8a9f',
            color:'black'
        }
    },
    {
        tag:'Study',
        style:{
            background:'#006b75',
            color:'white'
        }
    }
];

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
    render(){
        return(
            <div>
                <div>
                    <div style={{...titleStyles}}>
                        TAG
                    </div>
                    <div style={{...contenStyles}}>
                        {
                            tags.map((item) => (
                                <button style={{...btnStyle,...item.style}}>{item.tag}</button>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Tags;