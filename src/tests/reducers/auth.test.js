import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
  const action = {
    type: 'LOGIN',
    uid: '123abc'
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test('should clear user uid for out', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({ uid: '123abc' }, action);
  expect(state.uid).toBeFalsy();
});