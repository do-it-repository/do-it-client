import React from 'react'
import { SubTodoType } from '../../type'
import { Box, ListItem, ListItemText } from '@mui/material'

interface SubTodoListPropType {
  subTodoList: SubTodoType[]
}

export default function ShowSubTodoList({
  subTodoList,
}: SubTodoListPropType): JSX.Element {
  return (
    <Box>
      {subTodoList.map((subTodo) => {
        const { id, plan, progress } = subTodo
        return (
          <Box>
            <ListItem alignItems="flex-start">
              <ListItemText primary={plan} />
            </ListItem>
          </Box>
        )
      })}
    </Box>
  )
}
