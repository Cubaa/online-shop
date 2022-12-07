import React, { FC, useCallback, useState } from "react";
import * as Yup from "yup";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";
import { formTheme } from "./form.styled";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./form.data";
import { useAuth } from "../../../hooks/auth.hook";

export const Form: FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const formSchema = Yup.object().shape(loginSchema);
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(formSchema),
    mode: "onChange",
    delayError: 500,
  });

  const handleShowPassword = useCallback((): void => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  const submit = useCallback((formData: FieldValues): void => {
    login(formData);
    reset();
  }, []);

  return (
    <ThemeProvider theme={formTheme}>
      <Paper elevation={0}>
        <Grid
          container
          item
          margin="0 auto"
          justifyContent="center"
          xs={12}
          sm={9}
          md={8}
          p={{
            xs: 2,
            sm: 4,
          }}
          sx={{
            boxShadow: {
              xs: 0,
              sm: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            },

            bgcolor: "#fff",
          }}
        >
          <Box display="flex" width="100%">
            <Typography variant="h6">Zaloguj się</Typography>
          </Box>
          <Box component="form" method="POST" autoComplete="off" mt={5}>
            <Grid container item spacing={3}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  type="email"
                  id="email"
                  margin="dense"
                  placeholder="Adres email"
                  {...register("email")}
                  error={!!errors["email"]}
                  helperText={
                    errors["email"] ? errors["email"].message?.toString() : ""
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  {...register("password")}
                  error={!!errors["password"]}
                  id="password"
                  type={showPassword ? "text" : "password"}
                  margin="dense"
                  placeholder="Hasło"
                  helperText={
                    errors["password"]
                      ? errors["password"].message?.toString()
                      : ""
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleShowPassword}
                        >
                          {showPassword ? (
                            <VisibilityIcon />
                          ) : (
                            <VisibilityOffIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            <Box width="100%" display="flex" justifyContent="center" pt={6}>
              <Button
                variant="contained"
                sx={{
                  width: {
                    xs: "100%",
                    sm: "auto",
                  },
                  py: {
                    xs: 2,
                    sm: 1,
                  },
                }}
                onClick={handleSubmit(submit)}
              >
                <Typography variant="button">Zaloguj się</Typography>
              </Button>
            </Box>
          </Box>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
};
