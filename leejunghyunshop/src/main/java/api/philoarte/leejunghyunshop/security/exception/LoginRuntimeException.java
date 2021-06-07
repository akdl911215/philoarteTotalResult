package api.philoarte.leejunghyunshop.security.exception;

public class LoginRuntimeException extends RuntimeException {
    private static final long serialVersionUID = 1L;

    public LoginRuntimeException() {
        super(ErrorCode.LOGIN_FAILED.getMessage());
    }

    public LoginRuntimeException(String message) {
        super(message);
    }


}
