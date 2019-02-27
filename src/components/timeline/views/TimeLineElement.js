import React, {Component} from 'react';
require('./TimeLine.css');

class TimeLineElement extends Component{
    render(){
        const{time,title,content} = this.props;
       return(
        <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-picture">
                <img src="/imgs/point.png" alt="Picture"/>
            </div>
            <div class="cd-timeline-content">
                <h2>{title}</h2>
                <p>{content}</p>
                <span class="cd-date">{time}</span>
            </div>
        </div>
       );
    }
}

export default TimeLineElement;