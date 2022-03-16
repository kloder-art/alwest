import * as React from 'react';
import { FaEye, FaImdb, FaMusic, FaWikipediaW } from 'react-icons/fa';

import { formatRuntime, formatRecaudation } from './formats';
import { Link } from './Link';
import { StyledMeta } from './StyledMeta';

const ICON_SIZE = 22;

const Item: React.FC = ({ children }) => <li>{children}</li>;

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
