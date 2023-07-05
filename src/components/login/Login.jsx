import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";

const Login = ({
  showPassword,
  handleShow,
  handleSubmit,
  handleChange,
  errors,
}) => {
  return (
    <div style={{ paddingTop: "20px" }}>
      <form onSubmit={handleSubmit}>
        {/* Campo del email */}
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
        />

        {/* Campo de la password */}
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            name="password"
            onChange={handleChange}
            error={errors.password ? true : false}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleShow}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            // label="Password"
          />
          <FormHelperText error={errors.password ? true : false}>
            {errors.password}
          </FormHelperText>
        </FormControl>

        <Button type="submit" variant="contained">
          Ingresar
        </Button>
      </form>
    </div>
  );
};

export default Login;
