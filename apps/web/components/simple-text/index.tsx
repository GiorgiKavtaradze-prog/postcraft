import { Text } from 'postcraft';
import { Layout } from '../_components/layout';

export const component = <Text>A simple paragraph</Text>;

export default () => {
  return <Layout>{component}</Layout>;
};
