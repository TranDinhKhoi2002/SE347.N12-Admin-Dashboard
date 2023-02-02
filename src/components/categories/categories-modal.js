import PropTypes from "prop-types";
import { Box, Button, Modal, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";

const modalStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "95%",
    sm: "50%",
    md: "40%",
  },
  maxHeight: "90%",
  overflowY: "auto",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: {
    xs: "12px",
    md: 4,
  },
};

function CategoriesModal({ category, isVisible, onClose, onSubmit }) {
  const formik = useFormik({
    initialValues: {
      name: category?.name || "",
      description: category?.description || "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Vui lòng nhập tên danh mục"),
      description: Yup.string().required("Vui lòng nhập mô tả"),
    }),
    onSubmit: (values, { resetForm }) => {
      onSubmit({ ...values, id: category.id });
      resetForm();
    },
  });

  const { touched, errors, values, handleSubmit, handleBlur, handleChange, setValues } = formik;

  useEffect(() => {
    if (category) {
      setValues({ name: category.name, description: category.description });
    }
  }, [category, setValues]);

  return (
    <Modal open={isVisible} onClose={onClose}>
      <Box sx={modalStyles}>
        <form onSubmit={handleSubmit}>
          <TextField
            error={Boolean(touched.name && errors.name)}
            fullWidth
            helperText={touched.name && errors.name}
            label="Tên danh mục"
            margin="normal"
            name="name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.name}
            variant="outlined"
          />

          <TextField
            error={Boolean(touched.description && errors.description)}
            fullWidth
            helperText={touched.description && errors.description}
            label="Mô tả"
            margin="normal"
            name="description"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.description}
            variant="outlined"
          />

          <Button color="primary" fullWidth size="large" type="submit" variant="contained">
            Cập nhật
          </Button>
        </form>
      </Box>
    </Modal>
  );
}

CategoriesModal.propTypes = {
  category: PropTypes.object,
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default CategoriesModal;
