import React from "react";
import Link from "next/link";

function ProductList({productID = 1000}){
    return (<React.Fragment>
        <Link href="/">
            <a>Home</a>
        </Link>
        <h1>Product List Page</h1>
        <h2>
            <Link href="/product/1">
            <a>Product 1</a>
            </Link>
        </h2>
        <h2>
            <Link href="/product/2">
            <a>Product 2</a>
            </Link>
        </h2>
        <h2>
            <Link href="/product/3" replace>
            <a>Product 3</a>
            </Link>
        </h2>
        <h2>
            <Link href={`/product/${productID}`}>
            <a>Product {productID}</a>
            </Link>
        </h2>
        </React.Fragment>);
}

//replace pro replace current URL, that is go to home page

export default ProductList;