// importamos la funcion que vamos a testear
import {
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { Register } from '../src/components/register.js';

jest.mock('firebase/auth');

//  afterEach = cada que
describe('Register', () => {
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
  it('debería llamar navigate timeline', async () => {
    const DOM = document.createElement('div');
    const onNavigate = jest.fn();// mock de la funcion navigate
    DOM.append(Register(onNavigate));
    // llenar formulario
    const nameInput = DOM.querySelector('#myNameInput');
    const emailInput = DOM.querySelector('#myEmailInput');
    const passwordInput = DOM.querySelector('#myPasswordInput');
    const passwordConfirm = DOM.querySelector('#myPasswordInput2');

    nameInput.value = 'Usuario';
    emailInput.value = 'Usuario@gmail.com';
    passwordInput.value = '12345678';
    passwordConfirm.value = '12345678';
    const butonRegister = DOM.querySelector('#registerbutton');

    createUserWithEmailAndPassword.mockImplementation(() => Promise.resolve(
      {
        user: {
          uid: '12asas232',
          email: 'Usuario@gmail.com',
          emailVerified: false,
          isAnonymous: false,
        },
        operationType: 'signIn',
      },
    ));
    // Simular click en boton
    butonRegister.dispatchEvent(new Event('click'));
    await Promise.resolve();
    expect(onNavigate).toHaveBeenCalledWith('/timeline');
  });
});
