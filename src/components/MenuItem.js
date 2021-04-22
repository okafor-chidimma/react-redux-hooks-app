import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ACTIONS } from '../actions/action'
import IconMinus from './IconMinus'
import IconPlus from './IconPlus'

const MenuItem = ({item }) => {
  const cartByIds = useSelector((state) => state.cartByIds);
  const dispatch = useDispatch();

  const quantity = cartByIds[item.id]?.quantity ?? 0;

  const handleIncrement = () => {
    console.log("increment");
    dispatch({
      type: ACTIONS.ADD_TO_CART,
      payload: {
        itemId: item.id,
      },
    });
  }

  const handleDecrement =() =>{
      console.log("decrement");
    dispatch({
      type: ACTIONS.REMOVE_FROM_CART,
      payload: {
        itemId: item.id,
      },
    });
  }

  const addBtn = (
    <button
      aria-label={`Add ${item.label} to cart`}
      className="menu-btn-add"
      onClick={handleIncrement}
    >
      Add <IconPlus />
    </button>
  );

  const increaseBtn = (
    <button
      aria-label={`Add ${item.label} to cart`}
      className="menu-btn-item"
      onClick={handleIncrement}
    >
      <IconPlus />
    </button>
  );

  const decreaseBtn = (
    <button
      aria-label={`Remove ${item.label} from cart`}
      className="menu-btn-item"
      onClick={handleDecrement}
    >
      <IconMinus />
    </button>
  );

  const qtyIndicator = (
    <div className="menu-item-qty" role="status" aria-live="polite">
      {quantity}
    </div>
  );

  return (
    <li className="menu-item">
      <div>
        <div className="menu-item-title">
          <h4>{item.label}</h4>
          <span>(${item.price})</span>
        </div>
        <p className="menu-item-description">{item.description}</p>
      </div>
      {quantity === 0 ? (
        addBtn
      ) : (
        <div className="menu-btn-group">
          {decreaseBtn}
          {qtyIndicator}
          {increaseBtn}
        </div>
      )}
    </li>
  );
};

export default MenuItem;
