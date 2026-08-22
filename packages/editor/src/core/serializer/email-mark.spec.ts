import { Mark } from '@tiptap/core';
import { EmailMark } from './email-mark';

const Highlight = Mark.create({
  name: 'highlight',
  addOptions() {
    return {
      HTMLAttributes: {},
    };
  },
  parseHTML() {
    return [{ tag: 'mark' }];
  },
  renderHTML({ HTMLAttributes }) {
    return ['mark', HTMLAttributes, 0];
  },
});

describe('EmailMark', () => {
  it('maintains all user-defined properties from Mark', () => {
    const Component = vi.fn(() => 'some important value');
    const CustomHighlight = EmailMark.from(Highlight, Component);

    expect(CustomHighlight).toBeInstanceOf(EmailMark);
    expect(Highlight.config).not.toHaveProperty('renderToPostcraft');

    expect(CustomHighlight.options).toStrictEqual(Highlight.options);
    expect(CustomHighlight.storage).toStrictEqual(Highlight.storage);
    expect(CustomHighlight.type).toStrictEqual(Highlight.type);
    expect(CustomHighlight.name).toStrictEqual(Highlight.name);
    expect(CustomHighlight.parent).toStrictEqual(Highlight.parent);
    expect(CustomHighlight.config).toHaveProperty('renderToPostcraft');

    expect(
      CustomHighlight.config.renderToPostcraft(
        {} as unknown as Parameters<
          typeof CustomHighlight.config.renderToPostcraft
        >[0],
      ),
    ).toBe('some important value');

    const configWithoutRender = { ...CustomHighlight.config } as Record<
      string,
      unknown
    >;
    delete configWithoutRender.renderToPostcraft;
    expect(configWithoutRender).toStrictEqual(Highlight.config);
  });

  it('remains an EmailMark instance and preserves renderToPostcraft after configure()', () => {
    const Component = vi.fn(() => 'rendered');
    const CustomHighlight = EmailMark.from(Highlight, Component);

    const configured = CustomHighlight.configure({
      HTMLAttributes: { class: 'test-mark' },
    });

    expect(configured).toBeInstanceOf(EmailMark);
    expect(configured.config).toHaveProperty('renderToPostcraft');
    expect(configured.config.renderToPostcraft).toBe(Component);
    expect(configured.name).toBe(CustomHighlight.name);
  });
});
