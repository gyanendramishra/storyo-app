import api from "../../utils/api";
import { call, put, takeLatest } from "redux-saga/effects";
import { securityActions } from "../slices/SecuritySlice";
import { errorBagActions } from "../slices/ErrorBagSlice";
import { loadingActions } from "../slices/LoadingSlice";
/**
 * Security worker Saga
 */

/**
 * Login
 * @param {*} action
 */
function* login({ payload }) {
  yield put(loadingActions.setLoading(true));
  try {
    const { status, error, token } = yield call(api, {
      url: `auth/login`,
      method: "POST",
      data: payload,
    });
    if (!token && error) {
      throw new Error(error, { status });
    }
    yield put(securityActions.login({ token }));
    yield put(loadingActions.setLoading(false));
  } catch (err) {
    yield put(loadingActions.setLoading(false));
    yield put(
      errorBagActions.setError({
        code: 500,
        message: err.message,
      })
    );
    yield put(securityActions.resetToken());
  }
}

/**
 * Register
 */
// function* register({ payload }) {
//   try {
//     const user = yield call(
//       api("user/register", {
//         data: payload,
//       })
//     );
//     yield put(securityActions.login({ isLoggedIn: true, user }));
//   } catch (e) {
//     yield put(securityActions.failed());
//   }
// }

/**
 * Load user
 */
function* fetchUser({ payload }) {
  yield put(loadingActions.setLoading(true));
  try {
    const { status, error, data } = yield call(api, {
      url: `user/${payload}`,
      method: "GET",
    });
    if (!data && error) {
      throw new Error(error, { status });
    }
    console.log("data", data);
    yield put(securityActions.setUser(data));
  } catch (e) {
    yield put(loadingActions.setLoading(false));
    yield put(securityActions.resetUser());
  }
}

/**
 * Secutiry worker watcher
 */
export function* securitySaga() {
  yield takeLatest(securityActions.authenticate.type, login);
  yield takeLatest(securityActions.loadUser.type, fetchUser);
  // yield takeLatest(securityActions.register.type, register);
}
