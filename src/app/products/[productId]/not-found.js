"use client"

import React from 'react'
import { usePathname } from 'next/navigation'

const NotFound = () => {
  const pathname = usePathname()
  const productId = pathname.split("/")[2]

  return (
    <div>Product {productId} NotFound Custom Page</div>
  )
}

export default NotFound