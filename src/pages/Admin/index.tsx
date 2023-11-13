import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

// import ListGroup from "app/page/common/listGroup";
// import AllProducts from "app/page/admin/admin-page/allProducts";
// import NotFound from "../notFound/NotFound";
// import TableOrder from "../common/tableOrder";
// import Category from "./admin-page/category/Category";

// import { getAllProductAction } from "core/redux/actions/productActions";
// import { getCategoryAction } from "core/redux/actions/categoryActions";
// import { getAllOrderAction } from "core/redux/actions/userActions";

import "./styles/containerAdmin.scss";

function AdminPage() {
    const [customers, setCustomers] = useState([]);

    const columns = {
        order: [
            { value: "customer", label: "Tên khách hàng" },
            { value: "products", label: "Số điện thoại" },
            { value: "quantity", label: "Loại hình dịch vụ" },
            { value: "date", label: "Ngày gửi" },
            { value: "action", label: "Thao tác" },
        ],
        allProducts: [
            {
                value: "Stt",
                label: "STT",
            },
            { value: "title_vi", label: "Tên chi tiết" },
            {
                value: "categoryId",
                label: "Phân loại",
            },
            { value: "content_vi", label: "Mô tả" },
            { value: "url", label: "Hình ảnh" },
            { value: "action", label: "Thao tác" },
        ],
    };

    // Loading api lần đầu tiên vào trang admin

    return (
        <>
            {/* <Redirect to="/admin/danh-sach" component={AllProducts} /> */}

            <main className="container-admin">
                <p>abc</p>
                {/* <ListGroup /> */}
                <Routes>
                    <Route
                        path="/admin/khach-hang"
                        element={<p>khach-hang</p>}
                    />

                    <Route path="/admin/dich-vu" element={<p>dich vu</p>} />

                    <Route
                        path="/admin/danh-sach"
                        element={<p>danh sách</p>}
                    />

                    {/* <Route Component={NotFound} /> */}
                </Routes>
            </main>
        </>
    );
}

export default AdminPage;
