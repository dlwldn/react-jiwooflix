import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom'

import { API_KEY, IMAGE_BASE_URL } from '@utils/requests';
import fetcher from '@utils/fetcher';

const Detail = () => {
  const { id } = useParams();
  const { location } = useHistory();
  const [detailData, setDetailData] = useState([]);

  useEffect(()=> {
    const targetCategory = location.pathname.split("/")[1];
    

    fetcher.get(`/${targetCategory}/${id}?api_key=${API_KEY}`)
    .then((res)=> {
      console.log(res);
      setDetailData(res.data);
    })
    .catch((err)=> {
      console.log(err);
    })
  }, [])

  return (
    <div>
      <img src={`${IMAGE_BASE_URL}${detailData?.poster_path}`} alt="" />
    </div>
  )
}

export default Detail;