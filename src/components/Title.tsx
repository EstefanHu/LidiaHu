export default function Title({ children }: { children: React.ReactNode }) {
  return <h1 className="text-4xl font-bold capitalize w-[100%] text-center mb-8">{children}</h1>;
}
