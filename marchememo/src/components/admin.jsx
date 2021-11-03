import { useState } from "react";
import "./admin.css";
import DataService from "../services/dataService";

const Admin = () => {
  const [product, setProduct] = useState({});

  const textChanged = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    if (name === "price" || name === "discount" || name === "minimum") {
      value = parseFloat(value);
    }

    // create a copy of the state
    let prod = { ...product };
    prod[name] = value;

    setProduct(prod);
  };

  const handleSave = () => {
    console.log(product);

    let service = new DataService();
    service.saveProduct(product);
  };

  return (
    <div className="admin-page">
      <h1>Manage your products</h1>

      <div className="my-control">
        <label>Title</label>
        <input name="title" onChange={textChanged} type="text" />
      </div>
      <div className="my-control">
        <label>Category</label>
        <input name="category" onChange={textChanged} type="text" />
      </div>
      <div className="my-control">
        <label>Image name</label>
        <input name="image" onChange={textChanged} type="text" />
      </div>
      <div className="my-control">
        <label>Price</label>
        <input name="price" onChange={textChanged} type="number" />
      </div>
      <div className="my-control">
        <label>Discount</label>
        <input name="discount" onChange={textChanged} type="number" />
      </div>
      <div className="my-control">
        <label>Minimum</label>
        <input name="minimum" onChange={textChanged} type="number" />
      </div>
      <div className="my-control">
        <button onClick={handleSave} className="btn btn-dark">
          Register item
        </button>
      </div>
    </div>
  );
};

export default Admin;
