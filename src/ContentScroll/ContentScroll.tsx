import { Api } from '../const/api';
import { ContentItem } from '../ContentItem/ContentItem';
import { Container } from './ContentScroll.styled';

export const ContentScroll = () => {
  return (
    <Container>
      {Api.items.map(item => (
        <ContentItem item={item} />
      ))}
    </Container>
  );
};
