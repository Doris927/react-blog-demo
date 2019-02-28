import React, {Component} from 'react';
import TimeLineElement from './TimeLineElement';
require('./TimeLine.css');

const dummyData = [
    {
        id:1,
        time:'2018-09-01',
        title:'title',
        content:'content'
    },
    {
        id:2,
        time:'2018-09-01',
        title:'title',
        content:'content'
    },
    {
        id:3,
        time:'2018-09-01',
        title:'title',
        content:'content'
    }
];

class TimeLine extends Component{
    render(){
        return(
            <section id="cd-timeline" className="cd-container">
                 {dummyData.map(
                            (item) => (
                                <TimeLineElement key={item.id} {...item}></TimeLineElement>
                            ))
                 }
            </section>
        );
    }
}

export default TimeLine;