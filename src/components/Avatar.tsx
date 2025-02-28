const Avatar = ({ name, size = 12 }: { name: string; size?: number }) => {
  return (
    <div
      className={`relative inline-flex items-center p-2 aspect-square justify-center w-${size} h-${size} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}
    >
      <span className=" font-medium text-gray-600 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
};

export default Avatar;
