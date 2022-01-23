import React, { useState, useRef } from 'react'
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
  onCopy: (todo: TodoPlanType) => void
  onConvert: (
    propMode: boolean,
    setPropMode: (propMode: boolean) => void,
  ) => void
}

function TodoListItemCreator({
  todo,
  onDelete,
  onCopy,
  onConvert,
}: TodoListItemCreatorPropType): JSX.Element {
  const [propMode, setPropMode] = useState(true)

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

  if (propMode === true) {
    return (
      <Box>
        <div>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={PrimaryCategoryAndHour}
              secondary={SecondaryDetailedText}
            />
            <IconSpeedDial
              todo={todo}
              propMode={propMode}
              setPropMode={setPropMode}
              onDelete={onDelete}
              onCopy={onCopy}
              onConvert={onConvert}
            />
          </ListItem>
        </div>

        <Divider
          // variant="inset"
          component="li"
        />
      </Box>
    )
  }
  return (
    <Box>
      <div>
        <ListItem alignItems="flex-start">
          <ListItemText primary={planname} />
          <IconSpeedDial
            todo={todo}
            propMode={propMode}
            setPropMode={setPropMode}
            onDelete={onDelete}
            onCopy={onCopy}
            onConvert={onConvert}
          />
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

  const onCopy = (todo: TodoPlanType) => {
    const nextId = todoList.length + 1
    const { planname, durationHour, category, detailedText } = todo
    const newTodo: TodoPlanType = {
      id: nextId,
      planname: planname,
      durationHour: durationHour,
      category: category,
      detailedText: detailedText,
    }
    setTodoList(todoList.concat(newTodo))
  }

  const onConvert = (
    propMode: boolean,
    setPropMode: (propMode: boolean) => void,
  ) => setPropMode(!propMode)

  const [inputs, setInputs] = useState({
    id: '',
    planname: '',
    durationHour: '',
    category: '',
    detailedText: '',
  })
  const { planname } = inputs

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const name = e.target
    // const value = e.target
    const { name, value } = e.target

    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  const nextId = useRef(todoList.length + 1)
  const onEnterCreate = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const newTodo: TodoPlanType = {
        id: nextId.current,
        planname,
        durationHour: 0,
        category: '',
        detailedText: '',
      }
      setTodoList(todoList.concat(newTodo))

      setInputs({
        id: '',
        planname: '',
        durationHour: '',
        category: '',
        detailedText: '',
      })
      nextId.current += 1
    }
  }

  return (
    <List>
      <Stack spacing={1}>
        {todoList.map((todo: TodoPlanType) => (
          <TodoListItemCreator
            todo={todo}
            key={todo.id}
            onDelete={onDelete}
            onCopy={onCopy}
            onConvert={onConvert}
          />
        ))}
        {/* <AddTodoArea
        onChange={onChange}
         onEnter={onEnterCreate}
        /> */}
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
