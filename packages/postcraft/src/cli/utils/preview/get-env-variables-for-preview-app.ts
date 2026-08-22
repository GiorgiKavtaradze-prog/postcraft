import path from 'node:path';

export const getEnvVariablesForPreviewApp = (
  relativePathToEmailsDirectory: string,
  previewServerLocation: string,
  cwd: string,
  resendApiKey?: string,
) => {
  return {
    POSTCRAFT_INTERNAL_EMAILS_DIR_RELATIVE_PATH:
      relativePathToEmailsDirectory,
    POSTCRAFT_INTERNAL_EMAILS_DIR_ABSOLUTE_PATH: path.resolve(
      cwd,
      relativePathToEmailsDirectory,
    ),
    POSTCRAFT_INTERNAL_PREVIEW_SERVER_LOCATION: previewServerLocation,
    POSTCRAFT_INTERNAL_USER_PROJECT_LOCATION: cwd,
    POSTCRAFT_INTERNAL_RESEND_API_KEY: resendApiKey,
  } as const;
};
