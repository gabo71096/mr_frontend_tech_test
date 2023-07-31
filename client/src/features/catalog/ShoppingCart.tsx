import { Product } from "../../app/models/product";

interface Props {
  items: Product[];
}

export default function ShoppingCart({ items }: Props) {
  return (
    <>
      {items.length ? (
        items.map((item) => (
          <div key={item.sizeOptions[0].id} className="gap-3 grid grid-cols-12 mb-3 w-48 lg:w-80">
            <div className="col-span-4">
              <img src={item.imageURL} alt={item.title} />
            </div>
            <div className="col-span-8 text-start">
              <p className="mb-3">{item.title}</p>
              <p className="mb-3">
                <span className="font-bold">${item.price.toFixed(2)}</span>
              </p>
              <p>Size: {item.sizeOptions[0].label}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="whitespace-nowrap">You haven't added any items yet!</p>
      )}
    </>
  );
}
