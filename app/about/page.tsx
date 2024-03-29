import { Metadata } from "next";
import Image from "next/image";
import { BsTwitter, BsGithub, BsSpotify } from "react-icons/bs";

function Home() {
  return (
    <div className="space-y-8">
      <div className="grid justify-items-center space-y-4">
        <h1 className="mt-8 text-4xl">Kaniya Simeji</h1>
        <Image
          src="/new_kanium.png"
          width={125}
          height={125}
          alt="kanium icon"
          className="object-down object-top rounded-md"
        ></Image>
        <p className="text-1xl font-bold">
          アイコンはとある絵師さんにかいていただきました。ありがとうございます!
        </p>
      </div>
      <div className="my-8 space-y-3">
        <h2 className="text-2xl">自己紹介</h2>
        <h3>名前: かにやしめじ / kanium</h3>
        <h3>ステータス: 学生</h3>
        <h3>生息地: 主に横浜</h3>
        <h3>興味: [WebAssembly, プラグインシステム, 非同期処理, Web]</h3>
      </div>
      <div className="my-8 space-y-3">
        <h2 className="text-2xl">SNS</h2>
        <ul className="list-inside space-y-2 grid justify-center">
          <li key={"twitter"} className="">
            <a href="https://twitter.com/KaniSimeji" rel="noopener noreferrer">
              <BsTwitter className="inline m-1" />
              Twitter
            </a>
          </li>
          <li key={"github"}>
            <a href="https://github.com/KaniyaSimeji" rel="noopener noreferrer">
              <BsGithub className="inline m-1" />
              GitHub
            </a>
          </li>
          <li key={"spotify"}>
            <a
              href="https://open.spotify.com/user/5usmvsuvpwsf1p8btrw5jqajn"
              rel="noopener noreferrer"
            >
              <BsSpotify className="inline m-1" />
              Spotify
            </a>
          </li>
          <li key={"nostr"}>
            <a
              href="https://nostx.shino3.net/npub1u9fan464z3ptlwrpye8f8c9pkk3s6kr7scmcvncukfhayaxkaz5szxdv8j"
              rel="noopener noreferrer"
            >
              {
                //Nostr icon from https://github.com/SovrynMatt/Nostr-Website-Button-Design
              }
              <Image
                src={"/nostr.png"}
                width={24}
                height={24}
                alt="nostr icon"
                className="inline m-0"
              ></Image>
              Nostr
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
