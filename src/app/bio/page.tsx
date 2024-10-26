import Image from 'next/image';
import Article from '@/components/Article';

const BIO = "Lidia Hu is a retired math teacher, storyteller, poet and photographer. Her faith, life experiences, and vivid imagination inspires a river of fictional stories. Her Mexican heritage provides a unique voice.\nLidia enjoys frequent nature walks, for exercise and to de-stress, but also to capture inspirational photos. Much of her poetry flows from these photos and reflects her cherished connection with God.\nShe lives in Anchorage, Alaska with her husband. She has four adult children and loves spending time with her three grandsons.\n"

export default function Bio() {
  return (
    <div className='py-6'>
      <h1 className='mb-3 text-3xl font-bold text-center'>About Lidia</h1>

      <section>
        <div className='rounded float-left overflow-hidden mb-5 w-full min-[540px]:max-w-[300px] min-[540px]:mr-4 md:mr-5'>
          <Image
            className='object-cover'
            src="/headshot.webp"
            alt="headshot"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        <Article text={BIO} />
      </section>
    </div>
  )
}
