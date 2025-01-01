import { ThemeSwitcher } from '@/components/theme-switcher';
import { ParticlesComponent } from '@/components/particles';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <ThemeSwitcher />
      <ParticlesComponent />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start font-mono text-center">
        <span className="font-bold text-4xl lg:text-5xl">
          Hi, I&apos;m Oliver.
        </span>
        <span className="text-3xl">
          Bringing unique web experiences to life.
        </span>
        <Button
          asChild
          className="w-full uppercase font-bold text-xl h-16 mt-5"
          size="lg"
        >
          <Link href="/">Start Here</Link>
        </Button>
      </main>
      <div>Footer</div>
    </div>
  );
}
