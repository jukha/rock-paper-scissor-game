function Score() {
  return (
    <div className="flex justify-between items-center  mx-auto p-4 rounded-md  border-2 border-solid border-headerOutline">
      <div>
        <h2 className="uppercase  text-white font-bold text-4xl leading-7">
          Rock
        </h2>
        <h2 className="uppercase  text-white font-bold text-4xl leading-7">
          Paper
        </h2>
        <h2 className="uppercase  text-white font-bold text-4xl leading-7">
          Scissors
        </h2>
      </div>
      <div className="bg-white px-10 py-4 rounded-md">
        <span className="uppercase text-score">Score</span>
        <h2 className="uppercase  text-dark font-bold text-5xl">12</h2>
      </div>
    </div>
  );
}

export default Score;
