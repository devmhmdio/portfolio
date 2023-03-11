import Link from "next/link";

const FullscreenMenu = ({ fullMenuHandler }) => {
  return (
    <ul className="fullscreen-menulist pl-0 mb-0 flex h-screen items-center justify-between">
      <li className="section group flex basis-1/5 items-center justify-center self-stretch border-l border-white border-opacity-10 text-center transition-all duration-500 first:border-l-0 hover:basis-2/5">
        <Link href="/homepage1">
          <span
            className="flex w-full items-center justify-center self-stretch p-5 text-5xl xl:text-6xl font-bold uppercase text-heading group-hover:text-primary"
            onClick={(e) => fullMenuHandler(false)}
          >
            <span className="fullmenuitem rotate-180">Home</span>
          </span>
        </Link>
      </li>
      <li className="section group flex basis-1/5 items-center justify-center self-stretch border-l border-white border-opacity-10 text-center transition-all duration-500 first:border-l-0 hover:basis-2/5">
        <Link href="/about">
          <span
            className="flex w-full items-center justify-center self-stretch p-5 text-5xl xl:text-6xl font-bold uppercase text-heading group-hover:text-primary"
            onClick={(e) => fullMenuHandler(false)}
          >
            <span className="fullmenuitem rotate-180">About</span>
          </span>
        </Link>
      </li>
      <li className="section group flex basis-1/5 items-center justify-center self-stretch border-l border-white border-opacity-10 text-center transition-all duration-500 first:border-l-0 hover:basis-2/5">
        <Link href="/resume">
          <span
            className="flex w-full items-center justify-center self-stretch p-5 text-5xl xl:text-6xl font-bold uppercase text-heading group-hover:text-primary"
            onClick={(e) => fullMenuHandler(false)}
          >
            <span className="fullmenuitem rotate-180">Resume</span>
          </span>
        </Link>
      </li>
      <li className="section group flex basis-1/5 items-center justify-center self-stretch border-l border-white border-opacity-10 text-center transition-all duration-500 first:border-l-0 hover:basis-2/5">
        <Link href="/works">
          <span
            className="flex w-full items-center justify-center self-stretch p-5 text-5xl xl:text-6xl font-bold uppercase text-heading group-hover:text-primary"
            onClick={(e) => fullMenuHandler(false)}
          >
            <span className="fullmenuitem rotate-180">Works</span>
          </span>
        </Link>
      </li>
      <li className="section group flex basis-1/5 items-center justify-center self-stretch border-l border-white border-opacity-10 text-center transition-all duration-500 first:border-l-0 hover:basis-2/5">
        <Link href="/posts/1">
          <span
            className="flex w-full items-center justify-center self-stretch p-5 text-5xl xl:text-6xl font-bold uppercase text-heading group-hover:text-primary"
            onClick={(e) => fullMenuHandler(false)}
          >
            <span className="fullmenuitem rotate-180">Blogs</span>
          </span>
        </Link>
      </li>
      <li className="section group flex basis-1/5 items-center justify-center self-stretch border-l border-white border-opacity-10 text-center transition-all duration-500 first:border-l-0 hover:basis-2/5">
        <Link href="/contact">
          <span
            className="flex w-full items-center justify-center self-stretch p-5 text-5xl xl:text-6xl font-bold uppercase text-heading group-hover:text-primary"
            onClick={(e) => fullMenuHandler(false)}
          >
            <span className="fullmenuitem rotate-180">Contact</span>
          </span>
        </Link>
      </li>
    </ul>
  );
};

export default FullscreenMenu;
