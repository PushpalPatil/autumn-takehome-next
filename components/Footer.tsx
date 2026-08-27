import AutumnWordmark from "./AutumnWordmark";
import { Container, Eyebrow } from "./ui";

// Footer doubles as the recruiting surface: a warm, quiet careers line.
export default function Footer() {
  return (
    <footer id="careers" className="bg-ink pb-8 pt-16 text-paper">
      <Container className="flex flex-wrap justify-between gap-12">
        <div>
          <p>
            <AutumnWordmark className="h-7 w-auto" />
          </p>
          <p className="mt-2 text-paper/70">
            The marketing engine your hidden-gem hotel deserves.
          </p>
        </div>
        <div className="max-w-md">
          <Eyebrow>Careers</Eyebrow>
          <p className="text-paper/80">
            We&apos;re a small team of hospitality people and builders in New
            York.{" "}
            <a href="mailto:aaryan@autumnplatform.com" className="underline">
              Come work with us.
            </a>
          </p>
        </div>
      </Container>
      <Container className="mt-16">
        <hr className="border-0 border-t border-line/30" />
        <p className="mt-6 text-sm text-paper/55">
          © {new Date().getFullYear()} Autumn
        </p>
      </Container>
    </footer>
  );
}
