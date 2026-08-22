import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { getUiLocation } from '../utils/get-ui-location.js';

export const start = async () => {
  try {
    const previewServerLocation = await getUiLocation();

    const usersProjectLocation = process.cwd();
    const builtPreviewPath = path.resolve(
      usersProjectLocation,
      './.postcraft',
    );
    if (!fs.existsSync(builtPreviewPath)) {
      console.error(
        "Could not find .postcraft, maybe you haven't ran postcraft build?",
      );
      process.exit(1);
    }

    const nextStart = spawn('npx', ['next', 'start', builtPreviewPath], {
      cwd: previewServerLocation,
      stdio: 'inherit',
    });

    process.on('SIGINT', () => {
      nextStart.kill('SIGINT');
    });

    nextStart.on('exit', (code) => {
      process.exit(code ?? 0);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
