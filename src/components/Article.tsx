export default function Article({ text }: { text: string }) {
  const lines = text.split('\n')

  return <>
    {lines.map((line, idx) => (
      <p
        key={idx}
        className='text-xl mb-2 lg:mb-5 font-normal break-words indent-9 tracking-tight'
      >{line}</p>
    ))}
  </>
}
