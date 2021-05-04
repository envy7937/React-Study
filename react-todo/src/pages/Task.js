import React from 'react'
import BaseLayout from "../layouts/Index"
import TaskInfo from "../components/TaskInfo"
import TaskList from "../components/TaskList"
import SearchBar from "../components/SearchBar"

class Task extends React.Component {
    render() {
        return (
            <BaseLayout>
                <TaskInfo/>
                <SearchBar/>
                <TaskList/>
            </BaseLayout>
        )
    }
}

export default Task;