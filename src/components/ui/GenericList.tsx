import React from 'react';
import GenericCard from './GenericCard';

interface GenericListProps<T> {
  items?: T[]; // items prop'unun ? ile işaretlenmesi, undefined olabileceğini belirtir
  title: string;
  renderItem: (item: T) => React.ReactNode;
}

const GenericList = <T,>({ items = [], title, renderItem }: GenericListProps<T>) => { // items prop'unun varsayılan değerinin atanması
  return (
    <div className="bg-white w-full sm:w-[80vw] md:w-[87vw] lg:w-[75vw] xl:w-[82vw] mt-12 rounded-xl p-8">
      <div className='flex flex-col md:flex-row items-center justify-between mb-6'>
        <h3 className="font-extrabold text-gray-900 text-2xl mb-4 md:mb-0 md:mr-6">{title}</h3>
        <div className="flex flex-col md:flex-row">
          <button className="p-3 text-xs border border-black uppercase rounded-full rounded-br-none outline-none shadow-lg hover:shadow-xl hover:rounded-full duration-200 mb-2 md:mb-0 md:mr-2">Create New Team</button>
          <button className="p-3 text-xs border border-black uppercase rounded-full rounded-br-none outline-none shadow-lg hover:shadow-xl hover:rounded-full duration-200">Add New Employee to a Team</button>
        </div>
      </div>

      {items.length ? (
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item, index) => (
            <GenericCard key={index}>
              {renderItem(item)}
            </GenericCard>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">No {title.toLowerCase()}</p>
      )}
    </div>
  );
};

export default GenericList;
