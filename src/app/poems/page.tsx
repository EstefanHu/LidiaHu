import Poem from '@/components/Poem'
import poems from '@/lib/poems.json'
import { IPoem } from '@/types'

export default function Poems() {
  return (
    <div className="pt-5">
      {poems.map((poem: IPoem) => {
        return (
          <div className='mb-24' key={poem.id}>
            <p className='font-bold text-xs uppercase leading-3 text-accent mb-2 md:mb-0'>{poem.createdAt}</p>
            <Poem poem={poem} />
          </div>
        )
      })}
    </div>
  )
}
