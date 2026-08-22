import type { Metadata } from 'next';
import { ExamplePageShell } from '../example-page-shell';
import { getExampleGitHubUrl, getExampleSource } from '../get-example-source';
import { EmailThemingExample as Example } from './example';

export const metadata: Metadata = {
  title: 'Postcraft theming — Editor examples',
  description:
    'Switch between Basic and Minimal themes to see how postcraft styles change.',
  alternates: { canonical: '/editor/email-theming' },
};

export default async function Page() {
  const sourceCode = await getExampleSource('email-theming');

  return (
    <ExamplePageShell
      slug="email-theming"
      heading="Postcraft theming"
      docsUrl="https://postcraft/docs/editor/features/theming"
      sourceCode={sourceCode}
      githubUrl={getExampleGitHubUrl('email-theming')}
    >
      <Example />
    </ExamplePageShell>
  );
}
