import { Link } from 'postcraft';
import { Layout } from '../_components/layout';

export const component = <Link href="https://postcraft">Postcraft</Link>;

export default () => {
  return <Layout>{component}</Layout>;
};
