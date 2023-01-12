import { Title } from "@solidjs/meta";
import type { JSX } from "solid-js";

import Button from "🍐/components/button";
import Link from "🍐/components/link";
import Section from "🍐/layout/section";

const Home = (): JSX.Element => (
  <>
    <Title>Pear Loans: Home Page</Title>
    <Section>
      <h1 class="text-4xl font-semibold sm:text-5xl">
        Help out your{" "}
        <abbr
          class="bg-gradient-to-bl from-green-700 to-emerald-400 bg-clip-text font-extrabold text-transparent decoration-green-500 decoration-wavy decoration-2 underline-offset-4 dark:from-green-500 dark:to-emerald-200"
          title='🍐 "pears"'
        >
          peers
        </abbr>{" "}
        with their{" "}
        <span class="bg-gradient-to-bl from-green-700 to-emerald-400 bg-clip-text font-extrabold text-transparent dark:from-green-500 dark:to-emerald-200">
          student loans
        </span>
      </h1>
      <h2 class="text-2xl">
        💸{" "}
        <span class="font-extrabold text-green-600 dark:text-green-400">
          Donate
        </span>{" "}
        to your peers to help.
      </h2>
      <h2 class="text-2xl">
        📝{" "}
        <span class="font-extrabold text-green-600 dark:text-green-400">
          List
        </span>{" "}
        your own.
      </h2>
      <div class="txt-green-50 space-x-3">
        <span>
          <Link href="/donate">💸 Donate</Link>
        </span>
        <span>
          <Link href="/account">📝 List</Link>
        </span>
      </div>
    </Section>

    <Section>
      <h2 class="text-center text-4xl font-semibold sm:text-5xl">
        <span class="inline-block bg-gradient-to-bl from-red-700 to-red-400 bg-clip-text font-extrabold text-transparent dark:from-red-500 dark:to-red-200">
          Student loans
        </span>{" "}
        are a huge{" "}
        <span class="bg-gradient-to-bl from-red-700 to-red-400 bg-clip-text font-extrabold text-transparent dark:from-red-500 dark:to-red-200">
          burden
        </span>
      </h2>
      <ul class="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        <li class="flex h-full items-center justify-center rounded-xl border border-solid border-transparent bg-red-500 py-5 px-3 text-center text-red-100 transition-transform hover:scale-110 hover:border-red-900 dark:bg-red-200 dark:text-red-900 dark:hover:border-red-200">
          <figure>
            <div class="text-4xl">💰</div>
            <blockquote>
              <span class="block text-4xl font-bold">$1.7 Trillion</span> in
              just Federal student loan debt
            </blockquote>
          </figure>
        </li>
        <li class="flex h-full items-center justify-center rounded-xl border border-solid border-transparent bg-red-300 py-5 px-3 text-center text-red-900 transition-transform hover:scale-110 hover:border-red-900 dark:text-red-900 dark:hover:border-red-200">
          <figure>
            <div class="text-4xl">💳</div>
            <blockquote>
              <span class="block text-4xl font-bold">$37,000</span> average loan
              balance
            </blockquote>
          </figure>
        </li>
        <li class="flex h-full items-center justify-center rounded-xl border border-solid border-transparent bg-red-300 py-5 px-3 text-center text-red-900 transition-transform hover:scale-110 hover:border-red-900 dark:bg-red-800 dark:text-red-200 dark:hover:border-red-200">
          <figure>
            <div class="text-4xl">💸</div>
            <blockquote>
              <span class="block text-4xl font-bold">$300</span> average monthly
              payment
            </blockquote>
          </figure>
        </li>
        <li class="flex h-full items-center justify-center rounded-xl border border-solid border-transparent bg-red-200 py-5 px-3 text-center text-red-900 transition-transform hover:scale-110 hover:border-red-900 dark:bg-red-600 dark:text-red-200 dark:hover:border-red-200">
          <figure>
            <div class="text-4xl">🧑‍🎓</div>
            <blockquote>
              <span class="block text-4xl font-bold">94%</span> borrow just for
              undergraduate education
            </blockquote>
          </figure>
        </li>
        <li class="flex h-full items-center justify-center rounded-xl border border-solid border-transparent bg-red-900 py-5 px-3 text-center text-red-100 transition-transform hover:scale-110 hover:border-red-900 dark:bg-red-200 dark:text-red-900 dark:hover:border-red-200">
          <figure>
            <div class="text-4xl">🎓</div>
            <blockquote>
              <span class="block text-4xl font-bold">65%</span> graduate with
              debt
            </blockquote>
          </figure>
        </li>
        <li class="flex h-full items-center justify-center rounded-xl border border-solid border-transparent bg-red-500 py-5 px-3 text-center text-red-100 transition-transform hover:scale-110 hover:border-red-900 dark:bg-red-200 dark:text-red-900 dark:hover:border-red-200">
          <figure>
            <div class="text-4xl">📉</div>
            <blockquote>
              <span class="block text-4xl font-bold">15%</span> of all student
              loans are in default
            </blockquote>
          </figure>
        </li>
        <li class="flex h-full items-center justify-center rounded-xl border border-solid border-transparent bg-red-300 py-5 px-3 text-center text-red-900 transition-transform hover:scale-110 hover:border-red-900 dark:text-red-900 dark:hover:border-red-200">
          <figure>
            <div class="text-4xl">📈</div>

            <blockquote>
              <span class="block text-4xl font-bold">23%</span> annual growth
              rate of the total loan debt balance
            </blockquote>
          </figure>
        </li>
        <li class="flex h-full items-center justify-center rounded-xl border border-solid border-transparent bg-red-300 py-5 px-3 text-center text-red-900 transition-transform hover:scale-110 hover:border-red-900 dark:bg-red-800 dark:text-red-200 dark:hover:border-red-200">
          <figure>
            <div class="text-4xl">👨‍👩‍👧‍👦</div>
            <blockquote>
              <span class="block text-4xl font-bold">45 million</span> students
              with a loan balance
            </blockquote>
          </figure>
        </li>
        <li class="flex h-full items-center justify-center rounded-xl border border-solid border-transparent bg-red-200 py-5 px-3 text-center text-red-900 transition-transform hover:scale-110 hover:border-red-900 dark:bg-red-600 dark:text-red-200 dark:hover:border-red-200">
          <figure>
            <div class="text-4xl">🏦</div>
            <blockquote>
              <span class="block text-4xl font-bold">92%</span> of all loans are
              owned by the Department of Education
            </blockquote>
          </figure>
        </li>
      </ul>
    </Section>

    <Section>
      <h2 class="text-center text-4xl font-semibold sm:text-5xl">
        <span class="inline-block bg-gradient-to-bl from-green-700 to-emerald-400 bg-clip-text font-extrabold leading-loose text-transparent dark:from-green-500 dark:to-emerald-200">
          Help
        </span>{" "}
        you and your{" "}
        <abbr title="peers" class="no-underline">
          🍐s
        </abbr>{" "}
        <span class="inline-block bg-gradient-to-bl from-green-700 to-emerald-400 bg-clip-text font-extrabold leading-loose text-transparent dark:from-green-500 dark:to-emerald-200">
          grow
        </span>
      </h2>

      <div class="grid grid-cols-1 items-center space-y-5 lg:grid-cols-12 lg:space-x-5">
        <div class="z-20 space-y-3 rounded-lg bg-gradient-to-bl from-green-200 to-green-400 px-10 py-5 dark:from-green-400 dark:to-green-600 lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:shadow-lg">
          <h3 class="text-xl">
            <span class="font-bold text-green-900 dark:text-green-50">
              Donate
            </span>{" "}
            directly to your peers in a variety of ways
          </h3>
          <div class="grid grid-cols-3">
            <ul class="space-y-2">
              <li>😄 Individually</li>
              <li>👨‍👩‍👧‍👦 To Multiple</li>
              <li>🤔 Randomly</li>
            </ul>
            <ul class="space-y-2">
              <li>🏫 By school</li>
              <li>📚 By major</li>
            </ul>
            <ul class="space-y-2">
              <li>🧑🏽‍🎓👩🏻‍🎓👨🏿‍🎓🏳️‍🌈 By demographic</li>
              <li>⚽️ By hobby</li>
              <li>🗺 By location</li>
            </ul>
          </div>
        </div>
        <div class="z-10 select-none space-y-5 rounded-lg bg-slate-100 p-5 py-2 dark:bg-slate-900 lg:col-span-7 lg:col-start-5 lg:row-start-1 lg:shadow-lg">
          <div class="flex h-10 items-center">
            <div class="mr-4 flex space-x-2">
              <div class="ml-2 h-3 w-3 rounded-full bg-red-500" />
              <div class="h-3 w-3 rounded-full bg-yellow-500" />
              <div class="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <div class="flex space-x-2">
              <div class="h-2.5 w-2.5 -rotate-[135deg] border-t-[1.5px] border-r-[1.5px] border-slate-600 dark:border-slate-300" />
              <div class="h-2.5 w-2.5 rotate-45 border-t-[1.5px] border-r-[1.5px] border-slate-300 dark:border-slate-600" />
            </div>
            <div class="flex-1">
              <div class="mx-auto w-[85%] rounded-md bg-slate-200 py-1 text-center text-sm text-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 lg:w-[75%]">
                pear.loans
                <span class="text-slate-400 dark:text-slate-500">/donate</span>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-5 sm:grid-cols-3">
            <figure class="flex rounded-lg bg-slate-200 p-3 dark:bg-slate-700">
              <figcaption class="space-y-1">
                <div class="flex items-center space-x-2">
                  <div class="flex h-12 w-12 items-center justify-center rounded-full border border-green-600 bg-gradient-to-bl from-green-100 to-green-300 text-xl dark:from-green-500 dark:to-emerald-200">
                    😙
                  </div>
                  <h3 class="text-base font-extrabold text-slate-900 dark:text-slate-300">
                    Maria Stone
                  </h3>
                </div>
                <div class="text-xs text-slate-500 dark:text-slate-400">
                  Standford University
                </div>
                <div class="text-xs text-slate-400 dark:text-slate-500">
                  🧮 Mathematics
                </div>
              </figcaption>
            </figure>
            <figure class="flex rounded-lg bg-slate-200 p-3 dark:bg-slate-700">
              <figcaption class="space-y-1">
                <div class="flex items-center space-x-2">
                  <div class="flex h-12 w-12 items-center justify-center rounded-full border border-green-600 bg-gradient-to-bl from-green-100 to-green-300 text-xl dark:from-green-500 dark:to-emerald-200">
                    🥸
                  </div>
                  <h3 class="text-base font-extrabold text-slate-900 dark:text-slate-300">
                    John Doe
                  </h3>
                </div>
                <div class="text-xs text-slate-500 dark:text-slate-400">
                  United States University
                </div>
                <div class="text-xs text-slate-400 dark:text-slate-500">
                  📊 Statistics
                  <br />
                  🧪 Chemistry
                </div>
              </figcaption>
            </figure>
            <figure class="flex rounded-lg bg-slate-200 p-3 dark:bg-slate-700">
              <figcaption class="space-y-1">
                <div class="flex items-center space-x-2">
                  <div class="flex h-12 w-12 items-center justify-center rounded-full border border-green-600 bg-gradient-to-bl from-green-100 to-green-300 text-xl dark:from-green-500 dark:to-emerald-200">
                    😎
                  </div>
                  <h3 class="text-base font-extrabold text-slate-900 dark:text-slate-300">
                    Ed Massey
                  </h3>
                </div>
                <div class="text-xs text-slate-500 dark:text-slate-400">
                  Harvard University
                </div>
                <div class="text-xs text-slate-400 dark:text-slate-500">
                  🗣 Spanish
                  <br />
                  ✏️ English
                </div>
              </figcaption>
            </figure>
            <figure class="flex rounded-lg bg-slate-200 p-3 dark:bg-slate-700">
              <figcaption class="space-y-1">
                <div class="flex items-center space-x-2">
                  <div class="flex h-12 w-12 items-center justify-center rounded-full border border-green-600 bg-gradient-to-bl from-green-100 to-green-300 text-xl dark:from-green-500 dark:to-emerald-200">
                    🤔
                  </div>
                  <h3 class="text-base font-extrabold text-slate-900 dark:text-slate-300">
                    Toni Bailey
                  </h3>
                </div>
                <div class="text-xs text-slate-500 dark:text-slate-400">
                  Columbia University
                </div>
                <div class="text-xs text-slate-400 dark:text-slate-500">
                  💻 Computer Science
                  <br />
                  💽 Databases
                </div>
              </figcaption>
            </figure>
            <figure class="flex rounded-lg bg-slate-200 p-3 dark:bg-slate-700">
              <figcaption class="space-y-1">
                <div class="flex items-center space-x-2">
                  <div class="flex h-12 w-12 items-center justify-center rounded-full border border-green-600 bg-gradient-to-bl from-green-100 to-green-300 text-xl dark:from-green-500 dark:to-emerald-200">
                    🤩
                  </div>
                  <h3 class="text-base font-extrabold text-slate-900 dark:text-slate-300">
                    Tasha Elliot
                  </h3>
                </div>
                <div class="text-xs text-slate-500 dark:text-slate-400">
                  Chapel Hill
                </div>
                <div class="text-xs text-slate-400 dark:text-slate-500">
                  👨‍👩‍👦 Sociology
                </div>
              </figcaption>
            </figure>
            <figure class="flex rounded-lg bg-slate-200 p-3 dark:bg-slate-700">
              <figcaption class="space-y-1">
                <div class="flex items-center space-x-2">
                  <div class="flex h-12 w-12 items-center justify-center rounded-full border border-green-600 bg-gradient-to-bl from-green-100 to-green-300 text-xl dark:from-green-500 dark:to-emerald-200">
                    😋
                  </div>
                  <h3 class="text-base font-extrabold text-slate-900 dark:text-slate-300">
                    Tami Harper
                  </h3>
                </div>
                <div class="text-xs text-slate-500 dark:text-slate-400">
                  Oxford University
                </div>
                <div class="text-xs text-slate-400 dark:text-slate-500">
                  💵 Accounting
                  <br />
                  🏢 Business
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 items-center space-y-5 lg:grid-cols-12 lg:space-x-5">
        <div class="z-20 space-y-3 rounded-lg bg-gradient-to-bl  from-green-100 to-green-300 px-10 py-5 dark:from-green-300 dark:to-green-600 lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:shadow-lg">
          <h3 class="text-xl">
            <span class="font-bold text-green-900 dark:text-green-50">
              List
            </span>{" "}
            your own student loan
          </h3>
          <div class="grid grid-cols-2 space-x-2">
            <ul class="space-y-2">
              <li>🏔 Talk about your journey</li>
              <li>📣 Describe your studies</li>
            </ul>
            <ul class="space-y-2">
              <li>💸 Get paid by generous donors</li>
              <li>📉 Get insights on your loan progress</li>
            </ul>
          </div>
        </div>
        <div class="z-10 select-none space-y-5 rounded-lg bg-slate-100 p-5 py-2 dark:bg-slate-900 lg:col-span-7 lg:col-start-2 lg:row-start-1 lg:shadow-lg">
          <div class="flex h-10 items-center">
            <div class="mr-4 flex space-x-2">
              <div class="ml-2 h-3 w-3 rounded-full bg-red-500" />
              <div class="h-3 w-3 rounded-full bg-yellow-500" />
              <div class="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <div class="flex space-x-2">
              <div class="h-2.5 w-2.5 -rotate-[135deg] border-t-[1.5px] border-r-[1.5px] border-slate-600 dark:border-slate-300" />
              <div class="h-2.5 w-2.5 rotate-45 border-t-[1.5px] border-r-[1.5px] border-slate-300 dark:border-slate-600" />
            </div>
            <div class="flex-1">
              <div class="mx-auto w-[85%] rounded-md bg-slate-200 py-1 text-center text-sm text-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 lg:w-[75%]">
                pear.loans
                <span class="text-slate-400 dark:text-slate-500">/account</span>
              </div>
            </div>
          </div>
          <figure class="p-5 pt-3 pb-0">
            <figcaption class="flex space-x-3">
              <div class="flex h-20 w-20 items-center justify-center rounded-full border border-green-600 bg-gradient-to-bl from-green-100 to-green-300 p-5 text-3xl dark:from-green-500 dark:to-emerald-200">
                🥸
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-extrabold text-slate-900 dark:text-slate-300">
                  John Doe
                </h3>
                <div class="text-sm text-slate-500 dark:text-slate-400">
                  United States University
                </div>
                <div class="text-sm text-slate-400 dark:text-slate-500">
                  📊 Statistics Major 🧪 Chemistry Minor
                </div>
              </div>
            </figcaption>
          </figure>
          <div class="flex flex-col items-center justify-center space-x-3 space-y-3 sm:flex-row sm:space-y-0">
            <h3 class="rounded-full bg-slate-200 py-2 px-3 text-3xl dark:bg-slate-700">
              <span class="bg-gradient-to-bl from-green-700 to-emerald-400 bg-clip-text font-extrabold text-transparent decoration-green-500 dark:from-green-500 dark:to-emerald-200">
                $14,395.14
              </span>
            </h3>
            <div class="flex space-x-3">
              <Button class="pointer-events-none" tabindex={-1}>
                💸 Donate
              </Button>
              <Button class="pointer-events-none" tabindex={-1}>
                🧺 Add To Basket
              </Button>
            </div>
          </div>
          <p class="mx-5 pb-10">
            Bacon ipsum dolor amet picanha cupim porchetta, chislic landjaeger
            meatloaf ham rump sausage. Ground round venison ribeye salami
            kielbasa pork belly. Turkey ribeye pancetta, bresaola shankle
            alcatra tail meatloaf brisket kevin swine chislic buffalo. Meatball
            flank boudin, kielbasa venison tri-tip prosciutto beef ribs buffalo
            ham hock doner shankle tail ribeye.
          </p>
        </div>
      </div>
    </Section>
  </>
);

export default Home;
