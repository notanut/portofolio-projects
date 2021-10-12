import React from 'react'

const Categories = ({categories, filterItems}) => {
    return (
        <div className='categories'>
            {categories.map((category, index) => {
                return (
                    <button
                    type='button'
                    key={index}
                    onClick={() => filterItems(category)}
                    
                    >
                        <p>{category}</p>
                        
                    </button>
                )
            })}
        </div>
    )
}

export default Categories