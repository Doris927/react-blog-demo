import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';

const archivesItems = [
    {
        id:1,
        tag:'All',
        num: 2
    },
    {
        id:2,
        tag:'Hobby',
        num: 3
    },
    {
        id:3,
        tag:'Life',
        num: 2
    },
    {
        id:4,
        tag:'Study',
        num:4
    }
];



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
        return(
                <div style={{...boxStyles}}>
                    <div style={{...titleStyles}}>
                        Archives
                    </div>
                    <div style={{...contentStyles}}>
                        {
                            archivesItems.map((item) => (
                                <Typography key={item.id} style={{...itemStyles}}>{item.tag}</Typography>
                            ))
                        }
                    </div>
                </div>
        );
    }
}

export default Archives;