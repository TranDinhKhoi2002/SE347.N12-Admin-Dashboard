import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@mui/material';
import { useState } from 'react';

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  name: 'Katarina Smith',
};



export const AccountProfile = (props) => {
  const [values, setValues] = useState({
    avatar: user.avatar,
  });

  const uploadImage = (e) => {
    console.log(e.target.result);
    setValues({
      ...values,
      avatar: URL.createObjectURL(e.target.files[0])
    })
  }
  return <Card {...props}>
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Avatar
          src={values.avatar}
          sx={{
            height: 64,
            mb: 2,
            width: 64
          }}
        />
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h5"
        >
          {props.values.firstName + ' ' + props.values.lastName}
        </Typography>
      </Box>
    </CardContent>
    <Divider />
    <CardActions>
      <Button
        color="primary"
        fullWidth
        variant="text"
        component="label"
      >
        Thay đổi ảnh
        <input type="file" accept="image/png, image/gif, image/jpeg"
              hidden
              onChange={(e) => {
                uploadImage(e);
              }} />
      </Button>
    </CardActions>
  </Card>
};
