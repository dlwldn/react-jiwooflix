import React from 'react';
import { DetailListItemWrap, ListInfoWrap } from './style';

import { IMAGE_BASE_URL } from '@utils/requests';

const DetailInfoListItem = ({ detailListItem }) => {
  return (
    <DetailListItemWrap>
      <div>
        {detailListItem.profile_path 
          ?
            <img src={`${IMAGE_BASE_URL}${detailListItem.profile_path}`} alt={detailListItem.name} /> 
          :
            <div style={{width: '100%', minHeight: '302px', backgroundColor: 'rgb(57, 62, 70)'}}>이미지가 없어요</div>
        }
      </div>
      <ListInfoWrap>
        <h3>{detailListItem.name}</h3>
        <span>{detailListItem.character ? detailListItem.character : detailListItem.job}</span>
      </ListInfoWrap>
    </DetailListItemWrap>
  )
}

export default DetailInfoListItem;