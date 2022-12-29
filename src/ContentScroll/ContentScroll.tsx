import { Item } from '../const/api';
import { ContentItem } from '../ContentItem/ContentItem';
import { Container } from './ContentScroll.styled';

export const ContentScroll = (props: { items: Item[] }) => {
  return (
    <Container>
      {props.items.map((item, idx) => (
        <ContentItem key={item.title + idx + '_item'} item={item} />
      ))}
    </Container>
  );
};
