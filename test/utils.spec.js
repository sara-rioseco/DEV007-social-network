/* eslint-disable no-unused-vars */
import {
  createUser,
  userLogin,
  userGoogleLogin,
  userLogout,
  createPost,
  deletePost,
  addLike,
  removeLike,
  getLoggedUser,
  updateDisplayNameAndPhotoURL,
} from '../src/utils.js';

// jest.mock('firebase/auth');

describe('createUser', () => {
  it('should be a function', () => {
    expect(typeof createUser).toBe('function');
  });
  it('should have been called', async () => {
    const user = createUser('myEmail@mail.com', 'password', 'username');

    expect(user).toHaveBeenCalled();
  });
});

describe('userLogin', () => {
  it('should be a function', () => {
    expect(typeof userLogin).toBe('function');
  });
  it('should return an object', () => {
    expect(typeof userLogin('password', 'password')).toBe('object');
  });
});

describe('userGoogleLogin', () => {
  it('should be a function', () => {
    expect(typeof userGoogleLogin).toBe('function');
  });
  it('should return a boolean', () => {
    expect(typeof userGoogleLogin('myEmail@mail.com')).toBe('boolean');
  });
});
