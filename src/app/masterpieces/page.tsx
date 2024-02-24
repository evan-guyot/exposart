import { getMasterpieces } from "@/api/masterpieces/getMasterpiece";
import CartAddButton from "@/components/carts/buttonAddCart";

export default async function Page() {
  const masterpieces = await getMasterpieces();
  return (
    <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 m-4">
      {masterpieces.map((m) => {
        return (
          <div
            key={m.id}
            style={{
              height: m.height,
              backgroundImage: `url(${m.url})`,
            }}
            className="cs-masonry-image cs-mansory-image-hover mb-6 hover:shadow-2xl rounded-xl"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                padding: "1rem",
                breakInside: "avoid-column",
              }}
              className="rounded-xl hidden"
            >
              <h3
                style={{
                  textAlign: "center",
                  textShadow: "1px 1px 20px black",
                }}
                className="text-white stroke-gray-100	text-3xl font-bold"
              >
                {m.name}
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  width: "100%",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <a
                  href={`/masterpieces/${m.id}`}
                  style={{ bottom: 10, width: "fit-content" }}
                  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  See more
                </a>
                <CartAddButton
                  masterpiece={m}
                  style={{ bottom: 10, width: "fit-content" }}
                  label="Add to cart"
                  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 cursor-pointer"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
