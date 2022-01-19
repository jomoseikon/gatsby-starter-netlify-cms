import React from "react"
import { Link } from "gatsby"

export const Pagenation = ({totalCount}) => {
    const PER_PAGE = 5

    const range = (start, end) => [...Array(end - start + 1)].map((start, i) => start + i) 
    return (

      <ul>
        {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => {
            <li key={index}>
                <Link to={``}></Link>
            </li>
        })}
      </ul>
    )
}