import { Card, CardContent, Container, Grid } from "@mui/material";
import Head from "next/head";
import { useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";
import CategoriesForm from "../components/categories/categories-form";
import CategoriesTable from "../components/categories/categories-table";
import CategoriesToolbar from "../components/categories/categories-toolbar";
import { DashboardLayout } from "../components/dashboard-layout";
import { categories as categoryList } from "../__mocks__/categories";

function Categories() {
  const [categories, setCategories] = useState(categoryList);

  const handleCreateCategory = (category) => {
    const existingCategory = categories.find((item) => item.name === category.name);
    if (existingCategory) {
      toast.error("Danh mục đã tồn tại");
      return;
    }

    const updatedCategories = [...categories];

    const formatedCategory = { ...category };
    formatedCategory.id = uuid();
    formatedCategory.numberOfProducts = 0;
    updatedCategories.push(formatedCategory);

    setCategories(updatedCategories);
  };

  const handleDelete = (id) => {
    const existingCategory = categories.find((item) => item.id === id);
    if (existingCategory.numberOfProducts > 0) {
      toast.error("Bạn không thể xóa danh mục đang có sản phẩm");
      return;
    }

    const filteredCategories = categories.filter((item) => item.id !== id);
    setCategories(filteredCategories);
  };

  return (
    <>
      <Head>
        <title>Danh mục | Admin Dashboard</title>
      </Head>
      <Container maxWidth={false} sx={{ py: 8 }}>
        <CategoriesToolbar />
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <CategoriesForm onCreate={handleCreateCategory} />
              </Grid>
              <Grid item xs={12} md={8}>
                <CategoriesTable categories={categories} onDelete={handleDelete} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

Categories.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Categories;
