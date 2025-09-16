import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "@/styles/colors";
import { Button as ButtonComp } from "../../components/index";
import { useRouter } from "next/navigation";

interface msgI {
  open: boolean;
  handleClose: () => void;
}

const ErrorMessage: React.FC<msgI> = ({ open, handleClose }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const nav = useRouter();

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          <CloseIcon sx={{ color: "#1A202C", cursor: "pointer" }} />
        </Button>
      </DialogActions>

      <DialogTitle
        id="responsive-dialog-title"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <ReportProblemIcon sx={{ color: Colors.Error }} fontSize="large" />
        <Typography
          color={Colors.Error}
          fontWeight="bold"
          textAlign="center"
          fontSize={"23px"}
        >
          Oh snap!
        </Typography>
      </DialogTitle>

      <DialogContent>
        <DialogContentText>
          <Typography textAlign="center" color="#596780" fontWeight="bold">
            Oops! Something went wrong. Please try again or contact support if
            the issue persists.
          </Typography>

          <Box
            my={2}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={3}
          >
            <ButtonComp
              label="Home"
              type="submit"
              size="large"
              onClick={() => nav.push("/")}
              variant="outlined"
              sx={{ width: "200px" }}
            />
            <ButtonComp
              label="Try Again"
              type="submit"
              onClick={handleClose}
              size="large"
              sx={{ width: "200px" }}
            />
          </Box>
        </DialogContentText>

        <Typography
          mb={5}
          color="#596780"
          textAlign="center"
          fontSize="10px"
          mt={1}
        >
          &copy; Geo Cars Rent
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default ErrorMessage;
