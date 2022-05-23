import { useMoralis } from "react-moralis";

export default function ConnectWallet() {
  const { authenticate, isAuthenticated, logout, account, user } = useMoralis();

  return (
    <div>
      {isAuthenticated ? (
        <main>
          <p>
          </p>

          <div>
            <button
              onClick={logout}>
              <h2 className="text-xl text-transparent bg-clip-text bg-gradient-to-l bg-black">{user.get("ethAddress").slice(0,9)}</h2>
            </button>
          </div>
        </main>
      ) : (
        <main>
          <div>
            <button
              onClick={() => {
                authenticate({ provider: "metamask" });
              }}
            >
              <h2 className="text-xl text-transparent bg-clip-text bg-gradient-to-l bg-black">Connect</h2>
            </button>
          </div>
        </main>
      )}
    </div>
  );
}