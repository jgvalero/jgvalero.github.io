import Project from "../ui/project";

export default function Projects() {
  return (
    <main>
      <Project
        name="Record Record"
        link="https://github.com/jgvalero/record-record"
        description="Record your records! A record collection manager."
      />
      <Project
        name="Discord Bot"
        link="https://github.com/jgvalero/discord-bot"
        description="The name says it all!"
      />
      <Project
        name="Album Library"
        link="https://github.com/jgvalero/album-library"
        description="A library for managing music albums, a precursor to Record Record."
      />
      <Project
        name="Album of the Year Scraper"
        link="https://github.com/jgvalero/aoty-scraper"
        description="A scraper for the Album of the Year website."
      />
      <Project
        name="To-do List"
        link="https://github.com/jgvalero/todo"
        description="A simple to-do list application (Boring)."
      />
    </main>
  );
}
