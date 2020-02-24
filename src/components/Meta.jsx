import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const formatRuntime = runtime =>
  runtime > 60
    ? `${Math.floor(runtime / 60)}h. ${runtime % 60}m.`
    : `${runtime}m`;

const Item = ({ children }) => <li>{children}</li>;

const Link = ({ children, label }) => (
  <a href={children} target={'_blank'} rel={'noopener noreferrer'}>
    {label}
  </a>
);

const items = [
  { key: 'year' },
  { key: 'runtime', fn: formatRuntime },
  { key: 'imdb', label: 'IMDB', cmp: Link },
  { key: 'spotify', label: 'BSO', cmp: Link },
  { key: 'wikipedia', label: 'Wikipedia', cmp: Link },
  { key: 'recaudation', fn: x => x.toLocaleString() },
  { key: 'born' },
];

const StyledMeta = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  li {
    margin-right: 0.5rem;
  }
`;

const Meta = ({ frontmatter }) => (
  <StyledMeta>
    {items
      .filter(x => frontmatter[x.key])
      .map(x => ({
        ...x,
        result: x.fn ? x.fn(frontmatter[x.key]) : frontmatter[x.key],
      }))
      .map((x, idx) => (
        <Item key={idx}>
          {x.cmp ? <x.cmp label={x.label}>{x.result}</x.cmp> : x.result}
        </Item>
      ))}
  </StyledMeta>
);

Meta.propTypes = {
  frontmatter: PropTypes.object,
};

Link.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
};

Item.propTypes = {
  children: PropTypes.node,
};

export default Meta;
