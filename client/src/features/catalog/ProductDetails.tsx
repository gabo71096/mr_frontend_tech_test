import { useEffect, useState } from "react";
import { Product, SizeOption } from "../../app/models/product";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addItem } from "./shoppingCartSlice";

const url = "https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product";

export default function ProductDetails() {
  const [product, setProduct] = useState<Product>({} as Product);
  const [selectedSize, setSelectedSize] = useState<SizeOption>({} as SizeOption);
  const dispatch = useDispatch();

  const getProductData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    getProductData().then((res) => setProduct(res));
  }, []);

  function handleAddToCart() {
    if (!selectedSize) return toast.error("You have to select a size first");

    dispatch(
      addItem({
        id: product.id,
        title: product.title,
        description: product.description,
        price: product.price,
        imageURL: product.imageURL,
        sizeOptions: [{ id: selectedSize.id, label: selectedSize.label }],
      }),
    );

    return toast.success(`${product.title} on size ${selectedSize.label} added to the cart!`);
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-3 lg:px-24 xl:px-36 2xl:px-48">
        <div className="w-auto lg:w-96 mx-auto">
          <img className="max-w-full h-auto" src={product.imageURL} alt="shirt.jpg" />
        </div>
        <div>
          <p className="black-color dark:text-white mb-5 text-2xl">{product.title}</p>
          <p className="border-y font-bold mb-5 py-1">${product.price?.toFixed(2)}</p>
          <p className="grey-color mb-5">{product.description}</p>
          <p className="grey-color mb-3">
            Size<span className="red-color">*</span> <span className="font-bold">{selectedSize.label}</span>
          </p>
          <div className="gap-3 grid grid-cols-6 mb-3 md:grid-cols-9">
            {product.sizeOptions?.map((size) => (
              <button
                className={`border border-black btn btn-ghost rounded-none ${
                  selectedSize.label === size.label && "btn-active"
                }`}
                key={size.id}
                value={size.id}
                onClick={() => setSelectedSize({ id: size.id, label: size.label })}
              >
                {size.label}
              </button>
            ))}
          </div>
          <button
            className="btn btn-ghost rounded-none border border-black"
            disabled={!selectedSize.id}
            onClick={handleAddToCart}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </>
  );
}
