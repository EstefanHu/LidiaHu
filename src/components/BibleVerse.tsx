import Paragraph from './Paragraph';

export default function BibleVerse({ entry, verse }: { entry: string; verse: string }) {
  return (
    <div className='my-12'>
      <Paragraph>&quot;{entry}&quot;</Paragraph>
      <Paragraph>
        <i>- {verse}</i>
      </Paragraph>
    </div>
  );
}
