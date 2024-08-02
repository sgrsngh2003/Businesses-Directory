

const ImageUpload = () => {


    return (

        <div className="flex items-center justify-between w-full pt-2 pb-2">
            <svg
                className="w-6 h-6 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
            >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
            </svg>
            <span>
                <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Select image (max: 2MB)</span>
                </p>
                <p className="mb-2 text-sm text-gray-500">or drag and drop</p>
            </span>
        </div>

    )
};

export default ImageUpload;
