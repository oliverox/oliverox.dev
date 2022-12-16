import Head from "next/head";
import Link from "next/link";
import { type NextPage } from "next";
import Layout from "../components/Layout/Layout";

const TechStack: NextPage = () => {
  return (
    <Layout h1="Favorite Tech Stack">
      <Head>
        <title>Favorite Tech Stack</title>
      </Head>
      <main className="-mt-32">
        <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <article className="prose mx-auto rounded-lg border-2 border-neutral-content bg-base-100 px-5 py-12 pb-20 text-base-content shadow sm:px-6">
            <p>
              Lately, I&apos;ve been looking at freelancing again. The tech
              landscape has changed a lot since 2018. I spent a few days
              researching on a good, powerful and easy to use tech stack to
              allow me to ramp up fast on delivering high quality cost-effective
              full-stack web applications. Below is what I ended up with.
            </p>
            <p>
              Imagine a tech stack allowing you to code both the frontend and
              backend in one language. Now, imagine if you made a breaking
              change to your backend API, wouldn&apos;t it be nice if this change was
              highlighted in the frontend code calling that API? Even better,
              what if you added a column to your table in your database?
              Wouldn&apos;t it be cool if your frontend code showed you where to
              update the mismatched data?
            </p>
            <p>
              All of this is available today, and what I consider the best tech
              stack out there. Code your frontend with{" "}
              <Link
                className="underline-offset-4"
                href="https://nextjs.org/"
                target="_blank"
              >
                Next.js
              </Link>{" "}
              and{" "}
              <Link
                className="underline-offset-4"
                href="https://tailwindcss.com/"
                target="_blank"
              >
                TailwindCSS
              </Link>{" "}
              together with your backend in TypeScript, within one GitHub
              repository. Connect and talk to your database, also with
              TypeScript. Build your API using{" "}
              <Link
                className="underline-offset-4"
                href="https://trpc.io/"
                target="_blank"
              >
                tRPC
              </Link>{" "}
              (also in TypeScript) and a bonus, get top notch authentication
              fully baked in.{" "}
              <Link
                href="https://create.t3.gg/"
                target="_blank"
                className="underline-offset-4"
              >
                The cool guys at Create T3 App
              </Link>{" "}
              made all this possible. This stack is a dream come true! I cannot
              recommend it enough. This current webapp is actually built on top
              of{" "}
              <Link
                className="underline-offset-4"
                href="https://github.com/t3-oss/create-t3-app"
                target="_target"
              >
                Create-T3-App
              </Link>
              .
            </p>
            <div className="mt-10 grid grid-cols-2 gap-10">
              <Link
                href="https://nextjs.org/"
                target="_blank"
                className="flex flex-col items-center gap-2 fill-base-content no-underline hover:fill-accent hover:text-accent"
              >
                <svg className="h-8 w-8" viewBox="0 0 24 24">
                  <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z" />
                </svg>
                <span className="text-lg font-semibold">Next.js</span>
              </Link>
              <Link
                href="https://tailwindcss.com/"
                target="_blank"
                className="flex flex-col items-center gap-2 fill-base-content no-underline hover:fill-accent hover:text-accent"
              >
                <svg className="h-8 w-8" viewBox="0 0 24 24">
                  <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
                </svg>
                <span className="text-lg font-semibold">TailwindCSS</span>
              </Link>
              <Link
                href="https://www.typescriptlang.org/"
                target="_blank"
                className="col-span-2 flex flex-col items-center gap-2 fill-base-content no-underline hover:fill-accent hover:text-accent"
              >
                <svg className="h-8 w-8" viewBox="0 0 24 24">
                  <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
                </svg>
                <span className="text-lg font-semibold">TypeScript</span>
              </Link>
              <Link
                href="https://trpc.io/"
                target="_blank"
                className="flex flex-col items-center gap-2 fill-base-content no-underline hover:fill-accent hover:text-accent"
              >
                <svg className="h-8 w-8" viewBox="0 0 24 24">
                  <path d="M24 12c0 6.62-5.38 12-12 12S0 18.62 0 12 5.38 0 12 0s12 5.38 12 12ZM1.21 12A10.78 10.78 0 0 0 12 22.79 10.78 10.78 0 0 0 22.79 12 10.78 10.78 0 0 0 12 1.21 10.78 10.78 0 0 0 1.21 12Zm10.915-6.086 2.162 1.248a.25.25 0 0 1 .125.217v1.103l2.473 1.428a.25.25 0 0 1 .125.217v2.355l.955.551a.25.25 0 0 1 .125.217v2.496a.25.25 0 0 1-.125.217l-2.162 1.248a.25.25 0 0 1-.25 0l-.956-.552-2.472 1.427a.25.25 0 0 1-.25 0l-2.472-1.427-.956.552a.25.25 0 0 1-.25 0l-2.162-1.248a.25.25 0 0 1-.125-.217V13.25a.25.25 0 0 1 .125-.217l.955-.551v-2.355a.25.25 0 0 1 .125-.217l2.473-1.428V7.38a.25.25 0 0 1 .125-.217l2.162-1.248a.25.25 0 0 1 .25 0Zm1.268 10.049a.25.25 0 0 1-.125-.217V13.25a.25.25 0 0 1 .125-.217l2.16-1.248a.25.25 0 0 1 .25 0l.707.408v-1.922l-2.098-1.21v.814a.25.25 0 0 1-.125.217l-2.162 1.248a.25.25 0 0 1-.25 0l-2.162-1.248a.25.25 0 0 1-.125-.217V9.06L7.49 10.271v1.922l.707-.408a.25.25 0 0 1 .25 0l2.16 1.248a.25.25 0 0 1 .125.217v2.496a.25.25 0 0 1-.125.217l-.705.408L12 17.582l2.098-1.211ZM10.088 9.73l1.662.96V8.766l-1.662-.955Zm3.824 0V7.811l-1.662.955v1.924ZM12 6.418l-1.66.96 1.66.954 1.66-.954Zm-5.59 9.184 1.66.958v-1.921l-1.66-.956Zm3.822 0v-1.92l-1.662.957v1.923Zm-1.91-3.311-1.662.96 1.661.955 1.66-.956Zm5.446 3.31 1.66.96v-1.922l-1.66-.956Zm3.822 0v-1.918l-1.662.956v1.922Zm-1.912-3.31-1.66.96 1.66.955 1.66-.956Z" />
                </svg>
                <span className="text-lg font-semibold">tRPC</span>
              </Link>
              <Link
                href="https://www.prisma.io/"
                target="_blank"
                className="flex flex-col items-center gap-2 fill-base-content no-underline hover:fill-accent hover:text-accent"
              >
                <svg className="h-8 w-8" viewBox="0 0 24 24">
                  <path d="M21.8068 18.2848L13.5528.7565c-.207-.4382-.639-.7273-1.1286-.7541-.5023-.0293-.9523.213-1.2062.6253L2.266 15.1271c-.2773.4518-.2718 1.0091.0158 1.4555l4.3759 6.7786c.2608.4046.7127.6388 1.1823.6388.1332 0 .267-.0188.3987-.0577l12.7019-3.7568c.3891-.1151.7072-.3904.8737-.7553s.1633-.7828-.0075-1.1454zm-1.8481.7519L9.1814 22.2242c-.3292.0975-.6448-.1873-.5756-.5194l3.8501-18.4386c.072-.3448.5486-.3996.699-.0803l7.1288 15.138c.1344.2856-.019.6224-.325.7128z" />
                </svg>
                <span className="text-lg font-semibold">Prisma</span>
              </Link>
            </div>

            <div className="mt-12 flex justify-center">
              <Link href="/guestbook" className="btn-accent btn">
                Next →
              </Link>
            </div>
          </article>
        </div>
      </main>
    </Layout>
  );
};

export default TechStack;
