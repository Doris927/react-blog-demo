import React, {Component} from 'react';
import TimeLineElement from './TimeLineElement';
require('./TimeLine.css');

const dummyData = [
    {
        id:1,
        time:'2018-09-01',
        titile:'title',
        content:'content'
    },
    {
        id:1,
        time:'2018-09-01',
        titile:'title',
        content:'content'
    },
    {
        id:1,
        time:'2018-09-01',
        titile:'title',
        content:'content'
    }
];

class TimeLine extends Component{
    render(){
        return(
            <section id="cd-timeline" class="cd-container">
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