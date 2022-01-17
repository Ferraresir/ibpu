import { signIn, getProviders } from "next-auth/react";
import { useState, useEffect } from "react";

export default function Login() {
  const [providers, setProviders] = useState([]);
  useEffect(() => {
    getProviders().then((prov) => {
      setProviders(Object.values(prov));
    });
  }, []);
  return (
    <div className="flex flex-col">
      <input type="text" placeholder="Email..." />
      <input type="password" placeholder="Contraseña..." />
      <button onClick={() => signIn("email")}>Login</button>
      {providers.map((provider) => {
        return (
          <button
            key={provider.id}
            onClick={() => signIn(provider.id)}
            className=""
          >
            {provider.name}
          </button>
        );
      })}
    </div>
  );
}
