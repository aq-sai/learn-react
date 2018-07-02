import React  from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Footer = () => (
    <div>
        <span>Show: </span>
        <FilterLink filter = {VisibilityFlters.SHOW_ALL}>
            All
        </FilterLink>
        <FilterLink filter = {VisibilityFilters.SHOW_ACTIVE}>
            Active
        </FilterLink>
        <FilterLink filter = {VisibilityFilters.SHOW_COMPLETED}>
            Comleted
        </FilterLink>
    </div>
)

export default Footer