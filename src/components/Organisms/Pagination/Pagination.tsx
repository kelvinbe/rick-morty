import { useState, useEffect } from 'react';
import Link from 'next/link';


interface IPagination {
    setFilteredData: (data: []) => void,
    resource: string
}

const Pagination = (props: IPagination) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

  const  {setFilteredData, resource} = props

    const fetchData = async (page: number) => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/${resource}?page=${page}`);
            const data = await response.json();
            console.log('data', data)
            setTotalPages(data.info.pages);
            setFilteredData(data.results)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData(currentPage);
    }, [currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="flex justify-center items-center mt-8">
            <button
                className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-l"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
            >
                Previous
            </button>
            <span className="mx-4">{currentPage} / {totalPages}</span>
            <button
                className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-r"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
