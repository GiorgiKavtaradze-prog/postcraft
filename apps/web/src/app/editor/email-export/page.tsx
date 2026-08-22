import type { Metadata } from 'next';
import { ExamplePageShell } from '../example-page-shell';
import { getExampleGitHubUrl, getExampleSource } from '../get-example-source';
import { EmailExport as Example } from './example';

export const metadata: Metadata = {
  title: 'Postcraft export — Editor examples',
  description:
    'Edit content and export it as postcraft-ready HTML using composePostcraft().',
  alternates: { canonical: '/editor/email-export' },
};

export default async function Page() {
  const sourceCode = await getExampleSource('email-export');

  return (
    <ExamplePageShell
      slug="email-export"
      heading="Postcraft export"
      docsUrl="https://postcraft/docs/editor/features/email-export"
      sourceCode={sourceCode}
      githubUrl={getExampleGitHubUrl('email-export')}
    >
      <Example />
    </ExamplePageShell>
  );
}
