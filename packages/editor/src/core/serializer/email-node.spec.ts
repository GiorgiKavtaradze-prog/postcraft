import { Heading } from '@tiptap/extension-heading';
import { EmailNode } from './email-node';

describe('EmailNode', () => {
  it('maintains all user-defined properties from Heading', () => {
    const Component = vi.fn(() => 'some important value');
    const CustomHeader = EmailNode.from(Heading, Component);
    expect(CustomHeader).toBeInstanceOf(EmailNode);
    expect(Heading.config).not.toHaveProperty('renderToPostcraft');

    expect(CustomHeader.options).toStrictEqual(Heading.options);
    expect(CustomHeader.storage).toStrictEqual(Heading.storage);
    expect(CustomHeader.child).toStrictEqual(Heading.child);
    expect(CustomHeader.type).toStrictEqual(Heading.type);
    expect(CustomHeader.name).toStrictEqual(Heading.name);
    expect(CustomHeader.parent).toStrictEqual(Heading.parent);
    expect(CustomHeader.config).toHaveProperty('renderToPostcraft');

    expect(
      CustomHeader.config.renderToPostcraft(
        {} as unknown as Parameters<
          typeof CustomHeader.config.renderToPostcraft
        >[0],
      ),
    ).toBe('some important value');
    const configWithoutRender = { ...CustomHeader.config } as Record<
      string,
      unknown
    >;
    delete configWithoutRender.renderToPostcraft;
    expect(configWithoutRender).toStrictEqual(Heading.config);
  });

  it('remains an EmailNode instance and preserves renderToPostcraft after configure()', () => {
    const Component = vi.fn(() => 'rendered');
    const CustomHeader = EmailNode.from(Heading, Component);

    const configured = CustomHeader.configure({ levels: [1, 2] });

    expect(configured).toBeInstanceOf(EmailNode);
    expect(configured.config).toHaveProperty('renderToPostcraft');
    expect(configured.config.renderToPostcraft).toBe(Component);
    expect(configured.name).toBe(CustomHeader.name);
  });
});
