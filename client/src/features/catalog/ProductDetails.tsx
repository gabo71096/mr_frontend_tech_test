import { useEffect, useState } from "react";

const url = "https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product";

interface ProductData {
  id: number;
  title: string;
  description: string;
  price: number;
  imageURL: string;
  sizeOptions: [{ id: number; label: string }];
}

export default function ProductDetails() {
  const [productData, setProductData] = useState<ProductData>({} as ProductData);
  const [selectedSize, setSelectedSize] = useState("");

  const getProductData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    getProductData().then((res) => setProductData(res));
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-3 lg:px-24 xl:px-36 2xl:px-48">
        <div className="w-96 mx-auto">
          <img className="max-w-full h-auto" src={productData.imageURL} alt="shirt.jpg" />
        </div>
        <div>
          <p className="black-color dark:text-white mb-5 text-2xl">{productData.title}</p>
          <p className="border-y font-bold mb-5 py-1">${productData.price?.toFixed(2)}</p>
          <p className="grey-color mb-5">{productData.description}</p>
          <p className="grey-color mb-3">
            Size<span className="red-color">*</span> <span className="font-bold">{selectedSize}</span>
          </p>
          <div className="gap-3 grid grid-cols-6 mb-3 md:grid-cols-9">
            {productData.sizeOptions?.map((size) => (
              <button
                className="bg-white dark:bg-slate-900 btn rounded-none"
                key={size.id}
                onClick={() => setSelectedSize(size.label)}
              >
                {size.label}
              </button>
            ))}
          </div>
          <button
            className="bg-white dark:bg-slate-900 btn rounded-none border-2 border-black"
            disabled={!selectedSize.length}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </>
  );
}
