import '@testing-library/jest-native/extend-expect';
import { cleanup, fireEvent, render } from '@testing-library/react-native';
import LoginForm from './LoginForm';
import { Alert } from 'react-native';

const testIdUsernameInput = 'username-input';
const testIdPasswordInput = 'password-input';
const testIdLoginButton = 'login-button';

const onSubmit = jest.fn();
jest.spyOn(Alert, 'alert');

describe('LoginForm', () => {
  afterEach(cleanup);
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('Mounts correctly and submit initially disabled, with both inputs being empty', () => {
    const screen = render(<LoginForm onSubmit={onSubmit} />);
    const btn = screen.getByTestId(testIdLoginButton);
    const inputUsername = screen.getByTestId(testIdUsernameInput);
    const inputPassword = screen.getByTestId(testIdPasswordInput);
    expect(btn).toBeDisabled();
    expect(inputUsername).toHaveTextContent('');
    expect(inputPassword).toHaveTextContent('');
  });

  it('updates input correctly, and unblocks the button, activating submit', () => {
    const screen = render(<LoginForm onSubmit={onSubmit} />);
    const inputUsername = screen.getByTestId(testIdUsernameInput);
    const inputPassword = screen.getByTestId(testIdPasswordInput);
    const btn = screen.getByTestId(testIdLoginButton);

    fireEvent.changeText(inputUsername, 'my username');
    expect(inputUsername.props.value).toBe('my username');
    expect(btn).toBeDisabled();

    fireEvent.changeText(inputPassword, '123456');
    expect(inputPassword.props.value).toBe('123456');
    expect(btn).toBeEnabled();
    fireEvent.press(btn);
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenLastCalledWith('my username', '123456');
  });
  it('Alerts user after 5 seconds', () => {
    jest.useFakeTimers();
    const screen = render(<LoginForm onSubmit={onSubmit} />);
    expect(Alert.alert).not.toHaveBeenCalled();
    jest.advanceTimersByTime(5000);

    expect(Alert.alert).toHaveBeenCalled();
    expect(Alert.alert).toHaveBeenCalledWith('Do you need help?');
    jest.useRealTimers();
  });
});
