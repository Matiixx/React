import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  ButtonProps,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useReducer, useRef, useState } from "react";

const TEXT_COLOR = "#ef6c01";
const OUTLINE_COLOR = "#ffe0b2";
const BG_COLOR = "#fff9ee";

const StyledButton = styled(Button)<ButtonProps>(() => ({
  color: TEXT_COLOR,
  borderColor: TEXT_COLOR,
  backgroundColor: "transparent",
  borderWidth: "2px",
  fontSize: "1rem",
  "&:hover": {
    backgroundColor: "transparent",
    borderWidth: "2px",
    borderColor: TEXT_COLOR,
  },
  "&:focus": { outline: "none" },
}));

const StyledTextField = styled(TextField)<TextFieldProps>(() => ({
  "& input:focus": {
    borderColor: BG_COLOR,
  },
  "& input, .MuiFormLabel-root, .MuiFormLabel-root.Mui-focused": {
    color: TEXT_COLOR,
  },
  "& .MuiInputBase-root.Mui-focused:after, .MuiInputBase-root:after": {
    borderColor: OUTLINE_COLOR,
  },
}));

const PasswordFormStyle = {
  "& input, .MuiFormLabel-root, .MuiFormLabel-root.Mui-focused": {
    color: TEXT_COLOR,
  },
  "& .MuiInputBase-root:after": {
    borderColor: OUTLINE_COLOR,
  },
};

interface PersonalData {
  name: string;
  email: string;
  password: string;
}

function Panel() {
  const [personalData, setPersonalData] = useReducer(
    (state: PersonalData, newState: Partial<PersonalData>) => ({
      ...state,
      ...newState,
    }),
    {
      name: "",
      email: "",
      password: "",
    }
  );

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSaveClick = () => {
    alert(JSON.stringify(personalData));
    console.log(personalData);
  };

  return (
    <div>
      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        sx={{ backgroundColor: BG_COLOR, width: "500px" }}
      >
        <AccordionSummary>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3>Personal data</h3>
            <StyledButton
              variant="outlined"
              disableRipple
              sx={{ gap: ".5rem" }}
            >
              <EditLocationIcon />
              Change
            </StyledButton>
          </Box>
        </AccordionSummary>

        <AccordionDetails>
          <Box
            sx={{
              width: 1,
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <StyledTextField
              label="Name"
              variant="standard"
              fullWidth
              placeholder="Enter a name"
              value={personalData.name}
              onChange={(e) => setPersonalData({ name: e.target.value })}
            />
            <StyledTextField
              label="Email"
              variant="standard"
              fullWidth
              placeholder="Enter an email"
              value={personalData.email}
              onChange={(e) => setPersonalData({ email: e.target.value })}
            />

            <FormControl variant="standard" sx={PasswordFormStyle}>
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter a password"
                value={personalData.password}
                onChange={(e) => setPersonalData({ password: e.target.value })}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <Button
              sx={{
                color: "#ef6c01",
                fontWeight: "500",
                fontSize: "1rem",
                "&:focus": { outline: "none" },
              }}
              disableRipple
              onClick={handleSaveClick}
            >
              Save
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Panel;
