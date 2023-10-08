import React from 'react'
import { useParams } from 'react-router-dom'

export default function ViewDetails() {
    const {id} = useParams()
  return (
    <div>ViewDetails</div>
  )
}

