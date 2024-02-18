import { getMasterpiece } from "@/api/masterpieces/getMasterpiece";
import CartAddButton from "@/components/carts/buttonAddCart";

export default async function Page({ params }: { params: { id: string } }) {
  const masterpiece = await getMasterpiece(params.id);

  return (
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 m-auto">
      <div
        className="cs-masonry-image relative h-96 mt-6 mx-4 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40"
        style={{
          backgroundImage: `url(${masterpiece.url})`,
        }}
      ></div>
      <div className="p-6">
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {masterpiece.name}
          <span className="text-sm font-sans font-medium leading-normal text-blue-gray-400 float-right">
            {masterpiece.price}e
          </span>
        </h5>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          {masterpiece.description}
        </p>
      </div>
      <div className="p-6 pt-0 flex flex-row justify-evenly">
        <CartAddButton
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          label="Add to Cart"
          masterpiece={masterpiece}
        />
        <button
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          type="button"
        >
          Copy Link
        </button>
      </div>
    </div>
  );
}
