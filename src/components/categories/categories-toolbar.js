import { Box, Button, Typography } from "@mui/material";

function CategoriesToolbar() {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        m: -1,
      }}
    >
      <Typography sx={{ m: 1 }} variant="h4">
        Danh mục
      </Typography>
    </Box>
  );
}

export default CategoriesToolbar;
