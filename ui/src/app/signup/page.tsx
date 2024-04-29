export default function signUp() {
  return (
    <div className="flex flex-col w-40 h-40 justify-center items-center">
      <div className="flex">
        <button>X</button>
        <h1>Log in or sign up</h1>
      </div>
      <div>
        <h1>Welcome to Airbnb</h1>
      </div>
      <div>
        <div>
          <p>Country code</p>
          <p>Mongolia (976)</p>
        </div>
        <div className="dropdown dropdown-left">
          <div tabIndex={0} role="button" className="btn m-1">
            Click
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
