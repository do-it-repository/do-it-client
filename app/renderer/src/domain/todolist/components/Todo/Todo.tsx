import React, { useState, useRef, useEffect } from 'react'
import { Box } from '@mui/material'
import { List, ListItemText, Divider } from '@mui/material'
import Badge, { BadgeProps } from '@mui/material/Badge'
import { styled } from '@mui/material'

import BasicSpeedDial from '../../../../common/components/BasicSpeedDial'

import { TodoPropType, PrimaryPropType, SubTodoPropType } from '../../types'
import { fontWeight } from '@mui/system'

const SubTodo = ({ subTodoList }: SubTodoPropType): JSX.Element => {
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

export default function Todo({ todo }: TodoPropType): JSX.Element {
  const { id, plan, category, durationHour, detailedText, subTodoList } = todo

  const Primary = ({
    durationHour,
    category,
    plan,
  }: PrimaryPropType): JSX.Element => {
    return (
      <Box>
        <StyledBadge badgeContent={`${durationHour}시간`} color="primary">
          <InlineBox sx={{ fontWeight: 'bold' }}>
            {`${category.name}`}
          </InlineBox>
          <InlineBox>{`${category.emoji}`}</InlineBox>
        </StyledBadge>
        <Box sx={{ marginTop: 1, fontWeight: 'bold' }}>{plan}</Box>
      </Box>
    )
  }

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

        <SubTodo subTodoList={subTodoList} />
      </List>
      <Divider component="li" />
    </Box>
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

const InlineBox = styled(Box)({
  display: 'inline',
})
