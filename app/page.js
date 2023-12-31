import Image from "next/image";
import { getItems } from "./libs/getItems";
import Link from "next/link";

export default async function Home() {
  const blogs = await getItems();

  return (
    <div>
      <section className="bg-slate-200 my-2 p-2 rounded">
        <h1 className="text-2xl text-green-800 font-bold text-center my-4">
          Well come My Blog website
        </h1>
        <p className="text-justify leading-6">
          Ullamco est deserunt exercitation nostrud voluptate sint aute in
          laboris sunt elit ipsum. Non tempor minim nulla nostrud do incididunt
          duis Lorem nulla sint ex sit ex laborum. Nostrud id eu Lorem proident
          nostrud ut nulla ad adipisicing. Ea non non exercitation ipsum enim
          adipisicing. Cillum labore amet labore sit laborum incididunt in
          veniam aute. Magna dolor qui qui do velit amet sint eiusmod.
        </p>
      </section>
      <section className="bg-slate-200 my-3 p-2 rounded">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {blogs.map((item) => {
            return (
              <div
                className=" bg-white m-1 p-2 rounded hover:bg-gray-100 duration-300"
                key={item.id}
              >
                <Link href={`/blogs/${item.id}`}>
                  <p className="text-3xl font-bold ">
                    <span>
                      {item.id} -{">"}
                    </span>
                    {item.name}
                  </p>
                  <p>{item.short}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
      <section className="bg-slate-200 my-4 p-2 rounded">
        <h1 className="text-2xl text-green-800 font-bold text-center my-4">
          Our client's review
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div>
            <h2 className="text-blue-600 font-bold">Mr. Jon -{">"}</h2>
            <p className="text-justify leading-6 px-4">
              Ad eiusmod ut non ullamco nisi occaecat occaecat. Duis irure
              officia excepteur deserunt deserunt veniam pariatur cupidatat id
              incididunt. Nostrud ut magna duis sunt occaecat.
            </p>
          </div>
          <div>
            <h2 className="text-blue-600 font-bold">Mr. Jon -{">"}</h2>
            <p className="text-justify leading-6 px-4">
              Ad eiusmod ut non ullamco nisi occaecat occaecat. Duis irure
              officia excepteur deserunt deserunt veniam pariatur cupidatat id
              incididunt. Nostrud ut magna duis sunt occaecat.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
