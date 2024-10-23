import Title from '@/components/text/Title';
import TextRegular from '@/components/text/TextRegular';

export default function Home() {
  return (
    <section className="container m-auto flex flex-col h-[100vh] justify-center">
      <Title
        text="Projects"
        withAnimation
        size="x-large"
        className="text-center"
      />
      <TextRegular size="medium" className="text-center text-gray-500">
        A look at some of our previous Local & International projects &
        experiences for both Government & Private clients.
      </TextRegular>
    </section>
  );
}
