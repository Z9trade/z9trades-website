import { ShoppingCartIcon, DocumentCheckIcon, CurrencyDollarIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import { HandshakeIcon } from 'lucide-react'

const features = [
    {
        name: 'Wholesale Imports ',
        description:
            'Get access to high-quality phones, accessories, clothing, kitchenware, and more at factory prices.',
        icon: ShoppingCartIcon,
    },
    {
        name: 'Reliable Shipping',
        description:
            'We partner with trusted third-party logistics providers to ensure fast, secure delivery.',
        icon: DocumentCheckIcon,
    },
    {
        name: 'Halal Business Loans',
        description:
            'Through our third-party financial partners, resellers can access Shariah-compliant financing to grow their businesses.',
        icon: CurrencyDollarIcon,
    },
    {
        name: 'Joint Order Program',
        description:
            'Team up with other resellers to place bulk orders, lowering costs and maximizing profit.',
        icon: UserGroupIcon,
    },
    {
        name: 'VIP Support & Business Growth',
        description:
            'Early users enjoy exclusive discounts, priority customer support, and mentorship opportunities.',
        icon: HandshakeIcon,
    },
]

export default function Services() {
    return (
        <div id='services' className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base/7 font-semibold uppercase" >what we do</h2>
                    <p style={{ color: "#610e00" }} className="mt-2 text-4xl capitalize font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
                        Services We Excel in Delivering
                    </p>
                    <p className="mt-6 text-lg/7 text-gray-600" style={{ color: "rgb(224, 120, 0)" }}>
                        We are specially dedicated to providing a seamless and efficient wholesale import experience for African resellers. Our platform connects you with trusted suppliers, ensuring you have access to the best products at competitive prices. We are committed to helping you grow your business and succeed in the global market. Some of our services include:
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base/8 font-bold uppercase text-gray-900" style={{ color: "#610e00" }}>
                                    <div style={{ backgroundColor: "#610e00" }} className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <feature.icon aria-hidden="true" className="size-6 text-white" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd style={{ color: "rgb(224, 120, 0)" }} className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
