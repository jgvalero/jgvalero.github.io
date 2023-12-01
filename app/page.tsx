import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="image-container">
        <Image src="/me.png" alt="Me" width={500} height={500} />
      </div>

      <span className="hero-description">
        Hey, I&apos;m Jose! I am a software engineer proficient in Python, Java,
        and C/C++. I am currently learning web development! My favorite hobbies
        are listening to music, building computers, and working on projects!
      </span>
    </section>
  );
}
