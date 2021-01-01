import React from 'react'

const Accordion = ({items}) =>{
    const renderedItens = items.map(item =>{
        return <React.Fragment key={item.title}>
        <div className="title active">
            <i className="dropdown icon"></i>
            {item.title}
        </div>
        <div className="content active">
            <p>{item.content}</p>
        </div>
    </React.Fragment>
    })
    
    
    return (
        <div className="ui styled accordion">
            {renderedItens}
        </div>
    )
}


export default Accordion