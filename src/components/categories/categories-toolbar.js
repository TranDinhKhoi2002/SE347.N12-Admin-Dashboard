import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

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
        Categories
      </Typography>
      <Box sx={{ m: 1 }}>
        <Button color="primary" variant="contained" startIcon={<AddIcon />}>
          Add Categories
        </Button>
      </Box>
    </Box>
  );
}

export default CategoriesToolbar;
