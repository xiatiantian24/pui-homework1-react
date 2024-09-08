import React from "react";

export default function ProductCard(props) {
  return (
    <a href={props.item.url} class="product-thumbnail">
      <img
        src={`./assets/products/${props.item.coverImg}`}
        alt={props.item.title}
        class="product-image"
      />
      <h3>{props.item.title}</h3>
      <div class="price">{props.item.price}</div>
    </a>
  );
}
