import React, { useState } from 'react';
import moment from 'moment'
import axios from 'axios';

function PrevBlogEntry(props) {

    const [showText, setShowText] = useState(false);

    const handleDelete = (event) => {
        let objId = event.target.value
        axios.delete(`/blog/deletepost/${objId}`)
            .then(resp => {
                console.log(resp)
            })
    }

    const onToggle = () => {
        setShowText(!showText)
    }

    return (
        <tbody>
            <tr key={props.key}>
                <td > {moment(props.date).format("MMM Do YYYY")} </td>
                <td className="card-title" defaultValue={props.title}>{props.title}</td>
                <td className="card-text" defaultValue={props.body}><div onClick={onToggle} className={showText ? null : "line-clamp"}> {props.body}</div></td>
                <td className="card-text" defaultValue="N/A">{props.image}</td>
                <td ><button className="blogDelete" value={props.id} type="submit" onClick={handleDelete}>DELETE</button></td>
            </tr>
        </tbody>
    )

}


export default PrevBlogEntry;