

const SectionTitle = ({ title, description }) => {
  return (
    <div className="p-5 bg-white flex items-center justify-between border-b border-gray-200 mb-6">
      <div>
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-[#4A5565] text-sm">{description}</p>
      </div>
      <div className="flex gap-2 items-center">
        <div className="h-10 w-10 rounded-full overflow-hidden">
          <img
            src="/src/assets/images/login.png"
            alt=""
            className="object-cover rounded-full"
          />
        </div>
        <div>
          <h2 className="font-bold">Admin</h2>
          <p className="text-xs">Administrator</p>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
