import React, { useState } from 'react'

import { Stack } from '@mui/material'
import { List } from '@mui/material'

import { defaultTodoList } from './constant'
import TodoType from './type'

import ShowTodoList from './ShowTodoList/ShowTodoList'

export default function Todo(): JSX.Element {
  const [todoList, setTodoList] = useState<TodoType[]>(defaultTodoList)

  return (
    <List>
      <Stack spacing={1}>
        {todoList.map((todo) => (
          <ShowTodoList todo={todo} key={todo.id} />
        ))}
      </Stack>
    </List>
  )
}
