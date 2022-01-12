import React, { useState } from 'react'
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
} from '@mui/material'
import { Box, Stack } from '@mui/material'
import { styled } from '@mui/material'

import { defaultTodoPlan } from './constant'
import { TodoPlanType } from './type'
import IconSpeedDial from './IconSpeedDial'
import { AddTodoArea } from './AddTodoArea'
import Badge, { BadgeProps } from '@mui/material/Badge'

interface TodoListItemCreatorPropType {
  todo: TodoPlanType
  onDelete: (id: number) => void
}

function TodoListItemCreator({
  todo,
  onDelete,
}: TodoListItemCreatorPropType): JSX.Element {
  const { planname, category, durationHour, detailedText } = todo

  const PrimaryCategoryAndHour: JSX.Element = (
    <React.Fragment>
      <StyledBadge badgeContent={`${durationHour}시간`} color="primary">
        {category}
      </StyledBadge>
      <Box sx={{ marginTop: 1 }}>{planname}</Box>
    </React.Fragment>
  )

  const SecondaryDetailedText: JSX.Element = (
    <React.Fragment>
      <div>
        <Typography
          sx={{ display: 'inline' }}
          component="span"
          variant="body2"
          color="text.primary"
        ></Typography>
      </div>
      {`${detailedText}`}
    </React.Fragment>
  )
  return (
    <Box>
      <div>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary={PrimaryCategoryAndHour}
            secondary={SecondaryDetailedText}
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

  const onDelete = (id: number) =>
    setTodoList(todoList.filter((todo: TodoPlanType) => todo.id !== id))

  return (
    <List>
      <Stack spacing={1}>
        {todoList.map((todo: TodoPlanType) => (
          <TodoListItemCreator todo={todo} key={todo.id} onDelete={onDelete} />
        ))}
        <AddTodoArea />
      </Stack>
    </List>
  )
}

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -30,
    top: 10,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))
