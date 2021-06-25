import React from 'react';
import { DetailInfoListWrap } from './style';
import DetailInfoListItem from '@components/DetailInfoListItem';

const DetailInfoList = ({category, detailListData}) => {
  return (
    <DetailInfoListWrap>
      <h2>{category}</h2>
      <ul>
        {detailListData.map((item, index)=> {
          return (
            <DetailInfoListItem key={index} detailListItem={item}/>
          )
        })}
      </ul>
    </DetailInfoListWrap>
  )
}

export default DetailInfoList;