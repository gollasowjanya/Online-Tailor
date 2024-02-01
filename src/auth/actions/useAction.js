import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from './userActions'; 

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators({ ...userActions }, dispatch);
};

export default useActions;
