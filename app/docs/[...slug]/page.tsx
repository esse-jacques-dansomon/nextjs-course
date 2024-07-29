import React from 'react'

function page({
    params 
} : {
    params: {
        slug: string[]
    }
}) {

     if (params.slug.length === 1) {
        return <h1>Hello {params.slug[0]}</h1>
    }
    else if (params.slug.length === 2) {
        return <h1>Hello {params.slug[0]} {params.slug[1]}</h1>
    }
  return (
    <div>
        <h1>Hello docs page</h1>
    </div>
  )
}

export default page
