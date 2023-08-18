import React from 'react';


export default () => {
  const onDragStart = (event, nodeType) => {
    
    event.dataTransfer.setData('application/reactflow', nodeType);
    
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside className='asideMenu'>
     
      <div className="dndnode input"  onDragStart={(event) => onDragStart(event, 'input')} draggable>
        HTML <img src="https://icon-library.com/images/html5-icon/html5-icon-13.jpg" alt="" />
      </div>
      <div className="dndnode input"  onDragStart={(event) => onDragStart(event, 'input')} draggable>
        JAVASCRIPT <img src="/img/javascript.png" alt="" />
      </div>
      <div className="dndnode input"  onDragStart={(event) => onDragStart(event, 'input')} draggable>
        JAVA <img src="/img/java.png" alt="" />
      </div>
      <div className="dndnode input"  onDragStart={(event) => onDragStart(event, 'input')} draggable>
        SPRING <img src="/img/javaspring.png" alt="" />
      </div>
      <div className="dndnode input"  onDragStart={(event) => onDragStart(event, 'input')} draggable>
        MYSQL <img src="/img/mysql.png" alt="" />
      </div> 
         </aside>
  );
};
