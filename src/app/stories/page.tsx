import Link from 'next/link';
import stories from '@/lib/stories.json'

export default function Stories() {
  return (
    <>
      {stories.map(({ title, description, category, date }) => (
        <Link key={title} href={`/${title.replaceAll(' ', '-').replaceAll('\'', '')}`}>
          <div className='mb-7 md:mb-10'>
            <p className='my-3 z-1 font-bold text-xs uppercase leading-3 text-text'>
              <span className='text-accent'>{category}</span> - {date}
            </p>
            <h3 className='text-2xl font-bold capitalize mb-1 md:text-xl'>{title}</h3>
            <p className='text-base'>{description}</p>
          </div>
        </Link>
      ))}
    </>
  );
}

