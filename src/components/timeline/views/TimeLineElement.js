import React, {Component} from 'react';
import { Button } from '@material-ui/core';
require('./TimeLine.css');

class TimeLineElement extends Component{
    render(){
        const{time,title,content,github} = this.props;
       return(
        <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-picture">
                <img src="http://i2.bvimg.com/678757/485f5abad5a3ceac.png" alt="Picture"/>
            </div>
            <div className="cd-timeline-content">
                <h2>{title}</h2>
                <p>{content}</p>
                <a  target="_blank" href={github}>Github</a>
                <span className="cd-date"><b>{time}</b></span>
            </div>
        </div>
       );
    }
}

export default TimeLineElement;