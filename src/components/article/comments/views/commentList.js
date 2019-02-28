import React, {Component} from 'react';
import CommentItem from './commentItem';

const commentData = [
    {
        id: 1,
        time: 'Nov 12',
        content:
            'This is a wider card with supporting text below as a natural lead-in to additional content.1',
    },
    {
        id: 2,
        time: 'Nov 11',
        content:
            'This is a wider card with supporting text below as a natural lead-in to additional content.2',
    },
    {
        id: 3,
        time: 'Nov 11',
        content:
            'This is a wider card with supporting text below as a natural lead-in to additional content.3',
    }
];

class CommentList extends Component{
    render(){
        return(
            <ul>
                {
                    commentData.map((item)=> (
                        <CommentItem
                            key = {item.id}
                            content = {item.content}
                            time = {item.time}
                        />
                    ))
                }
            </ul>
        );
    }
}

export default CommentList;