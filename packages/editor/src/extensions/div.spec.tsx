import { render } from 'postcraft';
import { DEFAULT_STYLES } from '../utils/default-styles';
import { Div } from './div';

const divStyle = { ...DEFAULT_STYLES.reset };

describe('Div Node', () => {
  it('renders Postcraft properly', async () => {
    const Component = Div.config.renderToPostcraft;
    expect(Component).toBeDefined();
    expect(
      await render(
        <Component
          node={{
            type: 'div',
            attrs: {
              class: 'div-class',
            },
          }}
          style={divStyle}
          extension={Div}
        >
          Div content
        </Component>,
        { pretty: true },
      ),
    ).toMatchSnapshot();
  });
});
