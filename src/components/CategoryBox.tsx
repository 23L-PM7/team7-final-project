import Image from "next/image";

const CategoryBox = ({ img: image, label, selected }: any) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 pt-3 border-b-2 hover:text-neutral-800 transition ${
        selected? "text-neutral-800" : "text-neutral-500"
      }  ${selected? "border-neutral-800" : "border-transparent"}`}
    >
      <Image src={image} alt={label} className="w-7" />
      <h6 className="font-medium text-sm">{label}</h6>
    </div>
  );
};

export default CategoryBox;