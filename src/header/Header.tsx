import {
  HeaderStyled,
  LogoStyled,
  MenuButtonStyled,
  MenuButtonText,
  MenuIconButtonStyled,
  MenuStyled,
  SubmenuStyled,
} from './Header.styled';
import HomeSvg from '../icons/NetUp/home.svg';
import ModernTvSvg from '../icons/NetUp/modern-tv.svg';
import TvSvg from '../icons/NetUp/tv.svg';
import MovieSvg from '../icons/NetUp/movie.svg';
import PersonSvg from '../icons/NetUp/person.svg';

import Logo from '../icons/logo_netup.svg';
import ProfileSvg from '../icons/profile.svg';
import FindSvg from '../icons/find.svg';

export const Header = () => {
  return (
    <HeaderStyled>
      <LogoStyled>
        <Logo />
      </LogoStyled>
      <MenuStyled>
        <MenuButtonStyled>
          <HomeSvg />
          <MenuButtonText>Discover</MenuButtonText>
        </MenuButtonStyled>
        <MenuButtonStyled>
          <TvSvg />
          <MenuButtonText>Live TV</MenuButtonText>
        </MenuButtonStyled>
        <MenuButtonStyled>
          <ModernTvSvg />
          <MenuButtonText>TV Shows</MenuButtonText>
        </MenuButtonStyled>
        <MenuButtonStyled>
          <MovieSvg />
          <MenuButtonText>Movies</MenuButtonText>
        </MenuButtonStyled>
        <MenuButtonStyled>
          <PersonSvg />
          <MenuButtonText>My Stuff</MenuButtonText>
        </MenuButtonStyled>
      </MenuStyled>
      <SubmenuStyled>
        <MenuIconButtonStyled>
          <FindSvg />
        </MenuIconButtonStyled>
        <MenuIconButtonStyled isActive>
          <ProfileSvg />
        </MenuIconButtonStyled>
      </SubmenuStyled>
    </HeaderStyled>
  );
};
