'use client';
import React from 'react'

const AddtoCart = () => {
    return (
        <div>
            <button
                className='btn btn-secondary'
                onClick={() => {
                    alert("Hello")
                }}
            >
                Add to Cart
            </button>
        </div>
    )
}

export default AddtoCart