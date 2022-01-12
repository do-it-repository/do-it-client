import React, { useState } from 'react'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import Zoom from '@mui/material/Zoom'
import { PlanTagType } from './type'

interface PlanTagCreatorParam {
  plan: PlanTagType
  onRemove: (id: number) => void


function PlanTagCreator({ plan, onRemove }: PlanTagCreatorParam): JSX.Element {
  const [planExist, setPlanExist] = useState(true)
  const { id, planname } = plan

  const ChipPlan: JSX.Element = (
    <Chip
      onClick={() => {
        setPlanExist(!planExist)
        setTimeout(() => {
          onRemove(id)
        }, 90)
      }}
      label={planname}
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
  plans: PlanTagType[]
  onRemove: (id: number) => void

}

function PlanTagList({ plans, onRemove }: PlanTagList): JSX.Element {
  return (
    <Stack direction="column" spacing={0.3}>
      {plans.map((plan) => (
        <PlanTagCreator plan={plan} key={plan.id} onRemove={onRemove} />
      ))}
    </Stack>
  )
}

export default PlanTagList
