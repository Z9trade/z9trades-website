import { ShoppingCartIcon, DocumentCheckIcon, CurrencyDollarIcon, ClockIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Bulk Imports',
        description:
            'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
        icon: ShoppingCartIcon,
    },
    {
        name: 'Custom Product Import',
        description:
            'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
        icon: DocumentCheckIcon,
    },
    {
        name: 'Business Financing',
        description:
            'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
        icon: CurrencyDollarIcon,
    },
    {
        name: 'Buy Now pay Later',
        description:
            'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
        icon: ClockIcon,
    },
]

export default function Services() {
    return (
        <div id='services' className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base/7 font-semibold " >what we do</h2>
                    <p style={{ color: "#610e00" }} className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
                        Services We Excel in delivering
                    </p>
                    <p className="mt-6 text-lg/8 text-gray-600" style={{ color: "rgb(224, 120, 0)" }}>
                        Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
                        pulvinar et feugiat blandit at. In mi viverra elit nunc.
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
