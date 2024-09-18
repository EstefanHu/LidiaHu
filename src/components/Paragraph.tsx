export default function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className='text-xl mb-2 lg:mb-5 font-normal break-words indent-9 tracking-tight'>{children}</p>;
}
