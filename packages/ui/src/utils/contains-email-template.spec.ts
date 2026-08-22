import {
  containsEmailTemplate,
  removeFilenameExtension,
} from './contains-email-template';
import type { EmailsDirectory } from './get-emails-directory-metadata';

describe('removeFilenameExtension()', () => {
  it('works with a single .', () => {
    expect(removeFilenameExtension('postcraft-template.tsx')).toBe(
      'postcraft-template',
    );
  });

  it('works with an example test file', () => {
    expect(removeFilenameExtension('postcraft-template.spec.tsx')).toBe(
      'postcraft-template.spec',
    );
  });

  it('does nothing when there is no extension', () => {
    expect(removeFilenameExtension('postcraft-template')).toBe('postcraft-template');
  });
});

describe('containsEmailTemplate()', () => {
  describe('with Windows path separator', () => {
    const directory: EmailsDirectory = {
      absolutePath: 'C:\\fake\\path\\postcraft',
      directoryName: 'postcraft',
      relativePath: '',
      emailFilenames: [],
      subDirectories: [
        {
          absolutePath: 'C:\\fake\\path\\postcraft\\magic-links',
          directoryName: 'magic-links',
          relativePath: 'magic-links',
          emailFilenames: [
            'aws-verify-email',
            'linear-login-code',
            'notion-magic-link',
            'plaid-verify-identity',
            'raycast-magic-link',
            'slack-confirm',
          ],
          subDirectories: [
            {
              absolutePath: 'C:\\fake\\path\\postcraft\\magic-links\\resend',
              directoryName: 'resend',
              emailFilenames: ['verify-postcraft'],
              relativePath: 'magic-links\\resend',
              subDirectories: [],
            },
          ],
        },
        {
          absolutePath: 'C:\\fake\\path\\postcraft\\first\\second',
          directoryName: 'first\\second',
          relativePath: 'first\\second',
          emailFilenames: ['postcraft'],
          subDirectories: [],
        },
        {
          absolutePath: 'C:\\fake\\path\\postcraft\\newsletters',
          directoryName: 'newsletters',
          relativePath: 'newsletters',
          emailFilenames: [
            'codepen-challengers',
            'google-play-policy-update',
            'stack-overflow-tips',
          ],
          subDirectories: [],
        },
        {
          absolutePath: 'C:\\fake\\path\\postcraft\\notifications',
          directoryName: 'notifications',
          relativePath: 'notifications',
          emailFilenames: [
            'github-access-token',
            'papermark-year-in-review',
            'vercel-invite-user',
            'yelp-recent-login',
          ],
          subDirectories: [],
        },
        {
          absolutePath: 'C:\\fake\\path\\postcraft\\receipts',
          directoryName: 'receipts',
          relativePath: 'receipts',
          emailFilenames: ['apple-receipt', 'nike-receipt'],
          subDirectories: [],
        },
        {
          absolutePath: 'C:\\fake\\path\\postcraft\\reset-password',
          directoryName: 'reset-password',
          relativePath: 'reset-password',
          emailFilenames: ['dropbox-reset-password', 'twitch-reset-password'],
          subDirectories: [],
        },
        {
          absolutePath: 'C:\\fake\\path\\postcraft\\reviews',
          directoryName: 'reviews',
          relativePath: 'reviews',
          emailFilenames: ['airbnb-review', 'amazon-review'],
          subDirectories: [],
        },
        {
          absolutePath: 'C:\\fake\\path\\postcraft\\welcome',
          directoryName: 'welcome',
          relativePath: 'welcome',
          emailFilenames: [
            'koala-welcome',
            'netlify-welcome',
            'stripe-welcome',
          ],
          subDirectories: [],
        },
      ],
    };

    it('works with collapsed postcraft directory', () => {
      expect(containsEmailTemplate('first\\second\\postcraft.tsx', directory)).toBe(
        true,
      );
    });

    it('works with postcraft inside a single sub directory', () => {
      expect(
        containsEmailTemplate('welcome\\koala-welcome.tsx', directory),
      ).toBe(true);
      expect(
        containsEmailTemplate('welcome\\missing-template.tsx', directory),
      ).toBe(false);
    });

    it('works with postcraft inside a second sub directory', () => {
      expect(
        containsEmailTemplate(
          'magic-links\\resend\\verify-postcraft.tsx',
          directory,
        ),
      ).toBe(true);
      expect(
        containsEmailTemplate(
          'magic-links\\resend\\missing-template',
          directory,
        ),
      ).toBe(false);
    });
  });

  describe('with unix path separator', () => {
    const directory: EmailsDirectory = {
      absolutePath: '/fake/path/postcraft',
      directoryName: 'postcraft',
      relativePath: '',
      emailFilenames: [],
      subDirectories: [
        {
          absolutePath: '/fake/path/postcraft/magic-links',
          directoryName: 'magic-links',
          relativePath: 'magic-links',
          emailFilenames: [
            'aws-verify-email',
            'linear-login-code',
            'notion-magic-link',
            'plaid-verify-identity',
            'raycast-magic-link',
            'slack-confirm',
          ],
          subDirectories: [
            {
              absolutePath: '/fake/path/postcraft/magic-links/resend',
              directoryName: 'resend',
              emailFilenames: ['verify-postcraft'],
              relativePath: 'magic-links/resend',
              subDirectories: [],
            },
          ],
        },
        {
          absolutePath: '/fake/path/postcraft/first/second',
          directoryName: 'first/second',
          relativePath: 'first/second',
          emailFilenames: ['postcraft'],
          subDirectories: [],
        },
        {
          absolutePath: '/fake/path/postcraft/newsletters',
          directoryName: 'newsletters',
          relativePath: 'newsletters',
          emailFilenames: [
            'codepen-challengers',
            'google-play-policy-update',
            'stack-overflow-tips',
          ],
          subDirectories: [],
        },
        {
          absolutePath: '/fake/path/postcraft/notifications',
          directoryName: 'notifications',
          relativePath: 'notifications',
          emailFilenames: [
            'github-access-token',
            'papermark-year-in-review',
            'vercel-invite-user',
            'yelp-recent-login',
          ],
          subDirectories: [],
        },
        {
          absolutePath: '/fake/path/postcraft/receipts',
          directoryName: 'receipts',
          relativePath: 'receipts',
          emailFilenames: ['apple-receipt', 'nike-receipt'],
          subDirectories: [],
        },
        {
          absolutePath: '/fake/path/postcraft/reset-password',
          directoryName: 'reset-password',
          relativePath: 'reset-password',
          emailFilenames: ['dropbox-reset-password', 'twitch-reset-password'],
          subDirectories: [],
        },
        {
          absolutePath: '/fake/path/postcraft/reviews',
          directoryName: 'reviews',
          relativePath: 'reviews',
          emailFilenames: ['airbnb-review', 'amazon-review'],
          subDirectories: [],
        },
        {
          absolutePath: '/fake/path/postcraft/welcome',
          directoryName: 'welcome',
          relativePath: 'welcome',
          emailFilenames: [
            'koala-welcome',
            'netlify-welcome',
            'stripe-welcome',
          ],
          subDirectories: [],
        },
      ],
    };

    it('works with collapsed postcraft directory', () => {
      expect(containsEmailTemplate('first/second/postcraft', directory)).toBe(true);
    });

    it('works with postcraft inside a single sub directory', () => {
      expect(containsEmailTemplate('welcome/koala-welcome', directory)).toBe(
        true,
      );
      expect(containsEmailTemplate('welcome/missing-template', directory)).toBe(
        false,
      );
    });

    it('works with postcraft inside a second sub directory', () => {
      expect(
        containsEmailTemplate('magic-links/resend/verify-postcraft', directory),
      ).toBe(true);
      expect(
        containsEmailTemplate('magic-links/resend/missing-template', directory),
      ).toBe(false);
    });
  });
});
