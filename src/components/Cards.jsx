

function Cards(){
    const stats=[
        {
            title:"Total Chats",
            value:"245",
            bg:"bg-blue-100"
        },
        {
            title:"Open Tickets",
            value:"12",
            bg:"bg-green-100"
        },
        {
            title:"Resolved",
            value:"233",
            bg:"bg-purple-100"
        }
    ]
    return(
        <>
        <div className="w-full text-center my-8">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-green-500">
          BeyondChats
        </h1>
      </div>
        <div className="flex flex-wrap gap-4 my-6 ">
         {stats.map((items,index)=>(
            <div 
              key={index}
              className={`${items.bg} p-6 rounded-xl transition-transform hover:scale-[1.02] hover:shadow-lg shadow-md w-full md:w-[32%] sm:w-[48%] cursor-pointer ${items.bg} text-gray-900 flex flex-col justify-between`}
            >
            <h3 className="text-lg font-semibold mb-2">{items.title}</h3>
            <p className="text-2xl font-bold">{items.value}</p>
            </div>
         ))}
        </div>
        </>
    )
}
export default Cards;
