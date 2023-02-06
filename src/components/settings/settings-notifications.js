import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";

export const SettingsNotifications = (props) => (
  <form {...props}>
    <Card>
      <CardHeader subheader="Quản lý các thông báo" title="Thông báo" />
      <Divider />
      <CardContent>
        <Grid container spacing={6} wrap="wrap">
          <Grid
            item
            md={4}
            sm={6}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
            xs={12}
          >
            <Typography color="textPrimary" gutterBottom variant="h6">
              Thông báo
            </Typography>
            <FormControlLabel control={<Checkbox color="primary" defaultChecked />} label="Email" />
            <FormControlLabel control={<Checkbox />} label="Tin nhắn" />
            <FormControlLabel
              control={<Checkbox color="primary" defaultChecked />}
              label="Cuộc gọi"
            />
          </Grid>
          <Grid
            item
            md={4}
            sm={6}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
            xs={12}
          >
            <Typography color="textPrimary" gutterBottom variant="h6">
              Tin nhắn
            </Typography>
            <FormControlLabel control={<Checkbox color="primary" defaultChecked />} label="Email" />
            <FormControlLabel
              control={<Checkbox color="primary" defaultChecked />}
              label="Cuộc gọi"
            />
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 2,
        }}
      >
        <Button color="primary" variant="contained">
          Lưu
        </Button>
      </Box>
    </Card>
  </form>
);
