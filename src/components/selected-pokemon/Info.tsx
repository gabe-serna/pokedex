import { Stats } from '@/lib/getStats';
import { weaknesses } from '@/lib/utils';
import Type from './Type';
import { useMediaQuery } from '@/hooks/use-media-query';

interface Props {
  stats: React.MutableRefObject<Stats>;
}

const Info = ({ stats }: Props) => {
  const weaknessList = new Map<string, string>();
  const isDesktop = useMediaQuery('(min-width: 640px)');
  let typesClass = '';
  let weaknessesClass = '';
  let abilitiesClass = '';
  if (isDesktop) {
    typesClass = 'row-start-1 row-span-1 col-start-1 col-span-1 mb-1';
    weaknessesClass = 'row-start-2 row-span-1 col-start-1 col-span-1 my-auto';
    abilitiesClass =
      'row-start-1 row-span-2 col-start-2 col-span-1 pl-4 2xl:text-lg 3xl:text-2xl';
  } else {
    typesClass = 'row-start-1 row-span-1 col-start-1 col-span-1 mb-1';
    weaknessesClass = 'row-start-2 row-span-1 col-start-1 col-span-1 my-auto';
    abilitiesClass =
      'row-start-3 row-span-1 col-start-1 col-span-1 2xl:text-lg 3xl:text-2xl';
  }

  return (
    <>
      <div className={typesClass}>
        <h1 className='inline text-outline-black 2xl:text-lg 3xl:text-2xl'>
          Types:{' '}
        </h1>
        {stats.current.types.map(type => {
          return <Type key={`type-${type}`}>{type}</Type>;
        })}
      </div>
      <div className={weaknessesClass}>
        <div className='mb-1'>
          <h1 className='inline text-outline-black 2xl:text-lg 3xl:text-2xl'>
            Weaknesses:{' '}
          </h1>
        </div>
        <div className='block'>
          {stats.current.types.map(type =>
            weaknesses.get(type)?.map(weakness => {
              if (weaknessList.has(weakness)) return null;
              weaknessList.set(weakness, weakness);
              return <Type key={`weakness-${weakness}`}>{weakness}</Type>;
            })
          )}
        </div>
      </div>
      <div className={abilitiesClass}>
        <h1 className='text-outline-black'>Abilities: </h1>
        <ul>
          {stats.current.abilities.map(ability => {
            return (
              <li
                key={`stats-${ability}`}
                className='list-disc ml-4 text-outline-black'
              >{`${ability.replace(/(^\w|-\w)/g, match =>
                match.toUpperCase()
              )} `}</li>
            );
          })}
        </ul>
      </div>
      {!isDesktop && (
        <aside className='flex flex-row items-center justify-around italic text-gray-400 mt-4 row-start-4 row-span-1 col-start-1 col-span-1'>
          <p className=''>Height: {stats.current.height}</p>
          <p className=''>Weight: {stats.current.weight}</p>
        </aside>
      )}
    </>
  );
};

export default Info;
