import { Container, FindButton, FindInbut } from './FindForm.styled';
import FindSvg from '../icons/find.svg';

export const FindForm = (props: { setValue: (v: string) => void; value: string }) => {
  const { setValue, value } = props;
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setValue(e.target.value);
  };
  return (
    <Container>
      <FindInbut placeholder='Search' value={value} onChange={handleChange} />
      <FindButton>
        search
        <FindSvg />
      </FindButton>
    </Container>
  );
};
