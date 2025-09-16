import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import CircleIcon from "@mui/icons-material/Circle";
import CloseIcon from "@mui/icons-material/Close";

interface msgI {
  open: boolean;
  handleClose: () => void;
}

const ResponsiveDialog: React.FC<msgI> = ({ open, handleClose }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const listItems = [
    {
      text: "Check your email for a confirmation message with all the booking details, including pickup location and time.",
    },
    {
      text: "Prepare required documents, such as your driver’s license and booking reference.",
    },
    {
      text: "Enjoy your ride! We look forward to serving you.",
    },
  ];

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
        <TaskAltIcon sx={{ color: "#3563E9", fontSize: "50px" }} />
        <Typography
          color="#1A202C"
          fontWeight="bold"
          textAlign="center"
          fontSize={"23px"}
        >
          You have successfully made a booking 🎉
        </Typography>
      </DialogTitle>

      <DialogContent>
        <DialogContentText>
          <Typography textAlign="center" color="#596780" fontWeight="bold">
            Your car rental is confirmed! Thank you for choosing our service. We
            are excited to help you with your journey.
          </Typography>

          <Typography
            variant="body1"
            fontSize="14px"
            mt={2}
            color="#1A202C"
            paddingLeft="20px"
            fontWeight="bold"
          >
            Here are your next steps:
          </Typography>

          <List sx={{ padding: 0 }}>
            {listItems.map((item, index) => (
              <ListItem key={index} sx={{ padding: "4px 0" }}>
                <CircleIcon
                  sx={{
                    fontSize: "10px",
                    color: "#3563E9",
                    marginRight: "5px",
                  }}
                />
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    style: {
                      fontSize: "14px",
                      color: "#1A202C",
                      fontWeight: "bold",
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </DialogContentText>

        <Typography textAlign="center" fontSize="14px" mt={3} color="#596780">
          If you have any questions or need further assistance, feel free to
          contact our support team. Safe travels!
        </Typography>

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

export default ResponsiveDialog;
