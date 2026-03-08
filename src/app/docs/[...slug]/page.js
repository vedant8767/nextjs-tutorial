import React from 'react'

// Catch-All Segment is used in dynamic routing 
// when you want one route to handle multiple nested paths
//if you want to /docs page also serve the same this page wrap [...slug] with other []
//[[...slug]]

const page = async({params}) => {
  const {slug}= await params
  console.log(slug)
  return (
    <div>
        Docs Home Page
        {
            slug && (
                slug.map((param)=>{
                    return(
                        <h1 key={param}>{param}</h1>
                    )
                })
            )
        }
    </div>
  )
}

export default page