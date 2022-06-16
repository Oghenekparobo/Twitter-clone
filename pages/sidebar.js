import { BsTwitter } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="sidebar fixed bg-black text-white text-xl h-screen p-4  hidden md:block">
      <div className="flex flex-col  space-y-28 pl-24">
        {/* disabled links */}
        <div className="sidebar-links_disabled">
          <div className="logo pt-2 pb-4">
            <BsTwitter />
          </div>
          <div className="space-y-6">
            <div className="home flex space-x-6">
              <div className="sidebar-link_logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="white"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>

              <div className="sidebarlink">
                <a href="/">Home</a>
                <div className="w-2 h-2 absolute top-14 left-28 bg-blue-500 rounded-full"></div>
              </div>
            </div>

            <div className="Explore flex space-x-6">
              <div className="sidebar-link_logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>

              <div className="sidebarlink">
                <a href="#" disabled>
                  Explore
                </a>
              </div>
            </div>

            <div className="notifications flex space-x-6">
              <div className="sidebar-link_logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
              </div>

              <div className="sidebarlink">
                <a href="#" disabled>
                  Notification
                </a>
              </div>
            </div>

            <div className="messages flex space-x-6">
              <div className="sidebar-link_logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>

              <div className="sidebarlink">
                <a href="#" disabled>
                  Messages
                </a>
              </div>
            </div>

            <div className="bookmarks flex space-x-6">
              <div className="sidebar-link_logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
              </div>

              <div className="sidebarlink">
                <a href="#" disabled>
                  Bookmarks
                </a>
              </div>
            </div>

            <div className="lists flex space-x-6">
              <div className="sidebar-link_logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path
                    fill-rule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>

              <div className="sidebarlink">
                <a href="#" disabled>
                  Lists
                </a>
              </div>
            </div>

            <div className="profile flex space-x-6">
              <div className="sidebar-link_logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>

              <div className="sidebarlink">
                <a href="#" disabled>
                  Profile
                </a>
              </div>
            </div>

            <div className="more flex space-x-6">
              <div className="sidebar-link_logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>

              <div className="sidebarlink">
                <a href="#" disabled>
                  More
                </a>
              </div>
            </div>

            <div className="sidebar-btn">
              <a
                href=""
                className="px-16 py-2 bg-blue-500 rounded-full shadow text-sm"
              >
                Tweet
              </a>
            </div>
          </div>
        </div>

        {/* user logged in */}
        <div className="sidebar-user text-sm flex space-x-6">
          <div className="rounded-full">
            <img src="" alt="img" className="rounded-full" />
          </div>
          <div className="">
            <h4>name</h4>
            <p>email</p>
          </div>
          <div className="text-white">...</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
