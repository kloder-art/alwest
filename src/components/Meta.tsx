import * as React from 'react';
import styled from 'styled-components';

const formatRuntime = (runtime: number) =>
  runtime > 60
    ? `${Math.floor(runtime / 60)}h. ${runtime % 60}m.`
    : `${runtime}m`;

const Item: React.FC = ({ children }) => <li>{children}</li>;

interface LinkProps {
  label?: string;
  children?: string;
}

const Link: React.FC<LinkProps> = ({ children = '', label = '' }) => (
  <a href={children} target={'_blank'} rel={'noopener noreferrer'}>
    {label}
  </a>
);

const items = [
  { key: 'year' },
  { key: 'runtime', fn: formatRuntime },
  { key: 'imdb', label: 'IMDB', Cmp: Link },
  { key: 'spotify', label: 'BSO', Cmp: Link },
  { key: 'wikipedia', label: 'Wikipedia', Cmp: Link },
  { key: 'recaudation', fn: (x: number) => x.toLocaleString() },
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

interface MetaProps {
  frontmatter: {
    year?: number;
    runtime?: number;
    imdb?: string;
    sporify?: string;
    wikipedia?: string;
    recaudation?: number;
    born?: string;
  };
}

interface Item {
  key: string;
  label?: string;
  Cmp?: typeof Link;
  fn?(x: number | string): number | string;
  value?: number | string;
}

const hasKey =
  (frontmatter: { [key: string]: string | number }) =>
  ({ key }: Item) =>
    key in frontmatter;

const appendValue =
  (frontmatter: { [key: string]: string | number }) => (item: Item) => {
    return {
      ...item,
      value: item.fn ? item.fn(frontmatter[item.key]) : frontmatter[item.key],
    };
  };

export const Meta: React.FC<MetaProps> = ({ frontmatter }) => (
  <StyledMeta>
    {items
      .filter(hasKey(frontmatter))
      .map(appendValue(frontmatter))
      .map(({ Cmp, ...item }: Item) => (
        <Item key={item.key}>
          {Cmp ? (
            <Cmp label={item.label}>{String(item.value)}</Cmp>
          ) : (
            item.value
          )}
        </Item>
      ))}
  </StyledMeta>
);
