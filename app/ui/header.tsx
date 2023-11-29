import Image from "next/image";

export default function Header() {
  return (
    <header>
      <Image src="/logo.png" alt="Logo" width={50} height={50} />
      <h1>My Website</h1>
    </header>
  );
}
