// components/MDXComponents.tsx
import { Table } from './Table';

interface HeadingProps {
  children: React.ReactNode;
  level: number;
}

function Heading({ children, level }: HeadingProps) {
  const text = children?.toString() || '';
  const id = text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return <Tag id={id}>{children}</Tag>;
}

export const MDXComponents = {
  h1: (props: any) => <Heading level={1} {...props} />,
  h2: (props: any) => <Heading level={2} {...props} />,
  h3: (props: any) => <Heading level={3} {...props} />,
  h4: (props: any) => <Heading level={4} {...props} />,
  table: (props: any) => <Table {...props} className="decision-matrix" />,
};