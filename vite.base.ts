/**
 * Function to abstract build configurations for vite config.
 *
 * @param path - resolve path for entry file import.
 * @param packageName - Package Name defined on `package.json`.
 * @param restConfig - Other properties used in vite `config.build`.
 */
export const viteBuildBaseConfig = <T>(
  path: string,
  packageName: string,
  restConfig: T,
) => ({
  build: {
    lib: {
      entry: path,
      fileName: (format: string) => `${packageName}/${format}/index.js`,
      formats: ['es', 'cjs'],
    },
    ...restConfig,
  },
});
