import { useEffect, useState } from 'react';
import { Api, Item } from '../const/api';

export const useApi = (search: string) => {
  const [data, setData] = useState<{ backgrounds: { url: string }[]; items: Item[] }>({ backgrounds: [], items: [] });
  useEffect(() => {
    let _sValue = search || '';
    const timeout = setTimeout(() => {
      if (_sValue != search) return;
      const items = Api.items.filter(({ title }) => title.toLowerCase().match(search.toLowerCase()));
      setData({ backgrounds: Api.backgrounds.map(({ url }) => ({ url: '../../api/' + url })), items });
    }, 1_000);

    return () => clearTimeout(timeout);
  }, [search]);

  return data;
};
