import React, { useState } from 'react'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import Zoom from '@mui/material/Zoom'

interface PlanFuncType {
  plan: any
  onRemove: any
}

function Plan({ plan, onRemove }: PlanFuncType): JSX.Element {
  const [planExist, setPlanExist] = useState(true)

  const ChipPlan: JSX.Element = (
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

interface planList {
  plans: any
  onRemove: any
}

function PlanList({ plans, onRemove }: planList): JSX.Element {
  return (
    <Stack direction="column" spacing={0.3}>
      {plans.map((plan: any) => (
        <Plan plan={plan} key={plan.id} onRemove={onRemove} />
      ))}
    </Stack>
  )
}

export default PlanList
