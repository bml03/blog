const Highlight = ({ highlights }) => {
  return (
    <div className=" rounded-xl flex flex-wrap w-[1440px]">
      <div className=" carousel w-full">
        {highlights.map((highlight, key) => (
          <div id={key} className=" carousel-item flex-col items-end w-full">
            <div className="w-[1220px] h-[600px] relative">
              <img
                src={highlight.cover_image}
                className=" w-[1220px] h[600px] object-cover absolute z-10"
              />
              <div className="w-[598px] h-[252px] absolute z-20 top-[335px]">
                <div>
                  <button className=" mb-4 px-2.5 py-1 flex justify-center"> Technology
                    </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Highlight;
