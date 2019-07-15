import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Counter from "../components/Counter";

const CounterContainer = () => {
  const counter = useSelector(state => state.counter, []);
  // const [onIncrease, onDecrease] = useActions([increment, decrement], []);
  const dispatch = useDispatch()
  const onIncrease = () => dispatch({type:'counter/INCREMENT'})
  const onDecrease = () => dispatch({type:'counter/DECREMENT'})

  return (
    <Counter number={counter} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;
