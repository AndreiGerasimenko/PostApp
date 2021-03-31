import React from 'react'
import './pagesContainer.css'

export const PagesContainer = ({ children }) => {
    return (
        <div className="page-container">
            {
                children
            }
        </div>
    )
}