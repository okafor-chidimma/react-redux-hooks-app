import  { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ACTIONS } from '../actions/action';
import { loadFoodData } from '../utility/utils';

//custom hook
const useLoadFoodData = () => {
    const [stateAPIStatus, setAPIStatus] = useState('idle');
    const dispatch = useDispatch();
  
    useEffect(() => {
      setAPIStatus('loading');
      loadFoodData()
        .then((data) => {
          dispatch({
            type: ACTIONS.LOAD_MENU,
            payload: {
              menu: data,
            },
          });
          setAPIStatus('success');
        })
        .catch((error) => {
          setAPIStatus('error');
        });
    }, [dispatch]);
  
    return stateAPIStatus;
  }

  export default useLoadFoodData;