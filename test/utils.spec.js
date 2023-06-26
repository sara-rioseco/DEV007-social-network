/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  signOut,
  getIdToken,
} from 'firebase/auth';
import {
  addDoc, updateDoc, deleteDoc, doc,
} from 'firebase/firestore';
import { auth, db } from '../src/firebase.js';
import {
  updateUsername,
  createUser,
  userLogin,
  userGoogleLogin,
  getLoggedUser,
  userLogout,
  createPost,
  editPost,
  deletePost,
  addLike,
  removeLike,
} from '../src/utils.js';

jest.mock('firebase/auth');
jest.mock('firebase/firestore');
jest.mock('../src/firebase.js', () => ({
  auth: {
    currentUser: {
      displayName: 'Test User',
      email: 'test@example.com',
    },
    updateProfile: jest.fn(),
    createUserWithEmailAndPassword: jest.fn(),
    signInWithEmailAndPassword: jest.fn(),
    signInWithPopup: jest.fn(),
    signOut: jest.fn(),
    getIdToken: jest.fn(),
  },
  db: {
    collection: jest.fn().mockReturnThis(),
    addDoc: jest.fn(),
    updateDoc: jest.fn(),
    deleteDoc: jest.fn(),
    doc: jest.fn(),
  },
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe('updateUsername', () => {
  it('should be a function', () => {
    expect(typeof updateUsername).toBe('function');
  });

  it('should call updateProfile()', async () => {
    const updateProfileMock = jest.fn().mockResolvedValue();
    updateProfile.mockImplementationOnce(updateProfileMock);
    await updateUsername('myNewName', '');
    expect(updateProfileMock).toHaveBeenCalled();
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
    const addDocMock = jest.fn().mockResolvedValue();
    addDoc.mockImplementationOnce(addDocMock);
    await createPost('my post content');
    expect(addDocMock).toHaveBeenCalled();
  });
});

describe('editPost', () => {
  it('should be a function', () => {
    expect(typeof editPost).toBe('function');
  });
  it('should call updateDoc()', async () => {
    const docRef = doc(db, 'posts', '');
    await editPost('my new content', '');
    expect(updateDoc).toHaveBeenCalled();
  });
});

describe('deletePost', () => {
  it('should be a function', () => {
    expect(typeof deletePost).toBe('function');
  });
  it('should call deleteDoc()', async () => {
    const deleteDocMock = jest.fn().mockResolvedValue();
    const getIdTokenMock = jest.fn().mockResolvedValue(true);
    deleteDoc.mockImplementation(deleteDocMock);
    auth.currentUser.getIdToken = getIdTokenMock;
    await deletePost('123456789'); // Assuming a valid docId
    expect(deleteDoc).toHaveBeenCalled();
  });
  it('should throw an error', async () => {
    const deleteDocMock = jest.fn().mockResolvedValue();
    const getIdTokenMock = jest.fn().mockImplementation(() => Promise.reject(new Error('Mock error')));
    deleteDoc.mockImplementation(deleteDocMock);
    auth.currentUser.getIdToken = getIdTokenMock;
    await expect(deletePost('123456789')).rejects.toThrowError('Mock error');
  });
});

describe('addLike', () => {
  it('should be a function', () => {
    expect(typeof addLike).toBe('function');
  });

  it('should call updateDoc() to add a like', async () => {
    const docId = '123456789'; // Assuming a valid docId
    const updateDocMock = jest.fn().mockResolvedValue();
    updateDoc.mockImplementationOnce(updateDocMock);
    const likes = ['testuser@example.com']; // Provide an array with existing likes
    await addLike(docId, likes);
    expect(updateDocMock).toHaveBeenCalled();
  });
});

describe('removeLike', () => {
  it('should be a function', () => {
    expect(typeof removeLike).toBe('function');
  });
  it('should call updateDoc() to remove a like', async () => {
    const docId = '123456789'; // Assuming a valid docId
    const updateDocMock = jest.fn().mockResolvedValue();
    updateDoc.mockImplementationOnce(updateDocMock);
    await removeLike(docId);
    expect(updateDocMock).toHaveBeenCalled();
  });
});

describe('getLoggedUser', () => {
  it('should be a function', () => {
    expect(typeof getLoggedUser).toBe('function');
  });
  it('should return the displayName of current user', async () => {
    await getLoggedUser();
    expect(getLoggedUser()).toBe('Test User'); // error con auth.currentUser
  });
});
