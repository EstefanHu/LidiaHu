import { IPoem } from '@/types'

export default function Poem({ poem }: { poem: IPoem }) {
  console.log({ poem })
  return <div className="flex flex-col">{poem.body}</div>;
}
