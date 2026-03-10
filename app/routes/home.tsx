import Navbar from "components/Navbar";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Roomify" },
    { name: "description", content: "Welcome to Roomify!" },
  ];
}

export default function Home() {
  return (
    <>
      <Navbar/>
    </>
);
}
