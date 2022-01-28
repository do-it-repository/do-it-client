import React from 'react'
import { Box } from '@mui/material'
import { ListItem, ListItemText, Divider } from '@mui/material'

import TodoType from '../type'
import { Primary, Secondary } from './ListItems'
import { ShowTodoListPropType } from './type'

export default function ShowTodoList({
  todo,
}: ShowTodoListPropType): JSX.Element {
  const { id, plan, category, detailedText, durationHour, progress, done } =
    todo

  return (
    <Box>
      <Box>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary={
              <Primary
                durationHour={durationHour}
                category={category}
                plan={plan}
              />
            }
            // secondary={<Secondary detailedText={detailedText} />}
          />
        </ListItem>
      </Box>
      <Divider component="li" />
    </Box>
  )
}
