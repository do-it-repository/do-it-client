import React from 'react'
import { Box } from '@mui/material'
import { List, ListItemText, Divider } from '@mui/material'
import Badge, { BadgeProps } from '@mui/material/Badge'
import { styled } from '@mui/material'

import { TodoPropType, PrimaryPropType } from '../../types'
import SubTodo from '../SubTodo'

const Primary = ({
  durationHour,
  category,
  plan,
}: PrimaryPropType): JSX.Element => {
  return (
    <Box>
      <StyledBadge badgeContent={`${durationHour}시간`} color="primary">
        {`${category.name}${category.emoji}`}
      </StyledBadge>
      <Box sx={{ marginTop: 1 }}>{plan}</Box>
    </Box>
  )
}

export default function Todo({ todo }: TodoPropType): JSX.Element {
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
