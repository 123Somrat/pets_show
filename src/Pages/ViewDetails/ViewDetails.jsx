import { useParams } from "react-router-dom"


export default function ViewDetails() {
    const {id} = useParams();
    console.log(id)
  return (
    <div>ViewDetails</div>
  )
}

