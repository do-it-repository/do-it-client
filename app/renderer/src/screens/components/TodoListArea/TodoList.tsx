import React, { useState } from 'react'
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
} from '@mui/material'
import { Box, Stack } from '@mui/material'
import { IconButton } from '@mui/material'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined'

import { defaultTodoPlan } from './constant'
import { TodoPlanType } from './type'
import IconSpeedDial from './IconSpeedDial'

const AddTodoButton = () => (
  <IconButton aria-label="add todo">
    <AddCircleOutlinedIcon />
  </IconButton>
)

interface TodoListItemCreatorPropType {
  todo: TodoPlanType
  onDelete: any
}

function TodoListItemCreator({
  todo,
  onDelete,
}: TodoListItemCreatorPropType): JSX.Element {
  const { planname, category, durationHour, detailedText } = todo

  return (
    <Box>
      <div>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary={planname}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {category}
                </Typography>
                {`  ${durationHour}시간`}
                {`${detailedText}`}
              </React.Fragment>
            }
          />
          <IconSpeedDial todo={todo} onDelete={onDelete} />
        </ListItem>
      </div>

      <Divider
        // variant="inset"
        component="li"
      />
    </Box>
  )
}

export default function TodoList(): JSX.Element {
  const [todoList, setTodoList] = useState<TodoPlanType[]>(defaultTodoPlan)

  const onDelete = (id: any) =>
    setTodoList(todoList.filter((todo: TodoPlanType) => todo.id !== id))

  return (
    <List>
      <Stack spacing={1}>
        {todoList.map((todo: TodoPlanType) => (
          <TodoListItemCreator todo={todo} key={todo.id} onDelete={onDelete} />
        ))}
        <AddTodoButton />
      </Stack>
    </List>
  )
}
