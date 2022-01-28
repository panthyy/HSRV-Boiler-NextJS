import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className=" h-24 flex gap-4  bg-[whitesmoke] justify-around p-2 px-4">
      <div className="flex-1 About Me">
          <h1>Warning</h1>
          <h3>This is a "Portfolio" project</h3>
      </div>

      <div className=" flex-1 Socials flex gap-8 items-center text-2xl  justify-end mr-20">
        <BsGithub onClick={() => open("https://github.com/Panthyy")}></BsGithub>
        <BsLinkedin ></BsLinkedin>
        <BsTwitter></BsTwitter>
      </div>
    </footer>
  );
};

export default Footer;
