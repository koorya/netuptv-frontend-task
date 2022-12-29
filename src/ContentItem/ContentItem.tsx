import { Item } from '../const/api';
import {
  Button,
  Container,
  Description,
  FlexBreak,
  Genres,
  IMBDLabel,
  Label,
  Poster,
  Title,
} from './ContentItem.styled';

export const ContentItem = (props: { item: Item }) => {
  const {
    item: { country, genres, imdb_rate, is_new, keyframe, length, min_age, num_seasons, poster, title, year },
  } = props;
  return (
    <Container>
      <Poster poster={'../../api/' + poster} keyframe={'../../api/' + keyframe}>
        {is_new && <Label>New on NetUP TV</Label>}
        <IMBDLabel>{imdb_rate}/10</IMBDLabel>
        <FlexBreak />
        <Button />
      </Poster>

      <Title>{title}</Title>

      <Description>
        {[country, year, length / 60 + ' min', num_seasons + ' seasons', min_age + '+'].join(' | ')}
      </Description>

      <Genres>{genres.join(', ')}</Genres>
    </Container>
  );
};
