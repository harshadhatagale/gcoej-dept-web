import Heading from '@/components/global/Heading'
import PlacementStats from '@/components/pages/placement-stats/PlacementStats'
import React from 'react'

export default function page() {
  return (
    <>
    <Heading title={"📊 Placement Statistics"}/>
    <PlacementStats/>
    </>
  )
}
