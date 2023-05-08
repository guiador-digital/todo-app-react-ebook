import { useContext, useState } from 'react'
import TaskList from './TaskList'
import { TasksContext } from './contexts/TaskListContext'

function Todo() {
    const { tasks, setTasks } = useContext(TasksContext)

    const tasksPendentes = tasks.filter(task => task.done === false)
    const tasksConcluidas = tasks.filter(task => task.done === true)

    const handleToggleDone = (data) => {
        setTasks(tasks.map(task => {
            if (task.name === data.name) {
                return data
            } else {
                return task
            }
        }))
    }

    return (
        <>
            <h1>
                Todo List
            </h1>

            <h2>Tasks pendentes {
                tasksPendentes.length > 0 && <span> ({tasksPendentes.length})</span>
            }</h2>
            <TaskList type="pending" />

            <h2>Tasks Concluídas {
                tasksConcluidas.length > 0 && <span> ({tasksConcluidas.length})</span>
            }</h2>
            <TaskList type="done" />
        </>
    )
}

export default Todo