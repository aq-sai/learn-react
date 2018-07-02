import React from 'react'
import Footer from './Footer'
import AddTodo from '../contaniners/AddTodo'
import VisibleTodoList from '../contaniners/VisibleTodoList'

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)

export default App