const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/ADD';
const TOGGLE_CHECK = 'todos/TOGGLE_CHECK';
const REMOVE = 'todos/REMOVE';

const f = (dispatch) => {
  // const dispatch = useDispatch()
  let id = 0;
  const onChangeInput = input => dispatch({ type: CHANGE_INPUT, payload: input });
  const onInsert = text => dispatch({
    type: INSERT,
    payload: {
      id: ++id,
      text
    }
  });
  const onToggle = id => dispatch({ type: TOGGLE_CHECK, payload: id });
  const onRemove = id => dispatch({ type: REMOVE, payload: id });
  return { onChangeInput, onInsert, onToggle, onRemove }
}

export default f