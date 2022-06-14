import { BsTwitter } from "react-icons/bs";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Setup = () => {
  const { data: session, status } = useSession();
  const [name, setName] = useState("");
  const router = useRouter();

  if (!session || !session.user) {
     router.push("/");
  }

  if(session.user.name){
      router.push('/home')
  }

  return (
    <div className="">
      <div className="bg-black h-screen font-roboto flex flex-col justify-center items-center space-y-28">
        <div className="loading-logo text-3xl text-blue-500">
          <BsTwitter />
        </div>
        <div className="username-form text-white text-center">
          <form
            onSubmit={async (e) => {
              e.preventDefault();

              await fetch("/api/setup", {
                body: JSON.stringify({ name }),
                headers: {
                  "Content-Type": "application/json",
                },
                method: "POST",
              });
              session.user.name = name
              router.push('/home')
            }}
          >
            <input
              type="text"
              className="bg-transparent font-bold outline-none p-4"
              required
              placeholder="enter a username"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <button
              type="submit"
              className="text-white bg-blue-500 pt-1 px-4 rounded-full"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Setup;
