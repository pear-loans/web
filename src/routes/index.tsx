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
	faSchool,
} from "@fortawesome/pro-duotone-svg-icons";
import AnimateOnScroll from "~/components/container/animate-on-scroll";
import IconCard from "~/components/container/icon-card";
import Fa from "~/includes/fa";

export default component$(() => (
	<>
		<section class="py-20 md:py-32 flex justify-center items-center h-[60vh] sm:h-[66vh] overflow-hidden">
			<div class="relative">
				<div class="animate-fade-in-up z-10 animate-delay-700 pointer-events-none w-full h-full absolute">
					<Fa
						icon={faPear}
						opacity={[0.8, 0.9]}
						class="text-4xl xs:text-6xl md:text-7xl absolute -top-8 xs:-top-12 md:-top-20 right-8 rotate-12 animate-wiggle"
					/>
					<Fa
						icon={faGraduationCap}
						opacity={[0.8, 0.9]}
						class="fa-primary-blue-500 dark:fa-secondary-slate-200 text-4xl xs:text-6xl md:text-7xl absolute left-2 xs:left-6 bottom-12 xs:bottom-14 -rotate-12 animate-wiggle"
					/>
					<Fa
						icon={faSchool}
						opacity={[0.8, 0.9]}
						class="text-4xl xs:text-6xl md:text-7xl absolute -rotate-12 animate-wiggle -top-12 left-2 xs:left-auto xs:top-20 xs:right-8 md:top-24 md:right-16 fa-primary-blue-500 dark:fa-secondary-slate-200"
					/>
					<Fa
						icon={faMoneyBill1Wave}
						opacity={[0.8, 0.9]}
						class="text-4xl xs:text-6xl md:text-7xl absolute -bottom-12 xs:-bottom-14 md:-bottom-24 rotate-12 animate-wiggle left-20"
					/>
				</div>
				<h1 class="font-extrabold text-6xl xs:text-7xl md:text-8xl text-center relative z-30 inline-block">
					<span class="block">
						Help out your{" "}
						<span class="inline-block animate-fade-in-up animate-delay-300 bg-gradient-to-br from-green-700 to-blue-500 dark:from-green-300 dark:to-blue-300 text-transparent bg-clip-text">
							peers
						</span>
					</span>
					<span class="block">with their</span>
					<span class="block animate-fade-in-up animate-delay-500 bg-gradient-to-br from-green-700 to-blue-500 dark:from-green-300 dark:to-blue-300 text-transparent bg-clip-text">
						student loans
					</span>
				</h1>
			</div>
		</section>

		<section class="py-20 md:py-32 flex flex-col justify-center relative">
			<AnimateOnScroll rootMargin="0px 0px -200px 0px">
				<h2 class="font-extrabold text-4xl xs:text-5xl xs:leading-[1.125] text-center mb-10">
					<span class="block">Student Loans are a</span>
					<span class="pb-1 block bg-gradient-to-br from-red-700 to-orange-500 dark:from-red-300 dark:to-orange-300 text-transparent bg-clip-text animate-pulse">
						huge problem
					</span>
				</h2>
			</AnimateOnScroll>

			<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-10 px-5 sm:px-10">
				<AnimateOnScroll delay={300}>
					<IconCard
						icons={[faMoneyBill, faLandmark]}
						class="bg-orange-300 dark:bg-orange-600"
					>
						<div class="text-center opacity-75 text-black dark:text-white">
							<h3 class="text-4xl xs:text-5xl sm:text-3xl md:text-5xl font-extrabold">
								~$1.73 Trillion
							</h3>
							<p class="text-xl md:text-2xl font-bold">
								Student loan debt in the US
							</p>
						</div>
					</IconCard>
				</AnimateOnScroll>
				<AnimateOnScroll delay={600}>
					<IconCard
						icons={[faGauge, faGraduationCap]}
						class="bg-red-500 dark:bg-red-800"
					>
						<div class="text-center opacity-75 text-black dark:text-white">
							<h3 class="text-4xl xs:text-5xl sm:text-3xl md:text-5xl font-extrabold">
								~$20,000
							</h3>
							<p class="text-xl md:text-2xl font-bold">
								Median student loan debt
							</p>
						</div>
					</IconCard>
				</AnimateOnScroll>
				<AnimateOnScroll delay={900}>
					<IconCard
						icons={[faPerson, faHandHoldingDollar]}
						class="bg-yellow-400 dark:bg-yellow-700"
					>
						<div class="text-center opacity-75 text-black dark:text-white">
							<h3 class="text-4xl xs:text-5xl sm:text-3xl md:text-5xl font-extrabold">
								~$220
							</h3>
							<p class="text-xl md:text-2xl font-bold">
								Median monthly payment
							</p>
						</div>
					</IconCard>
				</AnimateOnScroll>
				<AnimateOnScroll delay={1200}>
					<IconCard
						icons={[faMoneyBill, faChartLineUp]}
						class="bg-orange-200 dark:bg-orange-400"
					>
						<div class="text-center opacity-75 text-black dark:text-white">
							<h3 class="text-4xl xs:text-5xl sm:text-3xl md:text-5xl font-extrabold">
								~47%
							</h3>
							<p class="text-xl md:text-2xl font-bold">
								of students with growing loan balances
							</p>
						</div>
					</IconCard>
				</AnimateOnScroll>
				<AnimateOnScroll delay={1500}>
					<IconCard
						icons={[faCoins, faCoin]}
						class="bg-red-300 dark:bg-red-950"
					>
						<div class="text-center opacity-75 text-black dark:text-white">
							<h3 class="text-4xl xs:text-5xl sm:text-3xl md:text-5xl font-extrabold">
								~5.8%
							</h3>
							<p class="text-xl md:text-2xl font-bold">
								average loan interest rate
							</p>
						</div>
					</IconCard>
				</AnimateOnScroll>
				<AnimateOnScroll delay={1800}>
					<IconCard
						icons={[faPerson, faGraduationCap]}
						class="bg-red-400 dark:bg-red-600"
					>
						<div class="text-center opacity-75 text-black dark:text-white">
							<h3 class="text-4xl xs:text-5xl sm:text-3xl md:text-5xl font-extrabold">
								~43.5 million
							</h3>
							<p class="text-xl md:text-2xl font-bold">
								Students with Federal debt alone
							</p>
						</div>
					</IconCard>
				</AnimateOnScroll>
			</div>
		</section>

		<section class="py-20 md:py-32 flex flex-col justify-center relative mx-3">
			<AnimateOnScroll>
				<h2 class="font-extrabold text-4xl xs:text-5xl xs:leading-[1.125] text-center mb-10">
					<span class="block">
						<span class="bg-gradient-to-br from-green-700 to-blue-500 dark:from-green-300 dark:to-blue-300 text-transparent bg-clip-text animate-pulse">
							List{" "}
						</span>
						your own student loan
					</span>
					<span class="block">
						<span class="bg-gradient-to-br from-green-700 to-blue-500 dark:from-green-300 dark:to-blue-300 text-transparent bg-clip-text animate-pulse">
							Donate{" "}
						</span>
						to help others
					</span>
				</h2>
			</AnimateOnScroll>

			<div class="grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-10 place-items-center">
				<AnimateOnScroll
					class="flex items-center gap-x-5 max-w-md group"
					delay={200}
				>
					<Fa
						icon={faPersonCircleCheck}
						class="text-5xl shrink-0 group-hover:scale-125 transition-transform"
					/>
					<div>
						<h3 class="font-bold text-2xl">List your loan</h3>
						<p class="text-gray-500 dark:text-gray-400">
							Create a profile and list your student loan. We'll help you link
							the loan balance. Tag yourself with your school, major, and more.
							You can list as much or as little information as you want.
						</p>
					</div>
				</AnimateOnScroll>
				<AnimateOnScroll
					class="flex items-center gap-x-5 max-w-md group"
					delay={400}
				>
					<Fa
						icon={faHandsHoldingDollar}
						class="text-5xl shrink-0 group-hover:scale-125 transition-transform fa-primary-blue-500 fa-secondary-slate-800 dark:fa-secondary-slate-200"
					/>
					<div>
						<h3 class="font-bold text-2xl">Donate to your peers</h3>
						<p class="text-gray-500 dark:text-gray-400">
							Donate to help your peers pay off their student loans. Search for
							students with your own school, major, or other info. You can
							donate to as many students as you want.
						</p>
					</div>
				</AnimateOnScroll>
				<AnimateOnScroll
					class="flex items-center gap-x-5 max-w-md group col-span-1 sm:col-span-2"
					delay={500}
				>
					<Fa
						icon={faCircleDollarToSlot}
						class="text-5xl shrink-0 group-hover:scale-125 transition-transform"
					/>
					<div>
						<h3 class="font-bold text-2xl">Get paid</h3>
						<p class="text-gray-500 dark:text-gray-400">
							Donations are sent directly to the student. Students can use the
							money to pay off their student loans.
						</p>
					</div>
				</AnimateOnScroll>
			</div>
		</section>
	</>
));
