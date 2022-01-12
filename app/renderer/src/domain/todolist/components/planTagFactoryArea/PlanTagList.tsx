import React, { useState } from 'react'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import Zoom from '@mui/material/Zoom'

interface PlanTagCreatorParam {
  plan: any
  onRemove: any
}

function PlanTagCreator({ plan, onRemove }: PlanTagCreatorParam): JSX.Element {
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

interface PlanTagList {
  plans: any
  onRemove: any
}

function PlanTagList({ plans, onRemove }: PlanTagList): JSX.Element {
  return (
    <Stack direction="column" spacing={0.3}>
      {plans.map((plan: any) => (
        <PlanTagCreator plan={plan} key={plan.id} onRemove={onRemove} />
      ))}
    </Stack>
  )
}

export default PlanTagList
