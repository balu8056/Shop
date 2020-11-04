import React from "react";
import StarRateIcon from "@material-ui/icons/StarRate";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import Shoe from "../../images/product.png";

const Item = () => {
  return (
    <section className="mb-5">
      <div className="row">
        <div className="col-sm-6">
          <div className="mdb-lightbox">
            <div className="row product-gallery mx-1">
              <div className="imgDiv col-12 mb-0">
                <figure className="view overlay rounded z-depth-1 main-img">
                  <img
                    style={{ borderRadius: "10px" }}
                    alt=""
                    src={Shoe}
                    className="img-fluid z-depth-1"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div className="itemDes col-sm-6">
          <h6 style={{ color: "blue" }}>ADDIDAS</h6>
          <h3 style={{ color: "gray", fontSize: "25px" }}>
            ADDIDAS NEW ARIVAL CASUAL SHOES
          </h3>
          <div className="rateDiv" style={{ color: "green" }}>
            <ul
              style={{ margin: "0px 0px 0px 0px", padding: "0px 0px 0px 0px" }}
              className="starRate"
            >
              {[...Array(5)].map((x, i) => (
                <li
                  key={i}
                  style={{ textDecoration: "none", display: "inline" }}
                >
                  <StarRateIcon style={{ color: "green" }} />
                </li>
              ))}
            </ul>
            <p
              className="ratePoint"
              style={{ marginLeft: "10px", marginTop: "5px", fontSize: "12px" }}
            >
              5 RATING
            </p>
          </div>
          <p>
            <span className="mr-1">
              <strong style={{ fontSize: "30px", color: "orange" }}>
                INR 1999
              </strong>
              <small
                style={{
                  fontSize: "12px",
                  color: "black",
                  marginLeft: "10px",
                  textDecorationLine: "line-through",
                }}
              >
                INR 2400
              </small>
            </span>
          </p>
          <p className="pt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim
            perferendis voluptates laboriosam. Distinctio, officia quis dolore
            quos sapiente tempore alias.
          </p>
          <div className="table-responsive">
            <table className="table table-sm table-borderless mb-0">
              <tbody>
                <tr>
                  <th className="pl-0 w-25" scope="row">
                    <strong>Model</strong>
                  </th>
                  <td>Shirt 5407X</td>
                </tr>
                <tr>
                  <th className="pl-0 w-25" scope="row">
                    <strong>Color</strong>
                  </th>
                  <td>Black</td>
                </tr>
                <tr>
                  <th className="pl-0 w-25" scope="row">
                    <strong>Delivery</strong>
                  </th>
                  <td>USA, Europe</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr />

          <div className="bottomBtns">
            <button
              type="button"
              className="btn btn-md mr-1 mb-2 buyBtn"
              style={{
                backgroundColor: "orange",
                padding: "5px",
                color: "white",
              }}
            >
              Buy now <CreditCardIcon />
            </button>
            <button
              type="button"
              className="btn btn-light btn-md mr-1 mb-2 addCartBtn"
              style={{ padding: "5px" }}
            >
              Add to cart <ShoppingCartOutlinedIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Item;
