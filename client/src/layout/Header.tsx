import { useSelector } from "react-redux";
import "./layout.css";
import { RootState } from "../app/context/store";
import ShoppingCart from "../features/catalog/ShoppingCart";

export default function Header() {
  const { items } = useSelector((state: RootState) => state.shoppingCart);

  return (
    <header className="header-bg dark:bg-slate-900 mb-10 my-3 lg:mx-5 text-right px-3 lg:px-48 py-1">
      <div className="dropdown dropdown-end">
        <label role="button" tabIndex={0} className="duration-200 grey-color hover:text-slate-700 transition">
          My cart ({items.length})
        </label>
        <div tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 w-auto">
          <ShoppingCart items={items} />
        </div>
      </div>
    </header>
  );
}
