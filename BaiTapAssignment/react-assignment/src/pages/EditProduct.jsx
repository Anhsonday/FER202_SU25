import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../features/products/productSlice";

const EditProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = useSelector((state) =>
    state.products.items.find((p) => p.id === id)
  );

  const [form, setForm] = useState({ ...product });

  const handleSave = () => {
    dispatch(updateProduct(form));
    navigate(`/product/${id}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Chỉnh sửa sản phẩm</h2>
      <input
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        placeholder="Tên"
      />
      <br />
      <input
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        placeholder="Mô tả"
      />
      <br />
      <input
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
        placeholder="Giá"
      />
      <br />
      <input
        value={form.currentPrice}
        onChange={(e) => setForm({ ...form, currentPrice: e.target.value })}
        placeholder="Giá KM"
      />
      <br />
      <input
        value={form.image}
        onChange={(e) => setForm({ ...form, image: e.target.value })}
        placeholder="Tên ảnh (vd: laptop1.png)"
      />
      <br />
      <button onClick={handleSave}>💾 Lưu</button>
      <button onClick={() => navigate("/")}>❌ Hủy</button>
    </div>
  );
};

export default EditProduct;
