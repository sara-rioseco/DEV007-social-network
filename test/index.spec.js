/* eslint-disable no-unused-vars */
// importamos la funcion que vamos a testear
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

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
});
