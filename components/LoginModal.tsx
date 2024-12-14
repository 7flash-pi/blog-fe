import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Modal,
  TextField,
} from "@mui/material";
import { FaEye, FaFingerprint } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";

type Props = {
  isOpen: boolean;
  setisOpen: (open: boolean) => void;
};

const LoginModal = ({ isOpen, setisOpen }: Props) => {
  // Initialize state for user details
  const [userDetails, setuserDetails] = useState({ email: "", password: "" });
  const [showPassword, setshowPassword] = useState(false);

  // Handle login button click
  const handleLoginClick = () => {
    console.log(userDetails); // To check the captured email and password
    setisOpen(false); // Close modal after login
  };

  // Handle password visibility toggle
  const handleClickShowPassword = () => {
    setshowPassword(!showPassword);
  };

  // Handle change in input fields
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setuserDetails((prevDetails: any) => ({
      ...prevDetails,
      [name]: value, // Update the respective field in the state
    }));
  };

  return (
    <React.Fragment>
      <Modal
        open={isOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className="flex justify-center items-center flex-col gap-4"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "80%", sm: "50%", md: 400 },
            height: { xs: "auto", sm: 400, md: 400 },
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: "8px",
          }}
        >
          {/* Email Input */}
          <TextField
            id="email"
            label="Email"
            variant="standard"
            sx={{ m: 1, width: "30ch" }}
            value={userDetails.email} // Link the state value to the input field
            onChange={handleInputChange} // Handle changes in the input
            name="email" // Ensure the correct field is updated
          />

          {/* Password Input */}
          <FormControl sx={{ m: 1, width: "30ch" }} variant="standard">
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={userDetails.password} // Link the state value to the password field
              onChange={handleInputChange} // Handle changes in the password field
              name="password" // Ensure the correct field is updated
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <IoMdEyeOff /> : <FaEye />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          {/* Login Button */}
          <Button
            variant="contained"
            startIcon={<FaFingerprint />}
            sx={{ mt: 2, width: "30ch" }}
            onClick={handleLoginClick}
          >
            Login
          </Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default LoginModal;
