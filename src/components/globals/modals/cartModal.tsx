"use client";

import { useCartContext } from "@/context/cartContext";

export default function CartModal(props: {
  isOpen: boolean;
  handleClose: () => void;
}) {
  const { isOpen, handleClose } = props;

  const { cart, removeFromCart, getTotalPrice } = useCartContext();

  const handleDeleteItem = (id: number) => {
    removeFromCart(id);
  };

  return (
    isOpen && (
      <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
        <div className="m-auto p-8 text-gray-900 bg-white border border-gray-300 focus:outline-none font-medium rounded-lg text-lg dark:bg-gray-800 dark:text-white dark:border-gray-600">
          <div className="flex flex-col items-center">
            <h3>Your Cart</h3>
            {cart.length > 0 ? (
              <>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-4">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Name
                        </th>
                        <th
                          scope="col"
                          className="hidden lg:table-cell px-6 py-3"
                        >
                          Category
                        </th>
                        <th
                          scope="col"
                          className="hidden lg:table-cell px-6 py-3"
                        >
                          Release Date
                        </th>
                        <th
                          scope="col"
                          className="hidden md:table-cell px-6 py-3"
                        >
                          Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Quantity
                        </th>
                        <th scope="col" className="px-6 py-3">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item) => {
                        return (
                          <tr
                            key={item.masterpiece.id}
                            className="bg-white border-t dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                          >
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              {item.masterpiece.name}
                            </th>
                            <td className="hidden lg:table-cell px-6 py-4">
                              {item.masterpiece.category}
                            </td>
                            <td className="hidden lg:table-cell px-6 py-4">
                              {item.masterpiece.releaseDate.toDateString()}
                            </td>
                            <td className="hidden md:table-cell px-6 py-4">
                              ${item.masterpiece.price}
                            </td>
                            <td className="px-6 py-4">{item.quantity}</td>
                            <td className="px-6 py-4 text-right">
                              <a
                                href="#"
                                className="font-medium text-red-600 dark:text-red-500 hover:underline"
                                onClick={() =>
                                  handleDeleteItem(item.masterpiece.id)
                                }
                              >
                                Remove
                              </a>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <hr className="h-px w-1/3 my-2 bg-gray-200 border-0 dark:bg-gray-700" />
                <div className="flex flex-row w-full justify-between px-4">
                  <p>Total</p>
                  <p>${getTotalPrice()}</p>
                </div>
              </>
            ) : (
              <h5 className="my-5 text-base">
                Your cart is empty, go fill it !
              </h5>
            )}
            <div className="p-6 pt-0 flex flex-row justify-evenly">
              <a
                className="cursor-pointer text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                onClick={handleClose}
              >
                Back to purchases
              </a>
              <a className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">
                Confirm
              </a>
            </div>
          </div>
        </div>
      </dialog>
    )
  );
}
