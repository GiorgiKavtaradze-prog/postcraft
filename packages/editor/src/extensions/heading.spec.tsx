import { render } from 'postcraft';
import { DEFAULT_STYLES } from '../utils/default-styles';
import { Heading } from './heading';

describe('Heading Node', () => {
  it('renders Postcraft properly', async () => {
    const Component = Heading.config.renderToPostcraft;
    expect(Component).toBeDefined();
    const node = {
      type: 'heading',
      attrs: {
        class: '',
        level: 1,
        style: '',
        ychange: null,
        alignment: 'left',
      },
    };
    expect(
      await render(
        <Component
          node={node}
          style={{ ...DEFAULT_STYLES.reset, ...DEFAULT_STYLES.h1 }}
          extension={Heading}
        />,
        { pretty: true },
      ),
    ).toMatchSnapshot();
  });
});
