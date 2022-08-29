const Castcard = ({ title, coverImage, character }) => {
  return (
    <div className="h-full w-[150px] min-w-[150px] ">
      <img
        src={`https://image.tmdb.org/t/p/original/${coverImage} `}
        alt=""
        loading="lazy"
        className="rounded-md h-[225px] w-[150px] object-cover"
      />
      <h3 className="font-bold ">{title}</h3>
      <p className="text-[rgba(0,0,0,0.6)]">{character}</p>
    </div>
  );
};

export default Castcard;
