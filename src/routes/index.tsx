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
import AnimateOnScroll from "🍐/components/container/animate-on-scroll";
import IconCard from "🍐/components/container/icon-card";
import Fa from "🍐/includes/fa";

export default component$(() => (
	<>
		<section class="py-20 md:py-40 flex justify-center items-center h-[60vh] sm:h-[66vh]">
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
				{/* SVG generated from https://www.blobmaker.app/, https://app.haikei.app/ */}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 200 200"
					class="absolute block -top-1/2 xs:-top-52 md:-top-60 -left-1/4 xs:left-0 z-0 pointer-events-none animate-fade-in-up w-[150%] xs:w-full"
					role="none"
					aria-hidden="true"
				>
					<title>Blob</title>
					<defs>
						<linearGradient id="gradient" x1="0%" x2="100%">
							<stop
								offset="10%"
								class="stop-color-green-100 dark:stop-color-green-900"
							/>
							<stop
								offset="90%"
								class="stop-color-blue-100 dark:stop-color-blue-900"
							/>
						</linearGradient>
					</defs>
					<path
						d="M32.3,-43.4C40.1,-38.8,43.4,-27,47.1,-15.4C50.8,-3.8,54.8,7.7,56.5,23.3C58.3,38.9,57.7,58.8,47.9,60.2C38.1,61.7,19,44.8,1.4,42.8C-16.2,40.9,-32.4,53.9,-39.9,51.7C-47.5,49.5,-46.4,32.1,-53.1,16.2C-59.8,0.2,-74.3,-14.3,-74.8,-27.9C-75.3,-41.5,-61.9,-54.1,-47.1,-56.4C-32.3,-58.8,-16.2,-50.8,-2,-48.1C12.3,-45.4,24.5,-48,32.3,-43.4Z"
						transform="translate(100 100)"
						fill="url(#gradient)"
					/>
				</svg>

				<h1 class="font-extrabold text-6xl xs:text-7xl md:text-8xl text-center relative z-30 inline-block animate-fade-in-up animate-delay-300">
					<span class="block">
						Help out your{" "}
						<span class="bg-gradient-to-br from-green-700 to-blue-500 dark:from-green-300 dark:to-blue-300 text-transparent bg-clip-text animate-pulse">
							peers
						</span>
					</span>
					<span class="block">with their</span>
					<span class="block bg-gradient-to-br from-green-700 to-blue-500 dark:from-green-300 dark:to-blue-300 text-transparent bg-clip-text animate-pulse">
						student loans
					</span>
				</h1>
			</div>
		</section>

		<section class="py-20 md:py-40 flex flex-col justify-center relative">
			<AnimateOnScroll rootMargin="0px 0px -200px 0px">
				<h2 class="font-extrabold text-4xl xs:text-5xl xs:leading-[1.125] text-center mb-10">
					<span class="block">Student Loans are a</span>
					<span class="block bg-gradient-to-br from-red-700 to-orange-500 dark:from-red-300 dark:to-orange-300 text-transparent bg-clip-text animate-pulse">
						huge problem
					</span>
				</h2>
			</AnimateOnScroll>

			<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-10 px-5 sm:px-10">
				<AnimateOnScroll delay={200}>
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
				<AnimateOnScroll delay={400}>
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
				<AnimateOnScroll delay={600}>
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
				<AnimateOnScroll delay={200}>
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
				<AnimateOnScroll delay={400}>
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
				<AnimateOnScroll delay={500}>
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

			<svg
				id="visual"
				viewBox="0 0 900 600"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				version="1.1"
				class="w-full absolute left-0 bottom-0 -z-10 opacity-75"
				role="none"
			>
				<title>Waves Visual</title>
				<path
					d="M0 357L18.8 360C37.7 363 75.3 369 112.8 370.7C150.3 372.3 187.7 369.7 225.2 367.3C262.7 365 300.3 363 337.8 364.3C375.3 365.7 412.7 370.3 450.2 375.7C487.7 381 525.3 387 562.8 380C600.3 373 637.7 353 675.2 349.2C712.7 345.3 750.3 357.7 787.8 368C825.3 378.3 862.7 386.7 881.3 390.8L900 395L900 601L881.3 601C862.7 601 825.3 601 787.8 601C750.3 601 712.7 601 675.2 601C637.7 601 600.3 601 562.8 601C525.3 601 487.7 601 450.2 601C412.7 601 375.3 601 337.8 601C300.3 601 262.7 601 225.2 601C187.7 601 150.3 601 112.8 601C75.3 601 37.7 601 18.8 601L0 601Z"
					fill="#fa7268"
				/>
				<path
					d="M0 379L18.8 380C37.7 381 75.3 383 112.8 381C150.3 379 187.7 373 225.2 370.3C262.7 367.7 300.3 368.3 337.8 376.2C375.3 384 412.7 399 450.2 405.5C487.7 412 525.3 410 562.8 404.2C600.3 398.3 637.7 388.7 675.2 392.8C712.7 397 750.3 415 787.8 420.3C825.3 425.7 862.7 418.3 881.3 414.7L900 411L900 601L881.3 601C862.7 601 825.3 601 787.8 601C750.3 601 712.7 601 675.2 601C637.7 601 600.3 601 562.8 601C525.3 601 487.7 601 450.2 601C412.7 601 375.3 601 337.8 601C300.3 601 262.7 601 225.2 601C187.7 601 150.3 601 112.8 601C75.3 601 37.7 601 18.8 601L0 601Z"
					fill="#f16367"
				/>
				<path
					d="M0 428L18.8 427C37.7 426 75.3 424 112.8 426C150.3 428 187.7 434 225.2 438.5C262.7 443 300.3 446 337.8 448C375.3 450 412.7 451 450.2 452.3C487.7 453.7 525.3 455.3 562.8 459C600.3 462.7 637.7 468.3 675.2 464.8C712.7 461.3 750.3 448.7 787.8 447.2C825.3 445.7 862.7 455.3 881.3 460.2L900 465L900 601L881.3 601C862.7 601 825.3 601 787.8 601C750.3 601 712.7 601 675.2 601C637.7 601 600.3 601 562.8 601C525.3 601 487.7 601 450.2 601C412.7 601 375.3 601 337.8 601C300.3 601 262.7 601 225.2 601C187.7 601 150.3 601 112.8 601C75.3 601 37.7 601 18.8 601L0 601Z"
					fill="#e85467"
				/>
				<path
					d="M0 469L18.8 471.8C37.7 474.7 75.3 480.3 112.8 484.3C150.3 488.3 187.7 490.7 225.2 491C262.7 491.3 300.3 489.7 337.8 485.2C375.3 480.7 412.7 473.3 450.2 472C487.7 470.7 525.3 475.3 562.8 473.3C600.3 471.3 637.7 462.7 675.2 466.3C712.7 470 750.3 486 787.8 489C825.3 492 862.7 482 881.3 477L900 472L900 601L881.3 601C862.7 601 825.3 601 787.8 601C750.3 601 712.7 601 675.2 601C637.7 601 600.3 601 562.8 601C525.3 601 487.7 601 450.2 601C412.7 601 375.3 601 337.8 601C300.3 601 262.7 601 225.2 601C187.7 601 150.3 601 112.8 601C75.3 601 37.7 601 18.8 601L0 601Z"
					fill="#de4467"
				/>
				<path
					d="M0 527L18.8 524.5C37.7 522 75.3 517 112.8 513C150.3 509 187.7 506 225.2 510.7C262.7 515.3 300.3 527.7 337.8 533C375.3 538.3 412.7 536.7 450.2 530.7C487.7 524.7 525.3 514.3 562.8 508.3C600.3 502.3 637.7 500.7 675.2 503.7C712.7 506.7 750.3 514.3 787.8 514.5C825.3 514.7 862.7 507.3 881.3 503.7L900 500L900 601L881.3 601C862.7 601 825.3 601 787.8 601C750.3 601 712.7 601 675.2 601C637.7 601 600.3 601 562.8 601C525.3 601 487.7 601 450.2 601C412.7 601 375.3 601 337.8 601C300.3 601 262.7 601 225.2 601C187.7 601 150.3 601 112.8 601C75.3 601 37.7 601 18.8 601L0 601Z"
					fill="#d23467"
				/>
				<path
					d="M0 547L18.8 551.7C37.7 556.3 75.3 565.7 112.8 568.3C150.3 571 187.7 567 225.2 562C262.7 557 300.3 551 337.8 552.3C375.3 553.7 412.7 562.3 450.2 562.3C487.7 562.3 525.3 553.7 562.8 547.5C600.3 541.3 637.7 537.7 675.2 537.3C712.7 537 750.3 540 787.8 543.2C825.3 546.3 862.7 549.7 881.3 551.3L900 553L900 601L881.3 601C862.7 601 825.3 601 787.8 601C750.3 601 712.7 601 675.2 601C637.7 601 600.3 601 562.8 601C525.3 601 487.7 601 450.2 601C412.7 601 375.3 601 337.8 601C300.3 601 262.7 601 225.2 601C187.7 601 150.3 601 112.8 601C75.3 601 37.7 601 18.8 601L0 601Z"
					fill="#c62368"
				/>
			</svg>
		</section>

		<section class="py-20 md:py-40 flex flex-col justify-center relative">
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
