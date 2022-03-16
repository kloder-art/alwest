import * as React from 'react';
import styled from 'styled-components';
import { FaEye, FaImdb, FaMusic, FaWikipediaW } from 'react-icons/fa';

const ICON_SIZE = 22;

const formatRuntime = (runtime: number) =>
  runtime > 60
    ? `${Math.floor(runtime / 60)}h. ${runtime % 60}m.`
    : `${runtime}m`;

const formatRecaudation = (x: number) => x.toLocaleString();

const Item: React.FC = ({ children }) => <li>{children}</li>;

interface LinkProps {
  label?: string;
  href?: string;
  icon?: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ href = '', label = '', icon }) => (
  <a href={href} target={'_blank'} rel={'noopener noreferrer'} title={label}>
    {icon ? icon : label}
  </a>
);

const StyledMeta = styled.ul`
  display: flex;
  list-style: none;
  margin: 8px 0;
  li {
    margin-right: 0.5rem;
  }
`;

interface MetaProps {
  frontmatter: {
    year?: number;
    runtime?: number;
    imdb?: string;
    spotify?: string;
    wikipedia?: string;
    recaudation?: number;
    born?: string;
    justwatch?: string;
  };
}

interface Item {
  key: string;
  label?: string;
  Cmp?: typeof Link;
  fn?(x: number | string): number | string;
  value?: number | string;
}

export const Meta: React.FC<MetaProps> = ({ frontmatter }) => (
  <StyledMeta>
    {frontmatter.year && <Item key={'year'}>{frontmatter.year}</Item>}
    {frontmatter.runtime && (
      <Item key={'runtime'}>{formatRuntime(frontmatter.runtime)}</Item>
    )}
    {frontmatter.imdb && (
      <Item key={'imdb'}>
        <Link
          label={'IMDB'}
          icon={<FaImdb size={ICON_SIZE} />}
          href={frontmatter.imdb}
        />
      </Item>
    )}
    {frontmatter.justwatch && (
      <Item key={'justwatch'}>
        <Link
          label={'JustWatch'}
          icon={<FaEye size={ICON_SIZE} />}
          href={frontmatter.justwatch}
        />
      </Item>
    )}
    {frontmatter.spotify && (
      <Item key={'spotify'}>
        <Link
          label={'BSO'}
          icon={<FaMusic size={ICON_SIZE} />}
          href={frontmatter.spotify}
        />
      </Item>
    )}
    {frontmatter.wikipedia && (
      <Item key={'wikipedia'}>
        <Link
          label={'Wikipedia'}
          icon={<FaWikipediaW />}
          href={frontmatter.wikipedia}
        />
      </Item>
    )}
    {frontmatter.recaudation && (
      <Item key={'recaudation'}>
        {formatRecaudation(frontmatter.recaudation)}
      </Item>
    )}
    {frontmatter.born && <Item key={'born'}>{frontmatter.born}</Item>}
  </StyledMeta>
);
