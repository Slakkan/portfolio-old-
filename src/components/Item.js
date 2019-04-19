import React from 'react'

const Item = ({ title, description, link }) => (
    <div className='item'>
        <div>
            <h3>{title}</h3>
        </div>
        <div>
            <p>{description}</p>
        </div>
        <div>
            <a href={link} target='_blank'>{link}</a>
        </div>
    </div>
)

export default Item
