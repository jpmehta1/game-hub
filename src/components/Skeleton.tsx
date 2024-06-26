import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const CardSkeleton = () => {
  return (
    <Card width = '200px'borderRadius= '10px ' overflow = 'hidden'>
        <Skeleton height = '200px'></Skeleton>
        <CardBody></CardBody>
        <SkeletonText></SkeletonText>
    </Card>
  )
}

export default CardSkeleton