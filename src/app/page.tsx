import Page from '@/components/Page';
import Paragraph from '@/components/Paragraph';
import Title from '@/components/Title';
import Poem from '@/components/Poem'
import stories from '@/lib/stories.json'
import poems from '@/lib/poems.json'

export default function Home() {
  const { id, title, body, verse } = stories[0];
  const poem = poems.filter(p => p.id === id)[0]

  return (
    <>
      {
        verse ?
          <section className='flex flex-col items-center justify-center px-5 mb-16 mt-20'>
            <h1 className='text-3xl text-center font-bold  md:text-4xl'>{verse.entry}</h1>
            <p className='mt-5 text-xl'>- {verse.reference}</p>
          </section>
          : null
      }

      <Page>
        <Title>{title}</Title>
        {
          body.split('\n').map((line, idx) => {
            const italics = line.split('*').map((val, idx) => idx % 2 === 0 ? val : <i key={idx}>{val}</i>)

            return <Paragraph key={idx}>{italics}</Paragraph>
          })
        }

        <div className="h-24" />

        {
          poem ? (
            <>
              <Poem poem={poem} />
              <div className="h-24" />
            </>
          ) : null
        }
      </Page>
    </>
  );
}

