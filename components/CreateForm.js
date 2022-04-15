export default function CreateForm(props) {
  return (
    <form
      onSubmit={props.createHandler}
      className="my-6 mx-auto w-3/4 flex-col items-center bg-emerald-300 p-2 font-semibold"
    >
      <div className="p-2 text-center">Create Cookie Stand</div>
      <div className="flex p-2">
        <label
          htmlFor="location"
          className="block pr-2 text-sm font-medium text-gray-700"
        >
          Location
        </label>
        <input
          {...props.bindLocation}
          type="text"
          name="location"
          className="block w-full rounded-sm border-gray-300 pl-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="flex justify-between p-2">
        <div className="w-1/4 flex-col p-2">
          <label
            htmlFor="minCustomersPerHour"
            className="block text-center text-xs font-medium text-gray-700"
          >
            Minimum Customers per Hour
          </label>
          <input
            {...props.bindMinCustomersPerHour}
            type="text"
            name="minCustomersPerHour"
            className="block w-full rounded-sm border-gray-300 pl-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className="w-1/4 flex-col p-2">
          <label
            htmlFor="maxCustomersPerHour"
            className="block text-center text-xs font-medium text-gray-700"
          >
            Maximum Customers per Hour
          </label>
          <input
            {...props.bindMaxCustomersPerHour}
            type="text"
            name="maxCustomersPerHour"
            className="block w-full rounded-sm border-gray-300 pl-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className="w-1/4 flex-col p-2">
          <label
            htmlFor="aveCookiesPerSale"
            className="block text-center text-xs font-medium text-gray-700"
          >
            Average Cookies per Sale
          </label>
          <input
            {...props.bindAveCookiesPerSale}
            type="text"
            name="aveCookiesPerSale"
            className="block w-full rounded-sm border-gray-300 pl-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <button className="w-1/4 bg-green-500 p-2 font-bold hover:cursor-pointer hover:bg-green-700">
          Create
        </button>
      </div>
    </form>
  )
}
