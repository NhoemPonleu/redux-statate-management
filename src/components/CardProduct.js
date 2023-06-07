'use client'
import { addToCart } from "@/redux/features/cart/cartSlice";
import Link from "next/link";
import { useDispatch } from "react-redux";

export default function CardProduct({title, price, images, description, id}) {
    const dispatch = useDispatch()
    // handle add to cart
    const handleAddToCart = () => {
        const product = {
            id,
            image: images[0],
            name: title,
            price,
            quantity: 1,
            description
        }
        dispatch(addToCart(product))
    }
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow White:bg-gray-800 White:border-gray-700">
      <Link href="#">
        <img
          className="p-8 rounded-t-lg"
          src={images?images[0]:"https://dummyimage.com/720x400"}
          alt="product image"
        />
      </Link>
      <div className="px-5 pb-5">
        <Link href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
            {title?title:"Untitled"}
          </h5>
        </Link>
       
        <div className="flex items-center justify-between">
          <span className="text-3xl text-red-500 font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          <button
          onClick={handleAddToCart}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
