import { component$ } from "@builder.io/qwik";
import {
	faChartLineUp,
	faCircleDollarToSlot,
	faCoin,
	faCoins,
	faGauge,
	faGraduationCap,
	faHandHoldingDollar,
	faHandsHoldingDollar,
	faLandmark,
	faMoneyBill,
	faMoneyBill1Wave,
	faPear,
	faPerson,
	faPersonCircleCheck,
	faSchool
} from "@fortawesome/pro-duotone-svg-icons";
import Fa from "~/components/Fa";
import AnimateOnScroll from "~/components/container/AnimateOnScroll";
import IconCard from "~/components/container/IconCard";

export default component$(() => (
	<>
		<section class="h-[60vh] flex items-center justify-center overflow-hidden py-20 sm:h-[83vh] md:py-32">
			<div class="relative">
				<div class="pointer-events-none absolute z-10 h-full w-full fade-up animate-delay-700">
					<div class="text-green-800 dark:text-green-500">
						<Fa
							icon={faPear}
							class="animate-wiggle absolute right-8 w-20 rotate-12 text-4xl -top-18 md:text-7xl sm:text-6xl md:-top-20 sm:-top-18"
						/>
						<Fa
							icon={faGraduationCap}
							class="animate-wiggle absolute bottom-12 left-2 w-20 text-4xl sm:bottom-20 sm:left-6 -rotate-12 md:text-7xl sm:text-6xl"
						/>
					</div>
					<div class="text-blue-800 dark:text-blue-500">
						<Fa
							icon={faSchool}
							class="animate-wiggle absolute right-2 top-18 w-20 text-4xl md:right-16 md:top-34 sm:left-auto sm:right-8 sm:top-24 -rotate-12 md:text-7xl sm:text-6xl"
						/>
						<Fa
							icon={faMoneyBill1Wave}
							class="animate-wiggle absolute left-20 w-20 rotate-12 text-4xl -bottom-20 md:text-7xl sm:text-6xl md:-bottom-24 sm:-bottom-20"
						/>
					</div>
				</div>
				<h1 class="relative z-30 inline-block text-center text-6xl font-extrabold md:text-8xl sm:text-7xl">
					<span class="block">
						Help out your{" "}
						<span class="inline-block fade-up animate-delay-300 from-green-700 to-blue-500 bg-gradient-to-br bg-clip-text pb-3 text-transparent dark:from-green-300 dark:to-blue-300">
							peers
						</span>
					</span>
					<span class="block">with their</span>
					<span class="block fade-up animate-delay-500 from-green-700 to-blue-500 bg-gradient-to-br bg-clip-text text-transparent dark:from-green-300 dark:to-blue-300">
						student loans
					</span>
				</h1>
			</div>
		</section>

		<section class="relative flex flex-col justify-center py-20 md:py-32">
			<h2 class="mb-10 text-center text-4xl font-extrabold sm:text-5xl sm:leading-[1.125]">
				<span class="block">Student Loans are a</span>
				<AnimateOnScroll>
					<span class="block animate-pulse from-red-700 to-orange-500 bg-gradient-to-br bg-clip-text pb-1 text-transparent dark:from-red-300 dark:to-orange-300">
						huge problem
					</span>
				</AnimateOnScroll>
			</h2>

			<div class="grid gap-3 px-5 lg:grid-cols-3 sm:grid-cols-2 md:gap-10 sm:gap-5 sm:px-10">
				<IconCard icons={[faMoneyBill, faLandmark]} class="bg-orange-300 dark:bg-orange-600">
					<div class="text-center text-black opacity-75 dark:text-white">
						<h3 class="text-4xl font-extrabold md:text-5xl sm:text-3xl sm:text-5xl">
							~$1.73 Trillion
						</h3>
						<p class="text-xl font-bold md:text-2xl">Student loan debt in the US</p>
					</div>
				</IconCard>
				<IconCard icons={[faGauge, faGraduationCap]} class="bg-red-500 dark:bg-red-800">
					<div class="text-center text-black opacity-75 dark:text-white">
						<h3 class="text-4xl font-extrabold md:text-5xl sm:text-3xl sm:text-5xl">~$20,000</h3>
						<p class="text-xl font-bold md:text-2xl">Median student loan debt</p>
					</div>
				</IconCard>
				<IconCard icons={[faPerson, faHandHoldingDollar]} class="bg-yellow-400 dark:bg-yellow-700">
					<div class="text-center text-black opacity-75 dark:text-white">
						<h3 class="text-4xl font-extrabold md:text-5xl sm:text-3xl sm:text-5xl">~$220</h3>
						<p class="text-xl font-bold md:text-2xl">Median monthly payment</p>
					</div>
				</IconCard>
				<IconCard icons={[faMoneyBill, faChartLineUp]} class="bg-orange-200 dark:bg-orange-400">
					<div class="text-center text-black opacity-75 dark:text-white">
						<h3 class="text-4xl font-extrabold md:text-5xl sm:text-3xl sm:text-5xl">~47%</h3>
						<p class="text-xl font-bold md:text-2xl">of students with growing loan balances</p>
					</div>
				</IconCard>
				<IconCard icons={[faCoins, faCoin]} class="bg-red-300 dark:bg-red-950">
					<div class="text-center text-black opacity-75 dark:text-white">
						<h3 class="text-4xl font-extrabold md:text-5xl sm:text-3xl sm:text-5xl">~5.8%</h3>
						<p class="text-xl font-bold md:text-2xl">average loan interest rate</p>
					</div>
				</IconCard>
				<IconCard icons={[faPerson, faGraduationCap]} class="bg-red-400 dark:bg-red-600">
					<div class="text-center text-black opacity-75 dark:text-white">
						<h3 class="text-4xl font-extrabold md:text-5xl sm:text-3xl sm:text-5xl">
							~43.5 million
						</h3>
						<p class="text-xl font-bold md:text-2xl">Students with Federal debt alone</p>
					</div>
				</IconCard>
			</div>
		</section>

		<section class="relative mx-3 flex flex-col justify-center py-20 md:py-32">
			<h2 class="mb-10 text-center text-4xl font-extrabold sm:text-5xl sm:leading-[1.125]">
				<span class="block">
					<AnimateOnScroll class="inline-block">
						<span class="animate-pulse from-green-700 to-blue-500 bg-gradient-to-br bg-clip-text text-transparent dark:from-green-300 dark:to-blue-300">
							List
						</span>
					</AnimateOnScroll>{" "}
					your own student loan
				</span>
				<span class="block">
					<AnimateOnScroll class="inline-block animate-delay-500">
						<span class="animate-pulse from-green-700 to-blue-500 bg-gradient-to-br bg-clip-text text-transparent dark:from-green-300 dark:to-blue-300">
							Donate
						</span>
					</AnimateOnScroll>{" "}
					to help others
				</span>
			</h2>

			<div class="grid grid-cols-1 place-items-center items-center justify-center gap-10 sm:grid-cols-2">
				<div class="group max-w-md flex items-center gap-x-5">
					<Fa
						icon={faPersonCircleCheck}
						class="w-12 shrink-0 text-5xl text-green-800 transition-transform group-hover:scale-125 dark:text-green-500"
					/>
					<div class="bg-">
						<h3 class="text-2xl font-bold">List your loan</h3>
						<p class="text-gray-500 dark:text-gray-400">
							Create a profile and list your student loan. We'll help you link the loan balance. Tag
							yourself with your school, major, and more. You can list as much or as little
							information as you want.
						</p>
					</div>
				</div>
				<div class="group max-w-md flex animate-delay-none items-center gap-x-5 md:animate-delay-200">
					<Fa
						icon={faHandsHoldingDollar}
						class="w-12 shrink-0 text-5xl text-blue-800 transition-transform group-hover:scale-125 dark:text-blue-500"
					/>
					<div>
						<h3 class="text-2xl font-bold">Donate to your peers</h3>
						<p class="text-gray-500 dark:text-gray-400">
							Donate to help your peers pay off their student loans. Search for students with your
							own school, major, or other info. You can donate to as many students as you want.
						</p>
					</div>
				</div>
				<div class="group col-span-1 max-w-md flex items-center gap-x-5 sm:col-span-2 md:animate-delay-400">
					<Fa
						icon={faCircleDollarToSlot}
						class="w-12 shrink-0 text-5xl text-green-800 transition-transform group-hover:scale-125 dark:text-green-500"
					/>
					<div>
						<h3 class="text-2xl font-bold">Get paid</h3>
						<p class="text-gray-500 dark:text-gray-400">
							Donations are sent directly to the student. Students can use the money to pay off
							their student loans.
						</p>
					</div>
				</div>
			</div>
		</section>
	</>
));
