import React from 'react'
import { Box } from '@mui/material'
import { List, ListItem, ListItemText, Divider } from '@mui/material'

import TodoType from '../type'
import { Primary, Secondary } from './ListItems'
import { ShowTodoListPropType } from './type'

import ShowSubTodoList from './SubTodoList/ShowSubTodoList'

export default function ShowTodoList({
  todo,
}: ShowTodoListPropType): JSX.Element {
  const { id, plan, category, durationHour, detailedText, subTodoList } = todo

  return (
    <Box>
      <List>
        <ListItemText
          sx={{ marginTop: 3 }}
          primary={
            <Primary
              durationHour={durationHour}
              category={category}
              plan={plan}
            />
          }
        />

        <ShowSubTodoList subTodoList={subTodoList} />
      </List>
      <Divider component="li" />
    </Box>
  )
}
