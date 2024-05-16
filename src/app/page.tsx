import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import Image from 'next/image'
import Feature from './feature'
import { ArrowUpDown, Timer, Workflow } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col h-full md:py-36 md:px-32 pt-11 pb-24 px-8
        w-full items-center text-center gap-12">
      <div className="flex flex-col gap-6 items-center">
        <Typography className="flex max-w-2xl" variant="h1">
          East Bay Learning Design
        </Typography>
        <Typography className="max-w-2xl" variant="h5">
          Simplify your training and grow your business with our custom learning solutions.
        </Typography>
        <Image
          width={512}
          height={512}
          alt="Maple Syrup Production eLearning Mockup"
          src="/maple-tutorial.png"
        />
      </div>
      <section className="bg-white border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Why East Bay Learning Design?
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 p-6 flex justify-end">
            <img className="w-[79px] h-[92px] object-contain"
              width={79}
              height={92}
              alt="Image of a stylized 1"
              src="/1.png"
            />
          </div>
          <div className="w-full sm:w-1/2 p-6">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              Engaging experiences for modern learners
            </h3>
            <p className="text-gray-600 mb-8">
              At East Bay Learning Design, we specialize in creating e-learning experiences that captivate and inspire. Our expert team combines innovative design thinking with cutting-edge technology to deliver impactful learning solutions. Whether you&apos;re a small business aiming to scale up, or a large corporate organization in need of support, we&apos;re here to help you succeed.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <img className="object-right"
                width={79}
                height={92}
                alt="Image of a stylized 2"
                src="/2.png"
              />
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <div className="align-middle">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Simplified learning with mobile first deployment
              </h3>
              <p className="text-gray-600 mb-8">
                We empower learners to access content anytime, anywhere. Our simple, mobile-first methodology ensures seamless content deployment and an optimized learning experience. With our e-learning technology, you can deliver training that aligns with the on-the-go workday of today&apos;s learners, maximizing engagement and knowledge retention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
      <div className="flex flex-col md:pt-24 md:gap-36 gap-24 items-center">
        <div className="flex flex-col gap-12 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Quick solutions, less stress
          </Typography>
          <div className="flex md:flex-row flex-col gap-12">
            <Feature
              icon={<Timer size={24} />}
              headline="Fix emergencies fast"
              description="Save 20-30 minutes per on-call ticket - no more searching for relevant issues and runbooks"
            />
            <Feature
              icon={<ArrowUpDown size={24} />}
              headline="Universally compatible"
              description="Works with PagerDuty, Jira, or custom Slack alerts—Pandem integrates with any system"
            />
            <Feature
              icon={<Workflow size={24} />}
              headline="Secure for your org"
              description="We keep your data safe by taking top security measures."
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 max-w-2xl items-center">
          <Typography className="max-w-2xl" variant="h1">
            Instant setup, no custom code
          </Typography>
          <Typography className="max-w-2xl" variant="p">
            Quickly link new on-call tickets to similar past
            incidents and their solutions. All directly in
            Slack the moment an incident happens.
          </Typography>
          <Image
            width={1024}
            height={632}
            alt="Pandem.dev hero image"
            src="/hero1.png"
          />
        </div>
        <div className="flex flex-col gap-6 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Get in touch
          </Typography>
          <div>Book a demo, or hop on a call</div>
          <Link
            href="https://map.sistilli.dev/public/coding/SaaS+Boilerplate"
            target="_blank"
          >
            <Button size="tiny" variant="ghost">
              {`Book now`}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
