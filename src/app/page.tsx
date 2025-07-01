import Image from "next/image";
import Experience from "@/components/Experience";
import Biography from "@/components/Biography";
import Exhibition from "@/components/Exhibition";

export default function Home() {
  return (
    <>
      <Biography />
      <Exhibition />
      <Experience />
    </>
  );
}
