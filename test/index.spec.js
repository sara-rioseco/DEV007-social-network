/* eslint-disable no-unused-vars */
import {
  validatePassword,
  validateEmail,
  createUser,
  userLogin,
  userGoogleLogin,
  userLogout,
  createPost,
  createDeleteModal,
  createEditModal,
  createPostDiv,
  deletePost,
  addLike,
  removeLike,
  spanLikeFunc,
  getLoggedUser,
  updateDisplayNameAndPhotoURL,
} from '../src/lib/index.js';

// jest.mock('../src/lib');

describe('validatePassword', () => {
  it('should be a function', () => {
    expect(typeof validatePassword).toBe('function');
  });
  it('should return a boolean', () => {
    expect(typeof validatePassword('password', 'password')).toBe('boolean');
  });
});

describe('validateEmail', () => {
  it('should be a function', () => {
    expect(typeof validateEmail).toBe('function');
  });
  it('should return a boolean', () => {
    expect(typeof validateEmail('myEmail@mail.com')).toBe('boolean');
  });
  it('should return true for "myEmail@mail.com"', () => {
    expect(validateEmail('myEmail@mail.com')).toBe(true);
  });
  it('should return false for "myEmailmail,com"', () => {
    expect(validateEmail('myEmailmail,com')).toBe(false);
  });
});

describe('createUser', () => {
  it('should be a function', () => {
    expect(typeof createUser).toBe('function');
  });
  it('should have been called', async () => {
    const user = createUser('myEmail@mail.com', 'password', 'username');

    expect(user).toHaveBeenCalled();
  });
});
