import React from 'react';
import { imgs } from '../../imgs';
import './styles.css';

export function Img ({

}) {
  const group = imgs.i068;
  return (
    <div className="Img">
      {        
        group.items.map((imgId, ind) => group[imgId].src && (
          <div 
            key={imgId}
            className='fitPreview100 img'
            style={{ 'backgroundImage': `url(${group[imgId].src})` }}
          >
          </div>
        ))
      } 
    </div>
  );
}