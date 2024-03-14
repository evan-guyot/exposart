import { getMasterpiece } from "@/api/masterpieces/getMasterpiece";
import CartAddButton from "@/components/carts/buttonAddCart";

export default async function Page({ params }: { params: { id: string } }) {
  const masterpiece = await getMasterpiece(params.id);

  return (
    <div className="m-auto flex flex-col text-black bg-gray-200 dark:text-white dark:bg-gray-800 shadow-md bg-clip-border rounded-xl w-96 ">
      <div
        className="cs-masonry-image relative h-96 mt-6 mx-4 overflow-hidden shadow-lg bg-clip-border rounded-xl shadow-blue-gray-500/40"
        style={{
          backgroundImage: `url(${masterpiece.url})`,
        }}
      ></div>
      <div className="p-6">
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal">
          {masterpiece.name}
          <span className="text-sm font-sans font-medium leading-normal float-right">
            {masterpiece.price}e
          </span>
        </h5>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          {masterpiece.description}
        </p>
      </div>
      <div className="p-6 pt-0 flex flex-row justify-evenly">
        <CartAddButton
          className="cursor-pointer text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          label="Add to Cart"
          masterpiece={masterpiece}
        />
        <a className="cursor-pointer text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
          Copy Link
        </a>
      </div>
    </div>
  );
}
