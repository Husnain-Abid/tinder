import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";

const TinderAllPlans = () => {

    const navigate = useNavigate();


    const [activePlan, setActivePlan] = useState(0)
    const scrollRef = useRef(null);
    const plans = [
        {
            name: "tinder",
            secondName: "plus",
            color: "bg-gradient-to-r from-pink-100 to-pink-300",
            textColor: "text-pink-500",
            icon: "pink",
            price: "$11.49",
            features: {
                unlimitedLikes: true,
                seeWhoLikesYou: false,
                priorityLikes: false,
                unlimitedRewinds: true,
                freeBoost: false,
                superLikes: false,
                firstImpressions: false,
                passport: true,
                controlProfile: true,
                controlWhoSeesYou: true,
                controlWhoYouSee: true,
                hideAds: true,
            },
        },
        {
            name: "tinder ",
            secondName: "gold",
            color: "bg-gradient-to-r from-amber-50 to-amber-200",
            textColor: "text-amber-500",
            icon: "amber",
            price: "$24.99",
            features: {
                unlimitedLikes: true,
                seeWhoLikesYou: true,
                priorityLikes: false,
                unlimitedRewinds: true,
                freeBoost: true,
                superLikes: true,
                firstImpressions: false,
                passport: true,
                controlProfile: true,
                controlWhoSeesYou: true,
                controlWhoYouSee: true,
                hideAds: true,
            },
        },
        {
            name: "tinder",
            secondName: "platinum",
            color: "bg-gradient-to-r from-gray-100 to-gray-300",
            textColor: "text-gray-700",
            icon: "gray",
            price: "$39.99",
            features: {
                unlimitedLikes: true,
                seeWhoLikesYou: true,
                priorityLikes: true,
                unlimitedRewinds: true,
                freeBoost: true,
                superLikes: true,
                firstImpressions: true,
                passport: true,
                controlProfile: true,
                controlWhoSeesYou: true,
                controlWhoYouSee: true,
                hideAds: true,
            },
        },
    ]

    const handlePlanChange = (index) => {
        setActivePlan(index)
    }

    const planRefs = useRef([])

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = planRefs.current.indexOf(entry.target)
                    if (index !== -1) {
                        setActivePlan(index)
                    }
                }
            })
        }, {
            threshold: 0.5, // Adjust this value based on when you want the active plan to change
        })

        planRefs.current.forEach((plan) => observer.observe(plan))

        return () => {
            observer.disconnect()
        }
    }, [])







    const renderTinderLogo = (color) => {
        return (
            <div className="flex items-center justify-center">


                <svg xmlns="http://www.w3.org/2000/svg" class={`h-5 w-5 ${color === "pink" ? "text-pink-500 fill-pink-500" : color === "amber" ? "text-amber-500 fill-amber-500" : "text-gray-700 fill-gray-700"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path></svg>


                <span
                    className={`ml-1 text-xl font-bold ${color === "pink" ? "text-gray-500" : color === "amber" ? "text-amber-500" : "text-gray-700"}`}
                >
                    {plans[activePlan].name}
                </span>
                <span
                    className={`ml-1 px-2 py-0.5 ${color === "pink" ? "bg-pink-500" : color === "amber" ? "bg-amber-500" : "bg-gray-700"} text-white text-xs font-bold rounded uppercase`}
                >
                    {plans[activePlan].secondName}
                </span>
            </div>
        )
    }

    const currentPlan = plans[activePlan]

    return (
        <div className="bg-white min-h-screen">
            <div className="max-w-md mx-auto p-4">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-xl font-semibold text-gray-700">My Subscription</h1>
                    <button className="text-gray-500 p-2" onClick={() => navigate("/home")}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Plan Carousel */}
                <div className="relative mb-4">
                    <div className="flex space-x-4 overflow-x-auto no-scrollbar pb-4 snap-x">
                        {plans.map((plan, index) => (
                            //   <div
                            //     key={index}
                            //     className={`flex-shrink-0 w-full snap-center rounded-lg p-8 ${plan.color} cursor-pointer transition-all duration-300 ${activePlan === index ? "scale-100" : "scale-95 opacity-70"}`}
                            //     onClick={() => handlePlanChange(index)}
                            //   >

                            <div
                                key={index}
                                ref={(el) => (planRefs.current[index] = el)}
                                className={`flex-shrink-0 w-full snap-center rounded-lg p-6 ${plan.color} cursor-pointer transition-all duration-300 ${activePlan === index ? "scale-100" : "scale-95 opacity-70"}`}
                            >




                                <div className="flex justify-center items-center h-12">{renderTinderLogo(plan.icon)}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center space-x-2 mb-8">
                    {plans.map((_, index) => (
                        <button
                            key={index}
                            className={`w-2 h-2 rounded-full ${activePlan === index ? "bg-gray-800" : "bg-gray-300"}`}
                            onClick={() => handlePlanChange(index)}
                        />
                    ))}
                </div>

                {/* Features List */}
                <div className="mb-8">
                    {/* Upgrade Your Likes Section */}
                    <div className="mb-6">
                        <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 mb-4">
                            Upgrade Your Likes
                        </div>

                        <ul className="space-y-4">
                            <li className="flex items-start">
                                {currentPlan.features.unlimitedLikes ? (
                                    <div className="flex-shrink-0 mt-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-gray-800"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                ) : (
                                    <div className="flex-shrink-0 mt-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                            />
                                        </svg>
                                    </div>
                                )}
                                <div className="ml-3">
                                    <p
                                        className={`font-semibold ${currentPlan.features.unlimitedLikes ? "text-gray-800" : "text-gray-400"}`}
                                    >
                                        Unlimited Likes
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-start">
                                {currentPlan.features.seeWhoLikesYou ? (
                                    <div className="flex-shrink-0 mt-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-gray-800"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                ) : (
                                    <div className="flex-shrink-0 mt-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                            />
                                        </svg>
                                    </div>
                                )}
                                <div className="ml-3">
                                    <p
                                        className={`font-semibold ${currentPlan.features.seeWhoLikesYou ? "text-gray-800" : "text-gray-400"}`}
                                    >
                                        See Who Likes You
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-start">
                                {currentPlan.features.priorityLikes ? (
                                    <div className="flex-shrink-0 mt-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-gray-800"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                ) : (
                                    <div className="flex-shrink-0 mt-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                            />
                                        </svg>
                                    </div>
                                )}
                                <div className="ml-3">
                                    <p
                                        className={`font-semibold ${currentPlan.features.priorityLikes ? "text-gray-800" : "text-gray-400"}`}
                                    >
                                        Priority Likes
                                    </p>
                                    <p className={`text-sm ${currentPlan.features.priorityLikes ? "text-gray-600" : "text-gray-400"}`}>
                                        Your Likes will be seen sooner with Priority Likes.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Enhance Your Experience Section */}
                    <div className="mb-6">
                        <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 mb-4">
                            Enhance Your Experience
                        </div>

                        <ul className="space-y-4">
                            <li className="flex items-start">
                                {currentPlan.features.unlimitedRewinds ? (
                                    <div className="flex-shrink-0 mt-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-gray-800"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                ) : (
                                    <div className="flex-shrink-0 mt-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                            />
                                        </svg>
                                    </div>
                                )}
                                <div className="ml-3">
                                    <p
                                        className={`font-semibold ${currentPlan.features.unlimitedRewinds ? "text-gray-800" : "text-gray-400"}`}
                                    >
                                        Unlimited Rewinds
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-start">
                                {currentPlan.features.freeBoost ? (
                                    <div className="flex-shrink-0 mt-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-gray-800"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                ) : (
                                    <div className="flex-shrink-0 mt-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                            />
                                        </svg>
                                    </div>
                                )}
                                <div className="ml-3">
                                    <p className={`font-semibold ${currentPlan.features.freeBoost ? "text-gray-800" : "text-gray-400"}`}>
                                        1 Free Boost per month
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-start">
                                {currentPlan.features.superLikes ? (
                                    <div className="flex-shrink-0 mt-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-gray-800"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                ) : (
                                    <div className="flex-shrink-0 mt-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                            />
                                        </svg>
                                    </div>
                                )}
                                <div className="ml-3">
                                    <p className={`font-semibold ${currentPlan.features.superLikes ? "text-gray-800" : "text-gray-400"}`}>
                                        3 Free Super Likes per week
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-start">
                                {currentPlan.features.firstImpressions ? (
                                    <div className="flex-shrink-0 mt-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-gray-800"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                ) : (
                                    <div className="flex-shrink-0 mt-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                            />
                                        </svg>
                                    </div>
                                )}
                                <div className="ml-3">
                                    <p
                                        className={`font-semibold ${currentPlan.features.firstImpressions ? "text-gray-800" : "text-gray-400"}`}
                                    >
                                        3 Free First Impressions per week
                                    </p>
                                    <p className={`text-sm ${currentPlan.features.firstImpressions ? "text-gray-600" : "text-gray-400"}`}>
                                        Stand out with a message before matching.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Premium Discovery Section */}
                    <div className="mb-6">
                        <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 mb-4">
                            Premium Discovery
                        </div>

                        <ul className="space-y-4">
                            <li className="flex items-start">
                                {currentPlan.features.passport ? (
                                    <div className="flex-shrink-0 mt-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-gray-800"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                ) : (
                                    <div className="flex-shrink-0 mt-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                            />
                                        </svg>
                                    </div>
                                )}
                                <div className="ml-3">
                                    <p className={`font-semibold ${currentPlan.features.passport ? "text-gray-800" : "text-gray-400"}`}>
                                        Unlimited Passport™ Mode
                                    </p>
                                    <p className={`text-sm ${currentPlan.features.passport ? "text-gray-600" : "text-gray-400"}`}>
                                        Match and chat with people anywhere in the world.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Take Control Section */}
                    <div className="mb-6">
                        <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 mb-4">
                            Take Control
                        </div>

                        <ul className="space-y-4">
                            <li className="flex items-start">
                                {currentPlan.features.controlProfile ? (
                                    <div className="flex-shrink-0 mt-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-gray-800"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                ) : (
                                    <div className="flex-shrink-0 mt-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                            />
                                        </svg>
                                    </div>
                                )}
                                <div className="ml-3">
                                    <p
                                        className={`font-semibold ${currentPlan.features.controlProfile ? "text-gray-800" : "text-gray-400"}`}
                                    >
                                        Control Your Profile
                                    </p>
                                    <p className={`text-sm ${currentPlan.features.controlProfile ? "text-gray-600" : "text-gray-400"}`}>
                                        Only show what you want them to know.
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-start">
                                {currentPlan.features.controlWhoSeesYou ? (
                                    <div className="flex-shrink-0 mt-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-gray-800"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                ) : (
                                    <div className="flex-shrink-0 mt-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                            />
                                        </svg>
                                    </div>
                                )}
                                <div className="ml-3">
                                    <p
                                        className={`font-semibold ${currentPlan.features.controlWhoSeesYou ? "text-gray-800" : "text-gray-400"}`}
                                    >
                                        Control Who Sees You
                                    </p>
                                    <p
                                        className={`text-sm ${currentPlan.features.controlWhoSeesYou ? "text-gray-600" : "text-gray-400"}`}
                                    >
                                        Manage who you're seen by.
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-start">
                                {currentPlan.features.controlWhoYouSee ? (
                                    <div className="flex-shrink-0 mt-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-gray-800"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                ) : (
                                    <div className="flex-shrink-0 mt-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                            />
                                        </svg>
                                    </div>
                                )}
                                <div className="ml-3">
                                    <p
                                        className={`font-semibold ${currentPlan.features.controlWhoYouSee ? "text-gray-800" : "text-gray-400"}`}
                                    >
                                        Control Who You See
                                    </p>
                                    <p className={`text-sm ${currentPlan.features.controlWhoYouSee ? "text-gray-600" : "text-gray-400"}`}>
                                        Choose the type of people you want to connect with.
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-start">
                                {currentPlan.features.hideAds ? (
                                    <div className="flex-shrink-0 mt-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-gray-800"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                ) : (
                                    <div className="flex-shrink-0 mt-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                            />
                                        </svg>
                                    </div>
                                )}
                                <div className="ml-3">
                                    <p className={`font-semibold ${currentPlan.features.hideAds ? "text-gray-800" : "text-gray-400"}`}>
                                        Hide Ads
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 mb-6"></div>

                {/* Bottom Button */}
                <button className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-full transition duration-200">
                    STARTING AT {plans[activePlan].price}
                </button>


            </div>
        </div>
    )
}

export default TinderAllPlans

