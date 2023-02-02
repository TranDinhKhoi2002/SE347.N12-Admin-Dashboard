import { useEffect, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import {
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import ActionsMenu from "../ui/ActionsMenu";
import CategoriesModal from "./categories-modal";

export default function CategoriesTable({ categories, ...rest }) {
  const [list, setList] = useState(categories);
  const [selectedCategoryIds, setSelectedCategoryIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [currentCategory, setCurrentCategory] = useState();

  useEffect(() => {
    setList(categories);
  }, [categories]);

  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = list.map((category) => category.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCategoryIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCategoryIds.indexOf(id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCategoryIds, id);
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCategoryIds.slice(1));
    } else if (selectedIndex === selectedCategoryIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCategoryIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCategoryIds.slice(0, selectedIndex),
        selectedCategoryIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCategoryIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleDelete = (id) => {
    const existingCategory = list.find((item) => item.id === id);
    if (existingCategory.numberOfProducts > 0) {
      alert("Bạn không thể xóa danh mục đang có sản phẩm");
      return;
    }

    const filteredCategories = list.filter((item) => item.id !== id);
    setList(filteredCategories);
  };

  const handleOpenModal = (category) => {
    setModalIsVisible(true);
    setCurrentCategory(category);
  };

  const handleCloseModal = () => {
    setModalIsVisible(false);
  };

  const handleEdit = (category) => {
    const { id, name, description } = category;

    const updatedCategories = [...list];
    const existingCategoryIndex = updatedCategories.findIndex((item) => item.id === id);

    updatedCategories[existingCategoryIndex].name = name;
    updatedCategories[existingCategoryIndex].description = description;

    setList(updatedCategories);
    handleCloseModal();
  };

  return (
    <>
      <Card {...rest}>
        <PerfectScrollbar>
          <Box sx={{ minWidth: 1050 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCategoryIds.length === list.length}
                      color="primary"
                      indeterminate={
                        selectedCategoryIds.length > 0 && selectedCategoryIds.length < list.length
                      }
                      onChange={handleSelectAll}
                    />
                  </TableCell>
                  <TableCell>ID</TableCell>
                  <TableCell>Tên danh mục</TableCell>
                  <TableCell>Mô tả</TableCell>
                  <TableCell>Số sản phẩm</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {list.slice(0, limit).map((category) => (
                  <TableRow
                    hover
                    key={category.id}
                    selected={selectedCategoryIds.indexOf(category.id) !== -1}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedCategoryIds.indexOf(category.id) !== -1}
                        onChange={(event) => handleSelectOne(event, category.id)}
                        value="true"
                      />
                    </TableCell>
                    <TableCell>{category.id.slice(0, 8).toUpperCase()}</TableCell>
                    <TableCell>{category.name}</TableCell>
                    <TableCell>{category.description}</TableCell>
                    <TableCell>{category.numberOfProducts}</TableCell>
                    <TableCell>
                      <ActionsMenu
                        onDelete={handleDelete.bind(this, category.id)}
                        onEdit={handleOpenModal.bind(this, category)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </PerfectScrollbar>
        <TablePagination
          component="div"
          count={list.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </Card>
      <CategoriesModal
        category={currentCategory}
        isVisible={modalIsVisible}
        onClose={handleCloseModal}
        onSubmit={handleEdit}
      />
    </>
  );
}

CategoriesTable.propTypes = {
  categories: PropTypes.array.isRequired,
};
