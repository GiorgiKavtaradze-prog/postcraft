import type { ComponentPropsWithoutRef } from 'react';

type ResponsiveRowProps = ComponentPropsWithoutRef<'table'>;
type ResponsiveColumnProps = ComponentPropsWithoutRef<'td'>;

export const ResponsiveRow = ({
  children,
  style,
  ...props
}: ResponsiveRowProps) => (
  <table
    cellPadding="0"
    cellSpacing="0"
    role="presentation"
    width="100%"
    {...props}
    style={{ width: '100%', ...style }}
  >
    <tbody>
      <tr>{children}</tr>
    </tbody>
  </table>
);

export const ResponsiveColumn = ({
  children,
  style,
  ...props
}: ResponsiveColumnProps) => (
  <td {...props} style={{ verticalAlign: 'top', ...style }}>
    {children}
  </td>
);
