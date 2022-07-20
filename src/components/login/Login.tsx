import React from 'react';

import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { LoginParamsType } from '../../api/crmAPI';

import { setLoginTC } from 'store/reducers';
import { RootStateType } from 'store/types';

/* eslint-disable react/jsx-props-no-spreading */

export type DataType = {
  [x: string]: any;
};

export const Login = (): any => {
  const login = useSelector<RootStateType, boolean>(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<LoginParamsType>({ mode: 'onBlur' });
  const onSubmit: SubmitHandler<LoginParamsType> = data => {
    /// /////////////////////////////////////////////////////typescript
    // @ts-ignore
    dispatch(setLoginTC(data));
    reset();
  };
  if (login) {
    return <Navigate to="/" />;
  }
  return (
    <Grid container justifyContent="center">
      <Grid item justifyContent="center">
        <FormControl>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <TextField
                label="Email"
                margin="normal"
                size="small"
                color={errors?.email?.message ? 'error' : 'info'}
                {...register('email', {
                  required: 'required email',
                  minLength: {
                    value: 5,
                    message: 'min length 5',
                  },
                  pattern: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
                })}
              />

              <Container style={{ height: 30, color: '#be0404', fontWeight: 'bold' }}>
                {errors?.email &&
                  (errors?.email?.message || 'field email is filled incorrectly')}
              </Container>

              <TextField
                type="password"
                label="Password"
                size="small"
                margin="normal"
                color={errors?.password?.message ? 'error' : 'info'}
                {...register('password', {
                  required: 'required password',
                  minLength: {
                    value: 5,
                    message: 'min length 5',
                  },
                })}
              />
              <Container style={{ height: 30, color: '#be0404', fontWeight: 'bold' }}>
                {errors?.password?.message}
              </Container>

              <FormControlLabel
                label="Remember me"
                control={<Checkbox />}
                {...register('rememberMe')}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={!isValid}
              >
                Login
              </Button>
            </FormGroup>
          </form>
        </FormControl>
      </Grid>
    </Grid>
  );
};
