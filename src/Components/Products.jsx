import React from 'react'

function Products(props) {

  return (
    <div className='flex flex-wrap'>

      <div>
        <p>
          {props.title}
        </p>
      </div>

      <div>
        <p>
          {
            props.description
          }
        </p>
      </div>
      <div>
        <p>
          <img src={`${props.image}`} />
        </p>
      </div>
      <div>
        <p>
          {props.price}
        </p>
      </div>
    </div>
  )
}

export default Products