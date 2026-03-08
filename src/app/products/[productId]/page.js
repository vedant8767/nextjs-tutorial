import React from 'react'
import { notFound } from 'next/navigation'

const page = async({params}) => {
  const {productId} = await params
  if(productId>=500){
    notFound()
  }
  return (
    <div>Details of product {productId}</div>
  )
}

export default page