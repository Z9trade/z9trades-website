'use client'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'



export default function HeroSection() {
    return (

        <div className="bg-yellow-50">
            <div className="relative isolate px-6 lg:px-8">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] backdrop-blur bg-red-100/90 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    />
                </div>
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-25">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm/6 text-red-600 ring-1 ring-red-900/10 hover:ring-red-900/20">
                            Comming Soon.{' '}
                            <a href="#join" className="font-semibold text-indigo-600">
                                <span aria-hidden="true" className="absolute inset-0" />
                                Join waiting List...<span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 style={{ color: "#610e00" }} className="text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
                            Your Trusted Wholesale Partner
                        </h1>
                        <p style={{ color: "#de3a1d" }} className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                            We help resellers import affordable, high-quality products from China to Africa with trusted suppliers, secure transactions, and reliable logistics.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Button size='lg' >
                                <Link href="#join">
                                    Join Our waiting List
                                </Link>
                            </Button>

                            <Button variant={"link"}>

                                <Link href="#about" className="text-sm/6 font-semibold text-gray-900">
                                    Learn more <span aria-hidden="true">→</span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    />
                </div>
            </div>
        </div>
    )
}


