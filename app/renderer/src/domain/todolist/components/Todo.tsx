import React, { useState } from 'react'

import { Stack, List, Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { defaultTodoList } from './constant'
import TodoType from './type'

import ShowTodoList from './ShowTodoList/ShowTodoList'
import AddTodoButton from '../components/ShowTodoList/AddTodoButton'

export default function Todo(): JSX.Element {
  const [todoList, setTodoList] = useState<TodoType[]>(defaultTodoList)

  return (
    <Box>
      <AddTodoButtonWrapper>
        <AddTodoButton />
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
  alignItems: 'Right',
})
