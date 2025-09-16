import { Box, Snackbar, SnackbarContent } from "@mui/material";
import { Colors } from "@/styles/colors";
import { MUIButton } from "./MuiButton";
import Link from "next/link";

const SnackBar = ({
  snackbarToggle,
  handleClose,
}: {
  snackbarToggle: boolean;
  handleClose: () => void;
}) => {
  return (
    <Box>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={!snackbarToggle}
      >
        <SnackbarContent
          message={
            <>
              Our website uses cookies so we can improve user experience and to
              determine where visitors come from. By continuing to use our site,
              you agree to our use of cookies and with the{" "}
              <Link href={"/policy"}>
                <span
                  style={{
                    color: Colors.Accent,
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  privacy policy
                </span>
              </Link>
              .
            </>
          }
          action={<MUIButton handleClose={handleClose} />}
          sx={{
            backgroundColor: Colors.Background,
            width: "600px",
            borderRadius: "8px",
            "& .MuiSnackbarContent-message": {
              color: Colors.PrimaryMain,
            },
          }}
        />
      </Snackbar>
    </Box>
  );
};

export default SnackBar;
