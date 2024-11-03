import stories from '@/lib/stories.json'
import { IStory } from '@/types'
import Page from '@/components/Page'
import Title from '@/components/Title'
import Paragraph from '@/components/Paragraph'

export default function Story({ params }: { params: { id: string } }) {
  const { title, body, verse } = stories.filter((s: IStory) => s.id === params.id)[0]

  return (
    <Page>
      <Title>{title}</Title>
      {
        body.split('\n').map((line, idx) => {
          const italics = line.split('*').map((val, idx) => idx % 2 === 0 ? val : <i key={idx}>{val}</i>)

          return <Paragraph key={idx}>{italics}</Paragraph>
        })
      }
      {
        verse ? (
          <div className='my-12'>
            <Paragraph>&quot;{verse.entry}&quot;</Paragraph>
            <Paragraph>
              <i>- {verse.reference}</i>
            </Paragraph>
          </div>
        )
          : null
      }
    </Page>
  )
}

