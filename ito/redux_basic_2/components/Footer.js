import React from 'React'
import FilterLink from '../contaniners/FilterLink'
import { VisibilityFilters } from '../actions'

const Footer = () => (
    <div>
        <span>SHOW: </span>
        <FilterLink filter = {VisibilityFilters.SHOW_ALL}>
            All
        </FilterLink>
        <FilterLink filter = { VisibilityFilters.SHOW_ACTIVE }>
            Active
        </FilterLink>
        <FilterLink filter = { VisibilityFilters.SHOW_COMPLETED }>
            Completed
        </FilterLink>
    </div>
)

export default Footer