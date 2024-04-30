export default function Reservation() {
  return (
    <div className="mx-auto w-2/4 border-2 rounded h-screen justify-center">
      <div className="flex justify-start items-center">Confirm and pay</div>
      <div className="flex mx-auto w-2/4 border-2 rounded h-screen justify-center">
<div></div>
        <div className="w-2/5 flex flex-col border-2 rounded h-52 justify-center p-5">
          <div className="flex">
            <div>
              <img
                className="w-48 h-20"
                src="/images/zostel.avif"
                alt="zostel"
              />
            </div>
            <div>
              <h3>Zostel Shangarh | Standard Private Room</h3>
              <h3>Private Room</h3>
              <h3>Room in hostel</h3>
            </div>
          </div>
          <div>
            <h3>Price details</h3>
            <div className="flex justify-between">
              <h3>$23.96 x 5 nights</h3>
              <h3>$119.80</h3>
            </div>
            <div className="flex justify-between">
              <h3>Taxes</h3>
              <h3>$14.38</h3>
            </div>
          </div>
          <div className="flex justify-between">
            <h3>Total (USD)</h3>
            <h3>$134.18</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
