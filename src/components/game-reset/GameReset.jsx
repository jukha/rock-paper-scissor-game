function GameReset() {
  return (
    <div className="mt-16 max-w-[400px] mx-auto flex justify-center items-center gap-20 flex-wrap">
      <a className="relative z-10 flex items-center before:content-[''] before:inline-block before:w-32 before:h-4 before:bg-bars before:absolute before:-z-10 before:left-[136px] after:content-[''] after:inline-block after:w-36 after:h-4 after:bg-bars after:absolute after:-z-10 after:left-[72px] after:rotate-[55deg] after:origin-top-left">
        <button className=" bg-paperGradient rounded-full h-36 w-36 flex justify-center items-center ">
          <span className="bg-white p-6 rounded-full h-28 w-28 flex justify-center items-center">
            <img src="/assets/icon-paper.svg" alt="paper icon" />
          </span>
        </button>
      </a>
      <a className="relative z-10 flex items-center after:content-[''] after:inline-block after:w-36 after:h-4 after:bg-bars after:absolute after:-z-10 after:right-[72px] after:-rotate-[55deg] after:origin-top-right">
        <button className="bg-scissorsGradient rounded-full h-36 w-36 flex justify-center items-center ">
          <span className="bg-white p-6 rounded-full h-28 w-28 flex justify-center items-center">
            <img src="/assets/icon-scissors.svg" alt="scissors icon" />
          </span>
        </button>
      </a>
      <a className="relative z-10">
        <button className="bg-rockGradient rounded-full h-36 w-36 flex justify-center items-center relative top-[-60px]">
          <span className="bg-white p-6 rounded-full h-28 w-28 flex justify-center items-center">
            <img src="/assets/icon-rock.svg" alt="rock icon" />
          </span>
        </button>
      </a>
    </div>
  );
}

export default GameReset;
