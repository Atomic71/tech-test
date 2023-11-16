import {
  cleanup,
  fireEvent,
  render,
  waitFor,
} from '@testing-library/react-native';
import LoginForm from './LoginForm';
import '@testing-library/jest-native/extend-expect';

const testIdUsernameInput = 'username-input';
const testIdPasswordInput = 'password-input';
const testIdLoginButton = 'login-button';

describe('LoginForm', () => {
  afterEach(cleanup);
  it('Mounts correctly and submit initially disabled, with both inputs being empty', () => {
    const screen = render(<LoginForm />);
    const btn = screen.getByTestId(testIdLoginButton);
    const inputUsername = screen.getByTestId(testIdUsernameInput);
    const inputPassword = screen.getByTestId(testIdPasswordInput);
    expect(btn).toBeDisabled();
    expect(inputUsername).toHaveTextContent('');
    expect(inputPassword).toHaveTextContent('');
  });

  it('updates input correctly, and unblocks the button', () => {
    const screen = render(<LoginForm />);
    const inputUsername = screen.getByTestId(testIdUsernameInput);
    const inputPassword = screen.getByTestId(testIdPasswordInput);
    const btn = screen.getByTestId(testIdLoginButton);

    fireEvent.changeText(inputUsername, 'my username');
    expect(inputUsername.props.value).toBe('my username');
    expect(btn).toBeDisabled();

    fireEvent.changeText(inputPassword, '123456');
    expect(inputPassword.props.value).toBe('123456');
    expect(btn).toBeEnabled();
  });
});
