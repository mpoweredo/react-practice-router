import { useRouteMatch } from 'react-router-dom';

import { CircularProgress } from '@mui/material';

import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleDishDetail } from '../api/api'
import useFetch from '../hooks/useFetch'

const DishDetail = () => {
    const match = useRouteMatch()
    const { url } = match

    const params = useParams()
    const { sendRequest, data: dishDetails, status} = useFetch(getSingleDishDetail)

    useEffect(() => {
        sendRequest(url)
    }, [sendRequest, url])

    
    let content;

    if (status === 'pending') {
        return <CircularProgress className='centered' />
    }
    
    if (status === 'done') {
        const { title, description, price } = dishDetails
        content = <>
            <h1 className='centered'>{title}</h1>
            <h3 className='centered'>{price}</h3>
            <p className='centered'>{description}</p>
        </>
    }

  return (
    <div style={{marginTop: '2em'}} >
        {content}
    </div>
  )
}

export default DishDetail