import { useState } from "react";
import LoginPage from "./Login";


import "./styles/containerAdmin.scss";

function AdminPage() {

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
            <LoginPage />
        </>
    );
}

export default AdminPage;
