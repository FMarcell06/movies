import * as React from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export const ContentPagination = ({ page, setPage }) => {
  const handleChange = (event, value) => {
    setPage(value);
  };

  console.log(page);

  return (
    <Stack spacing={2}>
      <Pagination
        sx={{
          "& .MuiPaginationItem-root": {
            color: "",
            "&.Mui-selected": {
              backgroundColor: "#818cf8 ",
              color: "white",
              ":hover": {
                backgroundColor: "#9fa8ff ",
                color: "white",
              },
            },
          },
        }}
        count={10}
        page={page}
        onChange={handleChange}
      />
    </Stack>
  );
};
