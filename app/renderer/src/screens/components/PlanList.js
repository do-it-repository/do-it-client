import React, { useState } from 'react'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import Zoom from '@mui/material/Zoom'

function Plan({ plan, onRemove }) {
  const [planExist, setPlanExist] = useState(true)

  const ChipPlan = (
    <Chip
      id={plan.id}
      onClick={() => {
        setPlanExist(!planExist)
        setTimeout(() => {
          onRemove(plan.id)
        }, 90)
      }}
      label={plan.planname}
      size="small"
      color="warning"
      draggable
    />
  )

  return (
    <span>
      <Zoom in={planExist}>{ChipPlan}</Zoom>
    </span>
  )
}

function PlanList({ plans, onRemove }) {
  return (
    <Stack direction="column" spacing={0.3}>
      {plans.map((plan) => (
        <Plan plan={plan} key={plan.id} onRemove={onRemove} />
      ))}
    </Stack>
  )
}

export default PlanList
