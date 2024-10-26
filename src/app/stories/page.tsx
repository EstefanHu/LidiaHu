import Link from 'next/link';
import stories from '@/lib/stories.json'
import Paragraph from '@/components/Paragraph';

export default function Stories() {
  return (
    <>
      {stories.map(({ id, title, body, category, createdAt }) => (
        <Link key={id} href={id}>
          <div className='mb-7 md:mb-10 rounded'>
            <p className='my-3 z-1 font-bold text-xs uppercase leading-3 text-text'>
              <span className='text-accent'>{category}</span> - {createdAt}
            </p>
            <h3 className='text-2xl font-bold capitalize mb-1 md:text-xl'>{title}</h3>
            <div className='mx-3 overflow-hidden h-20'>
              <Paragraph>{body}</Paragraph>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

