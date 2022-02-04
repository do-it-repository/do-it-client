import React from 'react'
import { Box } from '@mui/material'
import Badge, { BadgeProps } from '@mui/material/Badge'
// import { Typography } from '@mui/material'
import { styled } from '@mui/material'

import { PrimaryPropType } from './type'
// import { SecondPropType } from './type'

export function Primary({
  durationHour,
  category,
  plan,
}: PrimaryPropType): JSX.Element {
  return (
    <Box>
      <StyledBadge badgeContent={`${durationHour}시간`} color="primary">
        {`${category.name}${category.emoji}`}
      </StyledBadge>
      <Box sx={{ marginTop: 1 }}>{plan}</Box>
    </Box>
  )
}

// export function Secondary({ detailedText }: SecondaryPropType): JSX.Element {
//   return (
//     <Box>
//       <Box>
//         <Typography
//           sx={{ display: 'inline' }}
//           component="span"
//           variant="body2"
//           color="text.primary"
//         ></Typography>
//       </Box>
//       {`${detailedText}`}
//     </Box>
//   )
// }

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -30,
    top: 10,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))
