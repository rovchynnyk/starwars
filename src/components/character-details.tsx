import { useParams } from 'react-router-dom';

export const CharacterDetails = () => {
  const { id } = useParams();
  console.log(id);
  return <div>Character</div>;
};
