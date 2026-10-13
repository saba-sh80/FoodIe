export default function ShopCard({ id, src, alt, title }) {
  return (
    <div
      className="w-100 border rounded-md border-gray-300"
      id={id}
    >
      <div className="card">
        <img
          src={src}
          className="object-cover w-full h-full"
          alt={alt}
        />
      </div>
      <div className="h-24 w-full flex flex-col justify-center gap-y-1 items-center">
        <h5 className="text-xl">{title}</h5>
        <a
          href="#"
          className="ms-3 text-red-700"
          type="button"
        >
          Order Now
        </a>
      </div>
    </div>
  );
}
