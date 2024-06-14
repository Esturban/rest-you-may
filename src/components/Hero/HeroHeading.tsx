import { HeroCTA } from "./HeroCTA";

/* container to hold text and button for hero */
export function HeroHeading(): JSX.Element {
  return (
    <div className="flex flex-col justify-center content-center items-center w-full px-4 py-8 sm:px-6 md:w-1/2 md:items-start md:px-0">
      <p className="text-2xl sm:text-3xl mt-2 sm:mt-0 justify-center">Resumes that make you shine ✨</p>
      <h1 className="py-3 text-5xl sm:text-7xl md:text-7xl font-bold">Resumate</h1>
      <p className="text-xl sm:text-2xl italic">Get the jobs you deserve</p>
      <HeroCTA />
    </div>
  );
}