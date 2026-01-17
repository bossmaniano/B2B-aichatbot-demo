import { AnimatedText } from "@/components/animated-text";
import { FloatingNav } from "@/components/floating-bar";
import ScrambleHover from "@/components/scramble-hover";

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

export default function Page() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center relative overflow-hidden">
      <FloatingNav navItems={navItems} />
      
      <div className="absolute -top-[118px] inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4.5rem_2rem] -z-10 [transform:perspective(1000px)_rotateX(-63deg)] h-[80%] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none -z-10" />

      <h1 className="font-departure text-[40px] md:text-[84px] relative z-10 text-center h-[120px] md:h-auto leading-tight">
        <ScrambleHover duration={800} speed={50}>
          <AnimatedText text="OSMA AI COMING SOON" />
        </ScrambleHover>
      </h1>

      <p className="relative z-10 text-center max-w-[80%] mt-8 text-lg md:text-xl text-neutral-600 dark:text-neutral-400">
        We're working on something amazing. Stay tuned!
      </p>

      <div className="relative z-10 mt-8 flex gap-2 w-full max-w-md px-4">
        <input
          type="email"
          placeholder="Join our waitlist"
          className="flex-1 px-4 py-3 bg-white dark:bg-black border border-neutral-300 dark:border-neutral-700 text-black dark:text-white placeholder:text-neutral-500 focus:outline-none focus:border-neutral-500 dark:focus:border-neutral-400"
        />
        <button className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
          Send
        </button>
      </div>

      <div className="absolute -bottom-[280px] inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4.5rem_2rem] -z-10 [transform:perspective(560px)_rotateX(63deg)] pointer-events-none" />
      <div className="absolute w-full bottom-[100px] h-1/2  bg-gradient-to-b from-background to-transparent pointer-events-none -z-10" />
    </div>
  );
}
