import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

function CategoriesForm({ onCreate }) {
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Vui lòng nhập tên danh mục"),
      description: Yup.string().required("Vui lòng nhập mô tả"),
    }),
    onSubmit: (values, { resetForm }) => {
      onCreate(values);
      resetForm();
    },
  });

  const { touched, errors, values, handleSubmit, handleBlur, handleChange } = formik;

  return (
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
        Tạo danh mục
      </Button>
    </form>
  );
}

export default CategoriesForm;
