import React from 'react';
import MenuItem from './MenuItem';

const PureMenuList=(props) =>{
    console.log('MenuList Re-Render');
    const { menuList } = props;
    return (
      <ul className="menu-list">
        {menuList.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </ul>
    );
  }

  //exporting the memoized version, which will prevent this function(component) from re-executing unless the props coming in changes\
  //also the cached version will be served where ever this component is used in any parent component unless if the prop coming into this menuList component changes, then and only then will the function re-execute to reflect the changed props
  const MenuList = React.memo(PureMenuList);
  export default MenuList;