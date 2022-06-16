const Search = () => {
  return (
    <div className="text-white search-bar fixed w-full  space-y-4 p-2">
      <div className="search-section ">
        <div className="">
          <div className="search-btn flex justify relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 search-logo top-2 left-2 absolute "
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              type="search"
              placeholder="search Twitter"
              className="bg-lightBlack outline-none w-full py-2 rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="trend-table px-6 bg-lightBlack rounded-xl space-y-5">
        <div className="trend-header">
          <h2>Trends for you</h2>
        </div>

        <div className="trends flex justify-between">

          <div className="trends-text flex flex-col leading-3">
            <span className="text-sm text-gray-400">Sports.Trending</span>
            <span>#SuperSoarEagles</span>
            <span className="text-sm text-gray-400">11.2k tweets</span>
          </div>
          <div className="text-gray-400">...</div>
        </div>

         <div className="trends flex justify-between">

          <div className="trends-text flex flex-col leading-3">
            <span className="text-sm text-gray-400">Immorality.Trending</span>
            <span>KELLY</span>
            <span className="text-sm text-gray-400">1m tweets</span>
          </div>
          <div className="text-gray-400">...</div>
        </div>

        <div className="trends flex justify-between">

<div className="trends-text flex flex-col leading-3">
  <span className="text-sm text-gray-400">Politics.Trending</span>
  <span>OBidient</span>
  <span className="text-sm text-gray-400">11.2k tweets</span>
</div>
<div className="text-gray-400">...</div>
</div>

<div className="trends flex justify-between">

<div className="trends-text flex flex-col leading-3">
  <span className="text-sm text-gray-400">Politics.Trending</span>
  <span>PVC</span>
  <span className="text-sm text-gray-400">110k tweets</span>
</div>
<div className="text-gray-400">...</div>
</div>


<div className="trends flex justify-between">

<div className="trends-text flex flex-col leading-3">
  <span className="text-sm text-gray-400">Women.Trending</span>
  <span>Arsenal</span>
  <span className="text-sm text-gray-400">250k tweets</span>
</div>
<div className="text-gray-400">...</div>
</div>

<div className="trends flex justify-between">

<div className="trends-text flex flex-col leading-3">
  <span className="text-sm text-gray-400">Men.Trending</span>
  <span>SHOLA</span>
  <span className="text-sm text-gray-400">50k tweets</span>
</div>
<div className="text-gray-400">...</div>
</div>


<div className="trends flex justify-between">

<div className="trends-text flex flex-col leading-3">
  <span className="text-sm text-gray-400">Trending in Oshodi</span>
  <span>Tunde</span>
  <span className="text-sm text-gray-400">10k tweets</span>
</div>
<div className="text-gray-400">...</div>
</div>

<div className="trends flex justify-between">

<div className="trends-text flex flex-col leading-3">
  <span className="text-sm text-gray-400">Trending in Lekki toll gate</span>
  <span>BuBu has been a bad boy</span>
  <span className="text-sm text-gray-400">2b tweets</span>
</div>
<div className="text-gray-400">...</div>
</div>

<div className="trends flex justify-between">

<div className="trends-text flex flex-col leading-3">
  <span className="text-sm text-gray-400">Relationship.Trending</span>
  <span>#ITISWELL</span>
  <span className="text-sm text-gray-400">2b tweets</span>
</div>
<div className="text-gray-400">...</div>
</div>

<div className="trends flex justify-between">

<div className="trends-text flex flex-col leading-3">
  <span className="text-sm text-gray-400">Trending in the world</span>
  <span>Peter Obi for president</span>
  <span className="text-sm text-gray-400">2b tweets</span>
</div>
<div className="text-gray-400">...</div>
</div>
      </div>
    </div>
  );
};

export default Search;
