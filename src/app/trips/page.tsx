export default function Trips() {
  return (
    <div className="container mx-auto pt-32">
      <h1 className="font-semibold text-3xl">Trips </h1>
      <div className="divider m-0 pt-5"></div>

      <div>
        <h1 className="text-xl font-medium my-3">No trips booked...yet!</h1>
        <p className="font-light ">
          Time to dust off your bags and start planning your next adventure.
        </p>
        <button className="p-3 border hover:bg-slate-50 my-5 w-40 h-12 font-medium border-black rounded">
          <a href="/">Start searching</a>
        </button>

        <div className="divider m-0 pt-5"></div>

        <div className="flex gap-2">
          <p className="font-ligth">Can’t find your reservation here?</p>
          <a className="font-semibold align-middle" href="/">
            Visit the Help Center
          </a>
        </div>
      </div>
    </div>
  );
}
