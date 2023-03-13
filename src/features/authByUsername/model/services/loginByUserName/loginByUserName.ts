import { userActions, type User } from 'entities/User';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface Props {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, Props, { rejectValue: string; }>(
  'login/loginByUsername',
  async (authData, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData);
      if (!response.data) {
        throw new Error();
      }
      const { data } = response;
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));
      dispatch(userActions.setAuthData(data));
      return data;
    } catch (e) {
      return rejectWithValue('error');
    }
  }
);
