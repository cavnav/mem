import React from 'react';
import { i068 } from '../../imgs';
import './styles.css';

export function Img ({

}) {
  const group = i068;
  return (
    <div className="Img">
      {        
        group.items.map((imgId) => {
          const item = group[imgId];
          if (!item.src) return null;
          const { childs = [] } = item;
          return (
            <>
              <div className="flexCol">
                <div 
                  keyx={imgId}
                  key={imgId}
                  className='fitPreview100 img'
                  style={{ 'backgroundImage': `url(${group[imgId].src})` }}
                >                
                </div>
                <div>{group[imgId].title}</div>
              </div>              
              {(
                childs.map((child) => (
                  <div className="flexCol">
                    <div
                      keyx={child.id} 
                      key={child.id}
                      className='fitPreview100 img'
                      style={{ 'backgroundImage': `url(${child.src})` }}
                    >
                    </div>
                    <div>{child.title}</div>
                  </div>
                ))
              )}                
            </>
          );
        })
      } 
    </div>
  );
}