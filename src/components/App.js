import React, { Fragment, useEffect } from "react";
//since i am going to be connecting my component to the redux store
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import MenuList from "./PureMenuList";
import Message from "./Message";
import PaymentFooter from "./PaymentFooter";

import { ACTIONS } from "../actions/action";

import useLoadFoodData from "../hooks/useLoadFoodData";
import { selectorMenu } from "../selectors/reduxSelectors";

export default function App() {
  //returning the diet property from store
  const diet = useSelector((state) => state.diet);
  //to dispatch actions to the store
  const dispatch = useDispatch();

  const stateAPIStatus = useLoadFoodData();
  const menuList = useSelector(selectorMenu, shallowEqual);

  useEffect(() => {
    console.log("SERVER_EVENT: menu list changed");
  }, [menuList]);

  function handleVegToggle() {
    dispatch({
      type: ACTIONS.CHANGE_DIET,
    });
  }

  return (
    <div className="food-app">
      <header>
        <h1>Ordux</h1>
        <label>
          <input
            type="checkbox"
            name="veg-checkbox"
            value={diet}
            checked={diet === "veg"}
            onChange={handleVegToggle}
          />
          Veg Only
        </label>
      </header>
      <Message status={stateAPIStatus} />
      {stateAPIStatus === "success" && (
        <Fragment>
          <main>
            <MenuList menuList={menuList} />
          </main>
          <PaymentFooter />
        </Fragment>
      )}
    </div>
  );
}
