import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const formatDuration = duration =>
  `${Math.floor(duration / 60)} h. ${duration % 60} s.`;

const Tag = ({ children }) => <li>{children}</li>;

const IMDBLink = ({ children }) => (
  <Tag>
    <a href={children} target={'_blank'} rel={'noopener noreferrer'}>
      IMDB
    </a>
  </Tag>
);

const SpotifyLink = ({ children }) => (
  <Tag>
    <a href={children} target={'_blank'} rel={'noopener noreferrer'}>
      B.S.O.
    </a>
  </Tag>
);

const WikipediaLink = ({ children }) => (
  <Tag>
    <a href={children} target={'_blank'} rel={'noopener noreferrer'}>
      Wikipedia
    </a>
  </Tag>
);

const tags = [
  { key: 'year', fn: x => x, cmp: Tag },
  { key: 'duration', fn: formatDuration, cmp: Tag },
  { key: 'imdb', fn: x => x, cmp: IMDBLink },
  { key: 'spotify', fn: x => x, cmp: SpotifyLink },
  { key: 'wikipedia', fn: x => x, cmp: WikipediaLink },
  { key: 'recaudation', fn: x => x.toLocaleString(), cmp: Tag },
  { key: 'born', fn: x => x, cmp: Tag },
];

const StyledTags = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  li {
    margin-right: 0.5rem;
  }
`;

const Tags = ({ frontmatter }) => (
  <StyledTags>
    {tags
      .filter(x => frontmatter[x.key])
      .map(x => ({ ...x, result: x.fn(frontmatter[x.key]) }))
      .map((x, idx) => (
        <x.cmp key={idx}>{x.result}</x.cmp>
      ))}
  </StyledTags>
);

Tags.propTypes = {
  frontmatter: PropTypes.object,
};

IMDBLink.propTypes = {
  children: PropTypes.node,
};

SpotifyLink.propTypes = {
  children: PropTypes.node,
};

WikipediaLink.propTypes = {
  children: PropTypes.node,
};

Tag.propTypes = {
  children: PropTypes.node,
};

export default Tags;
