import { Link, Text } from 'postcraft';
import { Layout } from '../_components/layout';

export const component = (
  <Text>
    This is <Link href="https://postcraft">Postcraft</Link>
  </Text>
);

export default () => {
  return <Layout>{component}</Layout>;
};
