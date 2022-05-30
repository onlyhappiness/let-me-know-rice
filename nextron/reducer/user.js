import {
  // 로그인
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  // 로그아웃
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  // 회원가입
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from "../actions/user";

export const initialState = {
  // 로그인
  loginLoading: false,
  loginDone: false,
  loginError: false,
  // 로그아웃
  logoutLoading: false,
  logoutDone: false,
  logoutError: false,
  // 회원 가입
  signUpLoading: false,
  signUpDone: false,
  signUpError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // 로그인
    case LOG_IN_REQUEST:

    case LOG_IN_SUCCESS:

    case LOG_IN_FAILURE:

    // 로그아웃
    case LOG_OUT_REQUEST:

    case LOG_OUT_SUCCESS:

    case LOG_OUT_FAILURE:

    // 회원가입
    case SIGN_UP_REQUEST:

    case SIGN_UP_SUCCESS:

    case SIGN_UP_FAILURE:

    default:
  }
};
