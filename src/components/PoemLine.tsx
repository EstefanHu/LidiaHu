export default function PoemLine({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-center text-xl mb-2 lg:mb-3 font-normal tracking-tight">
      <i>{children}</i>
    </p>
  )
}
