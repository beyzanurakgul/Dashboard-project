import React from 'react';

interface GenericTableProps<T> {
  data: T[];
  columns: { header: string; accessor: keyof T }[];
}

const GenericTable = <T,>({ data, columns }: GenericTableProps<T>) => {
  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'In Progress':
        return 'bg-green-500 animate-pulse';
      case 'Upcoming':
        return 'bg-yellow-400';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="overflow-x-auto shadow-lg xs:h-[30vh] smh-h-[30vh] md:h[30vh] lg:h-[30vh] xl:h-[42vh] 2xl:h-[40vh]  rounded-lg border border-gray-200">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead className="bg-indigo-500  font-bold text-white">
          <tr>
            {columns.map((column) => (
              <th key={column.header} className=" border-b border-gray-200  font-semibold">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr key={rowIndex} className="odd:bg-white even:bg-gray-50 hover:bg-blue-100 transition-colors">
                {columns.map((column) => (
                  <td key={column.accessor as string} className="border-b font-semibold text-gray-600 border-gray-200">
                    {column.accessor === 'status' ? (
                      <div className="flex items-center">
                        <span className={`h-3 w-3 rounded-full mr-2 ${getStatusStyle(String(row[column.accessor]))}`} />
                        {String(row[column.accessor])}
                      </div>
                    ) : (
                      String(row[column.accessor])
                    )}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="text-center py-4 text-gray-500">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default GenericTable;
