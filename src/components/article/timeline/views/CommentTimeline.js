import React, {Component} from 'react';
import VerticalTimelineElement from './TimelineElement';

const commentData = [
    {
        id: 1,
        time: 'Nov 12',
        name:'tammy',
        content:
            'This is a wider card with supporting text below as a natural lead-in to additional content.1',
    },
    {
        id: 2,
        time: 'Nov 11',
        name:'tammy',
        content:
            'This is a wider card with supporting text below as a natural lead-in to additional content.2',
    },
    {
        id: 3,
        time: 'Nov 11',
        name:'tammy',
        content:
            'This is a wider card with supporting text below as a natural lead-in to additional content.3',
    }
];

class CommentTimeline extends Component{
    render(){
        return(
            <div>
                {
                    commentData.map((item)=> (
                        <VerticalTimelineElement
                            key = {item.id}
                            {...item}
                        />
                    ))
                }
            </div>
        );
    }
}

export default CommentTimeline;