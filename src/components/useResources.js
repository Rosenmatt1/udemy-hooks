import { useState, useEffect } from 'react'
import axios from 'axios'

const useResources = (resource) => {
  const [resources, setResources] = useState([])

  // const fetchResource = async (resource) => {
  //   const response = await axios.get(`http://jsonplaceholder.typicode.com/${resource}`)
  //   // console.log("response", response)
  //   setResources(response.data)
  // }

  // useEffect(() => {
  //   fetchResource(resource)
  // }, [resource])

  useEffect(
    () => {
      (async resource => {
        const response = await axios.get(`http://jsonplaceholder.typicode.com/${resource}`)
        // console.log("response", response)
        setResources(response.data)
      })(resource)
    }, [resource]
  )

  return resources
}

export default useResources