import Link from 'next/link';

const POSTS = [
  {
    title: 'weathered basket',
    description: 'add description/synopsis here',
    category: 'short story',
    date: 'Tue Jul 25',
  },
  {
    title: 'extended peace',
    description: 'marie goes for a hike',
    category: 'short story',
    date: 'Mon Jun 19',
  },
];

export default function Stories() {
  return (
    <div className='max-w-[800px] mx-auto px-3'>
      {POSTS.map(({ title, description, category, date }) => (
        <Link key={title} href={`/${title.replace(' ', '-')}`}>
          <div className='w-screen mb-7 md:mb-10'>
            <p className='my-3 z-1 font-bold text-xs uppercase leading-3 text-text'>
              <span className='text-accent'>{category}</span> - {date}
            </p>
            <h3 className='text-2xl font-bold capitalize mb-1 md:text-xl'>{title}</h3>
            <p className='text-base'>{description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

