import { useQuery } from '@tanstack/react-query';
import { getLabels } from '../actions';
import { GithubLabel } from '../interfaces';

export const useLabels = () => {
  const labelsQuery = useQuery({
    //!    url: 'https://api.github.com/repos/facebook/react/labels/Component:%20Component%20API', //tiene la llave labels que es lo que se necesita
    // con el useQuery
    queryKey: ['labels'],
    queryFn: getLabels,
    staleTime: 1000 * 60 * 60, // 1 hora de stale time

    // placeholderData: [ //* informacion temporal mientras se hace la solicitud y se trae la info actualizada
    //   {
    //     id: 739777675,
    //     node_id: 'MDU6TGFiZWw3Mzk3Nzc2NzU=',
    //     url: 'https://api.github.com/repos/facebook/react/labels/Component:%20Component%20API',
    //     name: 'Component: Component API',
    //     color: 'd4c5f9',
    //     default: false,
    //   } satisfies GithubLabel, //* satisfies GithubLabel util de typescript, es por si acaso

    //   {
    //     id: 139734344,
    //     node_id: 'MDU6TGFiZWwxMzk3MzQzNDQ=',
    //     url: 'https://api.github.com/repos/facebook/react/labels/Component:%20Test%20Utils',
    //     name: 'Component: Test Utils',
    //     color: 'eb6420',
    //     default: false,
    //   } satisfies GithubLabel,
    // ],

    // initialData: [ //* similar al placeHoldeData si no hay staleTime, de lo contrario esta data se considera fresca hasta que pase el tiempo o se fuerce el refreh
    //   {
    //     id: 739777675,
    //     node_id: 'MDU6TGFiZWw3Mzk3Nzc2NzU=',
    //     url: 'https://api.github.com/repos/facebook/react/labels/Component:%20Component%20API',
    //     name: 'Component: Component API',
    //     color: 'd4c5f9',
    //     default: false,
    //   } satisfies GithubLabel,

    //   {
    //     id: 139734344,
    //     node_id: 'MDU6TGFiZWwxMzk3MzQzNDQ=',
    //     url: 'https://api.github.com/repos/facebook/react/labels/Component:%20Test%20Utils',
    //     name: 'Component: Test Utils',
    //     color: 'eb6420',
    //     default: false,
    //   } satisfies GithubLabel,
    // ],
  });

  return {
    labelsQuery,
  };
};
