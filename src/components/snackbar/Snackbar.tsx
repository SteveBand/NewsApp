import Snackbar from "@mui/material/Snackbar";
import React from "react";

interface Props {
  snackbar: {
    open: boolean;
    message: string;
  };
}

export const SnackBar: React.FC<Props> = ({ snackbar }) => {
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={snackbar.open}
        message={snackbar.message}
      />
    </div>
  );
};
