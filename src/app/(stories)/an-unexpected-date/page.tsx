import stories from '@/lib/stories.json'
import { IStory } from '@/types'
import Story from '@/components/Story'
import Title from '@/components/Title'
import Paragraph from '@/components/Paragraph'

const URL = 'an-unexpected-date'

export default function AnUnexpectedDate() {
  const { title, body, verse } = stories.filter((s: IStory) => s.id === URL)[0]

  return (
    <Story>
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
    </Story >
  )
}
