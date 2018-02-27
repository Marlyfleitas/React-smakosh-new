import React from 'react'
import Link from 'gatsby-link'

import './style.scss'

const Sidebar = ({sidebar}) => (
    <div className={`sidebar ${sidebar}`}>
        <div className="items">
        <Link to="/" activeClassName="current" exact={true} >Home</Link>
        <Link to="/about" activeClassName="current">About</Link>
        <Link to="/blog" activeClassName="current">Blog</Link>
        <Link to="/contact" activeClassName="current">Contact</Link>
        </div>
    </div>
)

export default Sidebar