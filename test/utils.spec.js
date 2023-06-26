/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import {
  addDoc, updateDoc, onSnapshot, deleteDoc, query,
} from 'firebase/firestore';
/* import { auth } from '../src/firebase.js'; */
import {
  updateUsername,
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

jest.mock('firebase/auth');
jest.mock('firebase/firestore');

beforeEach(() => {
  signInWithEmailAndPassword.mockClear();
  createUserWithEmailAndPassword.mockClear();
  updateProfile.mockClear();
  signInWithPopup.mockClear();
  GoogleAuthProvider.mockClear();
  addDoc.mockClear();
  updateDoc.mockClear();
  onSnapshot.mockClear();
  deleteDoc.mockClear();
  query.mockClear();
});

describe('updateUsername', () => {
  it('should be a function', () => {
    expect(typeof updateUsername).toBe('function');
  });
});

describe('createUser', () => {
  it('should be a function', () => {
    expect(typeof createUser).toBe('function');
  });
});

describe('userLogin', () => {
  it('should be a function', () => {
    expect(typeof userLogin).toBe('function');
  });
  it('should call signInWithEmailAndPassword()', async () => {
    await userLogin('myEmail@mail.com', 'password');
    expect(signInWithEmailAndPassword).toHaveBeenCalled();
  });
  it('should return an object', async () => {
    signInWithEmailAndPassword.mockReturnValueOnce({
      user: { email: 'myEmail@mail.com' },
    });
    const response = await userLogin('myEmail@mail.com', 'password');
    expect(response.user.email).toBe('myEmail@mail.com');
  });
});

describe('userGoogleLogin', () => {
  it('should be a function', () => {
    expect(typeof userGoogleLogin).toBe('function');
  });
});

describe('userLogout', () => {
  it('should be a function', () => {
    expect(typeof userLogout).toBe('function');
  });
});

describe('createPost', () => {
  it('should be a function', () => {
    expect(typeof createPost).toBe('function');
  });
});

describe('deletePost', () => {
  it('should be a function', () => {
    expect(typeof deletePost).toBe('function');
  });
});

describe('addLike', () => {
  it('should be a function', () => {
    expect(typeof addLike).toBe('function');
  });
});

describe('removeLike', () => {
  it('should be a function', () => {
    expect(typeof removeLike).toBe('function');
  });
});

describe('getLoggedUser', () => {
  it('should be a function', () => {
    expect(typeof getLoggedUser).toBe('function');
  });
});

describe('updateDisplayNameAndPhotoURL', () => {
  it('should be a function', () => {
    expect(typeof updateDisplayNameAndPhotoURL).toBe('function');
  });
  /* it('should call updateProfile()', async () => {
    const auth = jest.fn();
    auth.mockReturnValue({
      currentUser: {
        email: 'myEmail@mail.com',
      },
    });
    updateProfile.mockReturnValueOnce({});

    await updateDisplayNameAndPhotoURL('myNewName', '');
    expect(updateProfile).toHaveBeenCalled();
  }); */
});
