import { CodeInline, Text } from 'postcraft';
import { Layout } from '../_components/layout';

export const component = (
  <Text className="text-center">
    Install the{' '}
    <CodeInline className="rounded-[6px] bg-green-300 px-[4px] py-[2px]">
      postcraft
    </CodeInline>{' '}
    package
  </Text>
);

export default () => {
  return <Layout>{component}</Layout>;
};
