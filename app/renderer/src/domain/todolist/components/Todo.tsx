import React, { useState } from 'react'

import { Stack, List, Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { defaultTodoList, defaultNewTodo } from './constant'
import TodoType from './type'

import ShowTodoList from './ShowTodoList/ShowTodoList'
import TodoAddButton from './ShowTodoList/TodoAddButton'

export default function Todo(): JSX.Element {
  const [todoList, setTodoList] = useState<TodoType[]>(defaultTodoList)
  const [newTodo, setNewTodo] = useState<TodoType>(defaultNewTodo)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setNewTodo({ ...newTodo, plan: e.target.value })
  }

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setNewTodo({ ...newTodo, id: todoList.length + 1 })
      setTodoList(todoList.concat(newTodo))
      setNewTodo(defaultNewTodo)
    }
  }

  return (
    <Box>
      <AddTodoButtonWrapper>
        <TodoAddButton
          onEnter={onEnter}
          onChange={onChange}
          newTodo={newTodo}
        />
      </AddTodoButtonWrapper>
      <List>
        <Stack spacing={1}>
          {todoList.map((todo) => (
            <ShowTodoList todo={todo} key={todo.id} />
          ))}
        </Stack>
      </List>
    </Box>
  )
}

const AddTodoButtonWrapper = styled(Box)({
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-around',
  alignItems: 'right',
})
