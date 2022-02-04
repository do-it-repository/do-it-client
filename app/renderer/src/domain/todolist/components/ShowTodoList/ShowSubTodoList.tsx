import React from 'react'
import { SubTodoType } from '../type'
import { Box, ListItem, ListItemText } from '@mui/material'
import { Divider } from '@mui/material'
interface SubTodoListPropType {
  subTodoList: SubTodoType[]
}

export default function ShowSubTodoList({
  subTodoList,
}: SubTodoListPropType): JSX.Element {
  return (
    <Box sx={{ marginTop: 3 }}>
      {subTodoList.map((subTodo) => {
        const { id, plan, progress } = subTodo
        return (
          <Box key={id}>
            <p>{plan}</p>
          </Box>
        )
      })}
    </Box>
  )
}
