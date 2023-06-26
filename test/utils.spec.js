/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth';
import {
  addDoc, updateDoc, onSnapshot, deleteDoc, query, doc,
} from 'firebase/firestore';
import { Register } from '../src/components/register.js';
import { auth, db } from '../src/firebase.js';
import {
  updateUsername,
  createUser,
  userLogin,
  userGoogleLogin,
  getLoggedUser,
  updateDisplayNameAndPhotoURL,
  userLogout,
  createPost,
  editPost,
  deletePost,
  addLike,
  removeLike,
} from '../src/utils.js';

jest.mock('firebase/auth');
jest.mock('firebase/firestore');
jest.mock(auth);

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

/* describe('Register', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });
  it('debería ser una función', () => {
    expect(typeof Register).toBe('function');
  });
  it('debería tener 2 botones', () => {
    const DOM = document.createElement('div');
    DOM.append(Register());
    const butonRegister = DOM.querySelector('#registerbutton');
    expect(butonRegister).not.toBe(undefined);
    const butonHome = DOM.querySelector('#home-button');
    expect(butonHome).not.toBe(undefined);
  });
}); */

describe('updateUsername', () => {
  it('should be a function', () => {
    expect(typeof updateUsername).toBe('function');
  });
  it('should call updateProfile()', async () => {
    await updateUsername('newName'); // error con auth.currentUser
    expect(updateProfile).toHaveBeenCalled();
  });
});

describe('createUser', () => {
  it('should be a function', () => {
    expect(typeof createUser).toBe('function');
  });
  it('should call createUserWithEmailAndPassword()', async () => {
    await createUser('myEmail@mail.com', 'password', 'name');
    expect(createUserWithEmailAndPassword).toHaveBeenCalled();
  });
  /* it('should call updateUsername()', async () => {
    await createUser('myEmail@mail.com', 'password', 'name');
    expect(updateUsername).toHaveBeenCalled();
  }); */
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
    signInWithEmailAndPassword.mockReturnValueOnce({ // mock OK
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
  it('should call signInWithPopup()', async () => {
    await userGoogleLogin('myEmail@mail.com', 'password');
    expect(signInWithPopup).toHaveBeenCalled();
  });
});

describe('userLogout', () => {
  it('should be a function', () => {
    expect(typeof userLogout).toBe('function');
  });
  it('should call signOut()', async () => {
    await userLogout(auth);
    expect(signOut).toHaveBeenCalled();
  });
});

describe('createPost', () => {
  it('should be a function', () => {
    expect(typeof createPost).toBe('function');
  });
  it('should call addDoc()', async () => {
    await createPost('my post content'); // error con auth.currentUser
    expect(addDoc).toHaveBeenCalled();
  });
});

describe('editPost', () => {
  it('should be a function', () => {
    expect(typeof editPost).toBe('function');
  });
  /* it('should call updateDoc()', async () => {
    const docRef = doc(db, 'posts', docId);
    await editPost('new content', docId);
    expect(updateDoc).toHaveBeenCalled();
  }); */
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
  /* it('should return the displayName of current user', () => {
    getLoggedUser.mockReturnValueOnce();
    expect(getLoggedUser()).toBe();
  }); */
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
