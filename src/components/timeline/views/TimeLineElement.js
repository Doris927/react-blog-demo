import React, {Component} from 'react';
import { Button } from '@material-ui/core';
require('./TimeLine.css');

class TimeLineElement extends Component{
    render(){
        const{time,title,content} = this.props;
       return(
        <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-picture">
                <img src="/imgs/point.png" alt="Picture"/>
            </div>
            <div className="cd-timeline-content">
                <h2>{title}</h2>
                <p>{content}</p>
                <a  target="_blank" href='https://www.google.com'>test</a>
                <span className="cd-date">{time}</span>
            </div>
        </div>
       );
    }
}

export default TimeLineElement;