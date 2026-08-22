'use client';

import { StarterKit } from '@postcraft/editor/extensions';
import { BUTTON, BubbleMenu, SlashCommand } from '@postcraft/editor/ui';
import { EditorProvider } from '@tiptap/react';
import { ExampleShell } from '../example-shell';

const extensions = [StarterKit];

const content = `
  <p>Click the button below to see its bubble menu. You can edit the button link and text.</p>
  <a class="button" data-id="postcraft-button" href="https://postcraft">Click me</a>
  <p>Use the slash command menu (type /) to insert more buttons.</p>
`;

export function Buttons() {
  return (
    <ExampleShell
      title="Buttons"
      description="Click the button to edit its link via the button bubble menu."
    >
      <EditorProvider
        extensions={extensions}
        content={content}
        immediatelyRender={false}
      >
        <BubbleMenu.ButtonDefault />
        <SlashCommand items={[BUTTON]} />
      </EditorProvider>
    </ExampleShell>
  );
}
