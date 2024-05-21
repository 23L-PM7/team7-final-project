const DropdownMenu = ({ items }: { items: string[] }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-2 absolute top-full left-0 w-48">
      {items.map((item, index) => (
        <div key={index} className="p-2 hover:bg-gray-100">
          {item}
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;
