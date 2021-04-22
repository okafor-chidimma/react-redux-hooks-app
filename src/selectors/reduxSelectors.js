export const selectorCartPrice = (state) => {
  const { cartByIds, menuById } = state;
  let cartPrice = 0;

  const cartKeys = Object.keys(cartByIds);
  cartKeys.forEach((id) => {
    const item = menuById[id];
    const cartItem = cartByIds[id];

    const price = cartItem.quantity * item.price;
    cartPrice += price;
  });

  return cartPrice;
};

export const selectorMenu = (state) => {
  const { diet, menuIdList, menuById } = state;
  const menuId = menuIdList[diet];
  const menuList = [];

  menuId.forEach((id) => {
    menuList.push(menuById[id]);
  });

  return menuList;
};
