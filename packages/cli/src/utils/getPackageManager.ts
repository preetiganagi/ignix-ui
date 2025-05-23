import { detect } from '@antfu/ni';

export async function getPackageManager(
  targetDir: string
): Promise<'yarn' | 'pnpm' | 'bun' | 'npm'> {
  const packageManager = await detect({ programmatic: true, cwd: targetDir });

  // Handle specific versions of package managers
  if (packageManager === 'yarn@berry') return 'yarn';
  if (packageManager === 'pnpm@6') return 'pnpm';
  if (packageManager === 'bun') return 'bun';
  if (packageManager === 'deno') return 'npm'; // Default to npm for Deno environments

  // Default to npm if no match
  return packageManager ?? 'npm';
}
