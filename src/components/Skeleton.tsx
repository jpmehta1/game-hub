import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const CardSkeleton = () => {
  return (
    <Card >
        <Skeleton height = '200px'></Skeleton>
        <CardBody></CardBody>
        <SkeletonText></SkeletonText>
    </Card>
  )
}

export default CardSkeleton