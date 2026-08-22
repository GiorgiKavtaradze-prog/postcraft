const srcAttributeRegex = /src\s*=\s*"(?<URI>\/static.+)"/g;
const fontsUriFunctionRegex = /url\((?<URI>\/fonts[^)]+)\)/g;
const fontsUriStringRegex = /(?:"|'|`)(?<URI>\/fonts[^"'`]+)(?:"|'|`)/g;

export const convertUrisIntoUrls = (code: string) => {
  srcAttributeRegex.lastIndex = 0;
  fontsUriFunctionRegex.lastIndex = 0;
  fontsUriStringRegex.lastIndex = 0;
  return code
    .replaceAll(
      srcAttributeRegex,
      (_match, uri) => `src="https://postcraft${uri}"`,
    )
    .replaceAll(
      fontsUriFunctionRegex,
      (_match, uri) => `url(https://postcraft${uri})`,
    )
    .replaceAll(fontsUriStringRegex, (_match, uri: string) =>
      _match.replace(uri, `https://postcraft${uri}`),
    );
};
