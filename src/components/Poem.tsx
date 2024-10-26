import { IPoem } from '@/types'

export default function Poem({ poem }: { poem: IPoem }) {
  const lines = poem.body.split('\n');

  return (
    <div className="flex flex-col px-1">
      <p className='text-2xl font-bold capitalize text-center mb-5'>{poem.title}</p>

      {lines.map((line, idx) => (
        <p key={idx} className="text-center text-xl mb-2 lg:mb-3 font-normal tracking-tight">
          <i>{line}</i>
        </p>
      ))}
    </div>
  )
}
