import { Worker as JestWorker } from 'jest-worker';

/**
 * npx ts-node src/module/jest/jest-worker.ts
 */

type WorkerFn = { heavyTask: (args: { milliseconds: number }) => Promise<string> };

// used for parallelization of tasks
async function main() {
  const worker = new JestWorker(require.resolve('./jest-heavy-task'), {
    enableWorkerThreads: true,
  }) as JestWorker & WorkerFn;

  // run 2 tasks in parallel with different arguments
  const results = await Promise.all([
    worker.heavyTask({ milliseconds: 1000 }),
    worker.heavyTask({ milliseconds: 2000 }),
  ]);

  console.log(results);
  process.exit(0);
}

main();
