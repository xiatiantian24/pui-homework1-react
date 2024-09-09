import React from "react";
import { useNavigate } from 'react-router-dom';


export default function ProductCard(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail`);
    // navigate(`/detail/${props.item.id}`);
  };

  return (
    <div onClick={handleClick} class="product-thumbnail">
      <img
        src={`./assets/products/${props.item.coverImg}`}
        alt={props.item.title}
        class="product-image"
      />
      <h3>{props.item.title}</h3>
      <div class="price">{props.item.price}</div>
    </div>
  );
}
