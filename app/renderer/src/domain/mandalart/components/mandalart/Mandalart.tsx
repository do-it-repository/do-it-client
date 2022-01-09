import React, { useState } from 'react'
import { Box, Button, styled, Typography } from '@mui/material'
import {
  primaryColor_100,
  primaryColor_80,
  textColor,
} from '../../../../common/constants/color'
import { MandalartPlanType } from './type'
import { defaultPlans } from './constant'

interface PlanBoxPropType {
  planItem: MandalartPlanType
}

function PlanBox({ planItem }: PlanBoxPropType): JSX.Element {
  return (
    <PlanWrapper variant="contained">
      <ContentBox>
        <Typography variant="h5">{planItem.plan}</Typography>
      </ContentBox>
    </PlanWrapper>
  )
}

export function Mandalart(): JSX.Element {
  const [planList, setPlanList] = useState<MandalartPlanType[]>(defaultPlans)

  return (
    <MandalartWrapper>
      {planList.map((planItem, index) => (
        <PlanBox key={index} planItem={planItem} />
      ))}
    </MandalartWrapper>
  )
}

const MandalartWrapper = styled(Box)({
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-around',
  alignItems: 'center',

  width: '670px',
  height: '670px',

  borderRadius: 20,

  backgroundColor: primaryColor_80,
})

const PlanWrapper = styled(Button)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '210px',
  height: '210px',

  borderRadius: 20,

  backgroundColor: primaryColor_100,
})

const ContentBox = styled(Box)({
  display: 'flex',

  margin: '10px',

  color: textColor,
})
