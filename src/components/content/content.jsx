import React from 'react';
import data from '../../assets/data';
const Content = (props) =>{
   console.log(props.location.state)
    const index=props.location.state.id;
    return(
        <div>
            <h1>{data.title[index]}</h1>
        </div>
    )
}
export default Content;