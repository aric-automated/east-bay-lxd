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
    
      <section className="bg-white border-t py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Why East Bay Learning Design?
          </h2>
          <div className="w-full mb-4"></div>
          <div className="flex flex-wrap justify-center">
            <div className="pr-6 py-12 flex justify-end">
                <img className="w-[79px] h-[92px] object-contain"
                  width={79}
                  height={92}
                  alt="Image of a stylized 1"
                  src="/1.png"
                />
            </div>
            <div className="w-full sm:w-2/3 p-6">
              <h3 className="text-left sm:text-center text-3xl text-gray-800 font-bold leading-none mb-3">
                Engaging experiences for modern learners
              </h3>
              <p className="text-justify text-gray-600 mb-8">
                At East Bay Learning Design, we specialize in creating e-learning experiences that captivate and inspire. Our expert team combines innovative design thinking with cutting-edge technology to deliver impactful learning solutions. Whether you&apos;re a small business aiming to scale up, or a large corporate organization in need of support, we&apos;re here to help you succeed.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center">
            <div className="px-6 py-12 flex justify-end">
              <img className="w-[79px] h-[92px] object-contain"
                width={79}
                height={92}
                alt="Image of a stylized 2"
                src="/2.png"
              />
            </div>
            <div className="w-full sm:w-2/3 p-6">
              <h3 className="text-left sm:text-center text-3xl text-gray-800 font-bold leading-none mb-3">
                Simplified learning with mobile first deployment
              </h3>
              <p className="text-justify text-gray-600 mb-8">
                We empower learners to access content anytime, anywhere. Our simple, mobile-first methodology ensures seamless content deployment and an optimized learning experience. With our e-learning technology, you can deliver training that aligns with the on-the-go workday of today&apos;s learners, maximizing engagement and knowledge retention.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center">
            <div className="px-6 py-12 flex justify-end">
              <img className="w-[79px] h-[92px] object-contain"
                width={79}
                height={92}
                alt="Image of a stylized 3"
                src="/3.png"
              />
            </div>
            <div className="w-full sm:w-2/3 p-6">
              <h3 className="text-left sm:text-center text-3xl text-gray-800 font-bold leading-none mb-3">
                Iterative development, lasting impact
              </h3>
              <p className="text-justify text-gray-600 mb-8">
              Experience our iterative development methodology that drives continuous improvement and lasting impact. We believe in delivering rapid results without compromising quality. Drawing from our expertise across industries and our presence as speakers at renowned learning conferences, we bring a wealth of knowledge to each project.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center">
            <div className="px-6 py-12 flex justify-end">
              <img className="w-[79px] h-[92px] object-contain"
                width={79}
                height={92}
                alt="Image of a stylized 4"
                src="/4.png"
              />
            </div>
            <div className="w-full sm:w-2/3 p-6">
              <h3 className="text-left sm:text-center text-3xl text-gray-800 font-bold leading-none mb-3">
                Tailored solutions for your objectives
              </h3>
              <p className="text-justify text-gray-600 mb-8">
                Accelerate learning outcomes with our customized solutions tailored to your specific needs. We create personalized and immersive learning experiences that resonate with your learners. Every client is unique, and our commitment is to help you rapidly deploy content that enables you to achieve your operational and developmental objectives.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
